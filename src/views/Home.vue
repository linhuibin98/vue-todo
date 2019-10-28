<template>
  <div class="home">
    <HomeLeft></HomeLeft>
    <HomeRight></HomeRight>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeLeft from '../components/HomeLeft.vue';
import HomeRight from '../components/HomeRight.vue';

export default {
  name: 'home',
  components: {
    HomeLeft,
    HomeRight,
  },
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  padding: 0 50px 0 50px;
}
</style>
