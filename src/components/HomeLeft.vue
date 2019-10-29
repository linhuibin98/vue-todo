<template>
  <div class="project-group">
    <template v-for="item of resouce">
      <router-link :to="{name: 'HomeRight', query: {id: item.__id__}}"  :key="item.__id__">
      <div class="project">
        <div class="project-clock">
          <i class="iconfont">&#xe61d;</i>
        </div>
        <div class="project-name">{{item.name}}</div>
        <div class="project-count">
          <span>{{ item.projectResources.ongoing.res.length }}</span>
        </div>
      </div>
    </router-link>
    </template>
    <div class="project new" @click="handleAdd">
      <div class="project-clock">
        <i class="iconfont">&#xe656;</i>
      </div>
      <div class="project-name">新增</div>
    </div>
  </div>
</template>

<script>
import createModal from '@/components/createModal';

export default {
  name: 'HomeLeft',
  props: {
    resouce: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    handleAdd() {
      const self = this;
      createModal({
        confirm(val) {
          val.trim();
          if (val === '') {
            // 输入空
            return { isOk: false, msg: '项目名不能为空...' };
          }
          // 查重
          const res = Object.keys(self.resouce);
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < res.length; i++) {
            if (res[i] === val) {
              return { isOk: false, msg: '该项目已存在...' };
            }
          }
          self.$emit('addItem', val);
          return { isOk: true, msg: '添加成功...' };
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.project-group {
  flex: 1;
  border: 1px solid #ddd;

  .project {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #ddd;
    color: #788ba1;
    cursor: pointer;

    &.new {
      color: #5997c8;
    }

    &.new:hover {
      color: #28c6d3;
    }

    &:hover .project-name {
      color: #28c6d3;
    }

    .project-clock {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
    }
    .project-name {
      flex: 7;
      padding-left: 20px;
    }
    .project-count {
      flex: 1;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background-color: #28c6d3;
        color: #fff;
        font-size: 12px;
      }
    }
  }
}
</style>
