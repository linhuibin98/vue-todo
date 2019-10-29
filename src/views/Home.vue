<template>
  <div class="home">
    <HomeLeft :resouce='resouce' @addItem='handleAddItem'></HomeLeft>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import { cloneDeep } from 'lodash';
import HomeLeft from '../components/HomeLeft.vue';
import { setStorage, getStorage } from '../tools/hadnleStorage';
import dataTemp from '../tools/dataTemp';

export default {
  name: 'home',
  data() {
    return {
      resouce: {},
      count: undefined,
    };
  },
  components: {
    HomeLeft,
  },
  created() {
    // this.$router.push({
    //   name: 'HomeRight',
    //   query: {
    //     id: 1
    //   }
    // })
    // this.$on('changeCount', (n) => {
    //   console.log('dddd');
    //   this.count = n;
    // });
    const resouce = getStorage('task');
    this.resouce = resouce || {};
  },
  beforeUpdate() {
    // console.log('update');
  },
  methods: {
    handleAddItem(name) {
      const res = cloneDeep(this.resouce);
      res[name] = dataTemp(name)[name];
      this.resouce = res;
      setStorage('task', this.resouce);
    },
    updateStorage() {
      this.resouce = getStorage('task');
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  padding: 0 50px 0 50px;
}
</style>
