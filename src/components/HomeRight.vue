/* eslint-disable */
<template>
  <div v-if="!resouce" class="no-item">请添加项目吧</div>
  <div v-else class="detail-container">
    <div class="detail-header">
      <div class="project-detail">
        <div class="project-name">{{resouce.name}}</div>
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
import watchRouteUptateStorage from '../tools/watchRouteUptateStorage';
import addItem from '../tools/addItem';
import updateStorage from '../tools/updateStorage';
import checkedUpdate from '../tools/checkedUpdate';

export default {
  data() {
    return {
      projectResources: {
        all: {
          type: 'all',
          res: [],
        },
        ongoing: {
          type: 'ongoing',
          res: [],
        },
        completed: {
          type: 'completed',
          res: [],
        },
      },
      resouce: null,
    };
  },
  components: {
    ProjectItem,
  },
  methods: {
    handleResourcesAll(val) {
      addItem({
        self: this,
        val,
        data1: 'all',
        data2: 'ongoing',
      });
      updateStorage(this); // 更新本地存储
    },
    handleResourcesOngoing(val) {
      addItem({
        self: this,
        val,
        data1: 'all',
        data2: 'ongoing',
      });
      updateStorage(this); // 更新本地存储
    },
    handleResourcesCompleted(val) {
      addItem({
        self: this,
        val,
        data1: 'completed',
        data2: 'all',
        selected: true,
      });
      updateStorage(this); // 更新本地存储
    },
    hadnleChangeRes(dec) {
      const { type, index, checked } = dec;
      this.projectResources[type].res[index].selected = checked;
      if (type === 'ongoing' && checked) {
        checkedUpdate({
          self: this, data1: 'all', data2: 'all', data3: 'completed', ...dec,
        });
      } else if (type === 'completed' && !checked) {
        checkedUpdate({
          self: this, data1: 'all', data2: 'all', data3: 'ongoing', ...dec,
        });
      } else if (type === 'all' && checked) {
        checkedUpdate({
          self: this, data1: 'ongoing', data2: 'ongoing', data3: 'completed', ...dec,
        });
      } else if (type === 'all' && !checked) {
        checkedUpdate({
          self: this, data1: 'completed', data2: 'completed', data3: 'ongoing', ...dec,
        });
      }
    },
  },

  created() {
    watchRouteUptateStorage(this);
  },

  watch: {
    $route() {
      watchRouteUptateStorage(this);
    },
  },
};
</script>

<style lang="less" scoped>
.no-item {
  width: 80%;
}
.detail-container {
  flex: 5;
  width: 100%;
  border: 1px solid #ddd;
  border-left: none;

  .detail-header {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid #ddd;

    .project-detail {
      display: flex;
      justify-content: space-between;

      .project-name {
        margin-right: 10px;
        font-weight: bold;
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
      margin-top: 15px;
      margin-right: 15px;
      border: 1px solid #ddd;
    }

    .ongoing {
      margin-top: 15px;
      margin-right: 15px;
      border: 1px solid #ddd;
    }

    .completed {
      margin-top: 15px;
      border: 1px solid #ddd;
    }
  }
}
</style>
