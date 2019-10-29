<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@font-face {
  font-family: 'iconfont';  /* project id 1478643 */
  src: url('//at.alicdn.com/t/font_1478643_0fi3jq820ta8.eot');
  src: url('//at.alicdn.com/t/font_1478643_0fi3jq820ta8.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1478643_0fi3jq820ta8.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1478643_0fi3jq820ta8.woff') format('woff'),
  url('//at.alicdn.com/t/font_1478643_0fi3jq820ta8.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1478643_0fi3jq820ta8.svg#iconfont') format('svg');
}

.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}

i {
  cursor: pointer;
}

i:hover {
  color: #28c6d3;
}

a {
  text-decoration: none;
}

body {
  background: #eee;
}
</style>
