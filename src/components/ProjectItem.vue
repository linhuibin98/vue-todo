<template>
  <div class="classification">
    <div class="title">{{title}}</div>
    <div class="project-item" v-for="(item, index) in resources.res" :key="item.describe">
      <div class="checked">
        <input
          type="checkbox"
          :id="labId() + index"
          :checked="item.selected"
          @input="(e) => {handleIpt(e, index)}"
        />
        <label :for="labId() + index"></label>
        <div class="describe">{{item.describe}}</div>
      </div>
    </div>
    <div class="project-add" @click="handleClick">
      <div class="project-clock">
        <i class="iconfont">&#xe656;</i>
      </div>
    </div>
  </div>
</template>

<script>
import createModal from '@/components/createModal';

export default {
  props: {
    title: {
      type: String,
      default: '全部',
    },
    resources: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    handleClick() {
      const self = this;
      createModal({
        confirm(val) {
          val.trim();
          if (val === '') {
            // 输入空
            return { isOk: false, msg: '项目名不能为空...' };
          }
          // 查重
          const { res } = self.$parent.projectResources.all;
          const len = res.length;
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < len; i++) {
            if (res[i].describe === val) {
              return { isOk: false, msg: '该项目已存在...' };
            }
          }
          self.$emit('addRes', val);
          return { isOk: true, msg: '添加成功...' };
        },
      });
    },
    handleIpt(e, index) {
      this.$emit('changeRes', {
        type: this.resources.type,
        index,
        checked: e.target.checked,
      });
    },
    labId() {
      return `__${this.resources.type[0].charCodeAt()}${
        this.resources.type[1]
      }`;
    },
  },

  mounted() {},

  updated() {},
};
</script>

<style lang="less" scoped>
.classification {
  flex: 1;
  padding: 15px;
  background-color: #eee;
  color: #262626;

  .title {
    display: flex;
    justify-content: center;
    font-size: 13px;
    font-weight: bold;
  }

  .project-item,
  .project-add {
    display: flex;
    background-color: #fff;
    margin-top: 15px;
    cursor: pointer;
    border-radius: 5px;
  }

  .project-item {
    padding: 8px;
    align-items: center;

    .checked {
      display: flex;
      align-items: center;

      input {
        display: none;

        &:checked + label {
          background-color: #fff;
          border-color: #cacaca;
        }

        &:checked + label::after {
          content: "\2714";
          color: #cacaca;
          font-size: 14px;
        }

        &:checked + label + .describe {
          color: #d5d5d5;
        }
      }
      label {
        background-color: #fff;
        border-radius: 5px;
        border: 1px solid #969696;
        width: 15px;
        height: 15px;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        line-height: 15px;
        cursor: pointer;
        &:hover {
          border-color: #262626 !important;
          background: rgba(0, 0, 0, 0.1);
        }
      }
      .describe {
        margin-left: 5px;
        font-size: 13px;
      }
    }
  }
  .project-add {
    justify-content: center;

    &:hover {
      background-color: #ddd;
    }

    &:hover i {
      color: #28c6d3;
    }

    i {
      color: #ccc;
    }
  }
}
</style>
