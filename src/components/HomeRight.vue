<template>
  <div class="detail-container">
    <div class="detail-header">
      <div class="project-detail">
        <div class="project-name">吃饭</div>
        <div class="project-count">
          <span>{{projectResources.ongoing.res.length}}</span>
        </div>
      </div>
      <div class="project-operation">
        <div class="project-clock">
          <i class="iconfont">&#xe61d;</i>
        </div>
        <div class="project-delete">
          <i class="iconfont">&#xe657;</i>
        </div>
      </div>
    </div>
    <div class="detail-content">
      <ProjectItem
        class="all"
        title="全部"
        :resources="projectResources.all"
        @addRes="handleResourcesAll"
        @changeRes="hadnleChangeRes"
      ></ProjectItem>
      <ProjectItem
        class="ongoing"
        title="未完成"
        :resources="projectResources.ongoing"
        @addRes="handleResourcesOngoing"
        @changeRes="hadnleChangeRes"
      ></ProjectItem>
      <ProjectItem
        class="completed"
        title="已完成"
        :resources="projectResources.completed"
        @addRes="handleResourcesCompleted"
        @changeRes="hadnleChangeRes"
      ></ProjectItem>
    </div>
  </div>
</template>

<script>
// import { cloneDeep } from 'lodash';
import ProjectItem from '@/components/ProjectItem.vue';

export default {
  data() {
    return {
      projectResources: {
        all: {
          type: 'all',
          res: [{ describe: '完成header组件' }, { describe: '完成footer组件', selected: true }],
        },
        ongoing: {
          type: 'ongoing',
          res: [{ describe: '完成header组件' }],
        },
        completed: {
          type: 'completed',
          res: [{ describe: '完成footer组件', selected: true }],
        },
      },
    };
  },
  components: {
    ProjectItem,
  },
  methods: {
    handleResourcesAll(val) {
      this.projectResources.all.res.unshift({
        describe: val,
        selected: false,
      });
      this.projectResources.ongoing.res.push({
        describe: val,
        selected: false,
      });
    },
    handleResourcesOngoing(val) {
      this.projectResources.all.res.unshift({
        describe: val,
        selected: false,
      });
      this.projectResources.ongoing.res.push({
        describe: val,
        selected: false,
      });
    },
    handleResourcesCompleted(val) {
      this.projectResources.completed.res.unshift({
        describe: val,
        selected: true,
      });
      this.projectResources.all.res.push({
        describe: val,
        selected: true,
      });
    },
    hadnleChangeRes(dec) {
      const { type, index, checked } = dec;
      // const resources = cloneDeep(this.projectResources[type]);
      // resources.res[index].selected = checked;
      // this.projectResources[type] = resources;
      this.projectResources[type].res[index].selected = checked;
      if (type === 'ongoing' && checked) {
        const comp = this.projectResources[type].res.splice(index, 1);
        this.projectResources.all.res.forEach((item, i) => {
          if (item.describe === comp[0].describe) {
            // eslint-disable-next-line prefer-destructuring
            this.projectResources.all.res.splice(i, 1, comp[0]);
            this.projectResources.completed.res.unshift(...comp);
          }
        });
      } else if (type === 'completed' && !checked) {
        const comp = this.projectResources[type].res.splice(index, 1);
        this.projectResources.all.res.forEach((item, i) => {
          if (item.describe === comp[0].describe) {
            // eslint-disable-next-line prefer-destructuring
            this.projectResources.all.res.splice(i, 1, comp[0]);
            this.projectResources.ongoing.res.unshift(...comp);
          }
        });
      } else if (type === 'all' && checked) {
        const comp = this.projectResources[type].res.slice(index, index + 1);
        this.projectResources.ongoing.res.forEach((item, i) => {
          if (item.describe === comp[0].describe) {
            this.projectResources.ongoing.res.splice(i, 1);
            this.projectResources.completed.res.unshift(...comp);
          }
        });
      } else if (type === 'all' && !checked) {
        const comp = this.projectResources[type].res.slice(index, index + 1);
        this.projectResources.completed.res.forEach((item, i) => {
          if (item.describe === comp[0].describe) {
            this.projectResources.completed.res.splice(i, 1);
            this.projectResources.ongoing.res.unshift(...comp);
          }
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.detail-container {
  flex: 5;
  width: 100%;
  background-color: #e2e2e2;

  .detail-header {
    display: flex;
    justify-content: space-between;
    padding: 20px;

    .project-detail {
      display: flex;
      justify-content: space-between;

      .project-name {
        margin-right: 10px;
      }
      .project-count {
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
    .project-operation {
      display: flex;
      justify-content: space-between;
      color: #788ba1;

      .project-clock {
        margin-right: 20px;
      }
    }
  }

  .detail-content {
    display: flex;
    justify-content: space-between;
    padding: 0 20px 20px 20px;

    .all {
      margin-right: 15px;
    }

    .ongoing {
      margin-right: 15px;
    }
  }
}
</style>
