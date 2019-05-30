<template>
  <div :class="$style.row">
    <div :class="$style.icon">
      <div :class="$style.imgWrap">
        <img :src="item.src" alt="">
      </div>
    </div>
    <div :class="$style.info">
      <div :class="$style.name">{{ item.name }}</div>
    </div>
    <div :class="$style.benifit">
      <span>{{ item.benifit }}</span>
      <img src="https://m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" module>
  .row {
      height: 112px;
      line-height: 112px;
      position: relative;
      overflow: hidden;
      .icon {
        width: 48px;
        height: auto;
        margin-top: 32px;
        font-size: 12px;
        display: block;
        text-align: center;
        background: #fff;
        margin: 24px 32px 0;
        float: left;
        color: #9891FF;
        box-sizing: border-box;
        .img-wrap {
          width: 100%;
          height: auto;
          img {
            width: 100%;
          }
        }
      }
      .info {
        max-width: 35%;
        text-align: left;
        float: left;
        height: 88px;
        line-height: 88px;
        margin: 13px 0 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        .name {
          font-size: 32px;
          color: #333;
          display: block;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      .benifit {
        color: #999;
        text-align: left;
        float: right;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        span {
          font-size: 28px;
          margin-top: 12px;
        }
        img {
          width: 14px;
          display: inline-block;
          margin-left: 10px;
          margin-right: 30px;
          vertical-align: middle;
        }
      }
    }
</style>
