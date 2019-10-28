<template>
  <div class="project-group">
    <div class="project">
      <div class="project-clock"><i class="iconfont">&#xe61d;</i></div>
      <div class="project-name">吃饭</div>
      <div class="project-count"><span>{{count}}</span></div>
    </div>
    <div class="project">
      <div class="project-clock"><i class="iconfont">&#xe61d;</i></div>
      <div class="project-name">睡觉</div>
      <div class="project-count"><span>1</span></div>
    </div>
    <div class="project">
      <div class="project-clock"><i class="iconfont">&#xe61d;</i></div>
      <div class="project-name">吃饭</div>
      <div class="project-count"><span>1</span></div>
    </div>
    <div class="project new">
      <div class="project-clock"><i class="iconfont">&#xe656;</i></div>
      <div class="project-name">新增</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeLeft',
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    this.$parent.$children.forEach((child) => {
      // eslint-disable-next-line no-underscore-dangle
      if (child.$options._componentTag === 'HomeRight') {
        this.count = child.projectResources.ongoing.res;
      }
    });
  },
};
</script>

<style lang="less" scoped>
.project-group {
  flex: 1;

  .project {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 2px solid #ccc;
    color: #788BA1;
    cursor: pointer;

    &.new {
      color: #5997C8;
    }

    &:hover .project-name {
      color: #28C6D3;
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
        background-color: #28C6D3;
        color: #fff;
        font-size: 12px;
      }
    }
  }
}
</style>
