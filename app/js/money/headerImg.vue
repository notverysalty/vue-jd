<template>
  <router-link :class="$style.headImg" to="home">
    <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/21884/18/13557/15652/5ca1792eE29956dc1/b8d2034a84492ff6.png?width=750&height=120">
  </router-link>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" module>
  .headImg {
    position: fixed;
    padding: 0;
    width: 100%;
    z-index: 100;
    text-align: center;
    img {
      width: 100%;
    }
  }
</style>
