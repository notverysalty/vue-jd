<template>
  <section :class="$style.container">
    <img :class="$style.header" src="https://img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png" alt="">
    <div :class="$style.right">
      <span>会员福利</span>
      <img src="https://m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png" alt="">
    </div>
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" module>
  .container {
    height: 140px;
    color: #fff;
    background-color: #fff;
    overflow: hidden;
    position: relative;
    margin-bottom: 20px;
    .header {
      display: block;
      width: 100px;
      border-radius: 50%;
      margin: 20px 32px 0;
      float: left;
    }
    .right {
      height: 60px;
      line-height: 60px;
      margin-top: -30px;
      color: #999;
      overflow: hidden;
      position: absolute;
      right: 32px;
      top: 50%;
      span {
        font-size: 28px;
      }
      img {
        width: 14px;
        display: inline-block;
        margin-left: 20px;
        vertical-align: middle;
      }
    }
  }
</style>
