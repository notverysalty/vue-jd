<template>
  <Panel title="特色推荐" :cname="$style.panel">
    <div :class="$style.item" v-for="item in items" :key="item.src">
      <div :class="$style.bg">
        <a :href="item.href">
          <div :class="$style.imgWrap"><img :src="item.src" alt=""></div>
          <p :class="$style.title">{{ item.title }}</p>
          <p :class="$style.price"><span :class="$style.per">￥</span>{{ item.price }}<span :class="$style.up">起</span></p>
          <div :class="$style.progressWrap">
            <div :class="$style.progress"><div :class="$style.progressInner"></div></div>
            <span :class="$style.percent">{{ item.percent }}</span>
          </div>
        </a>
      </div>
    </div>
  </Panel>
</template>

<script>
  import Panel from '../core/panel.vue'
  export default {
    data() {
      return {
        items: [
          {
            href: 'home',
            src: 'http://img30.360buyimg.com/cf/jfs/t1/36057/28/9258/143779/5ce15dc7E73411d4d/4f45b5e452069b79.gif!q70.dpg',
            title: '一鞋两穿/超软弹牛筋底凉拖鞋',
            price: '119.00',
            percent: '175%'
          }, {
            href: 'home',
            src: 'http://img30.360buyimg.com/cf/jfs/t1/64396/10/24/57855/5cd2a1b2E5a58b1df/4eda739e95c55028.jpg!q70.dpg',
            title: 'Z11单反画质折叠航拍无人机',
            price: '10.00',
            percent: '354%'
          }, {
            href: 'home',
            src: 'http://img30.360buyimg.com/cf/jfs/t1/76618/30/270/50254/5ce741ecEa928612a/69b74c3e818e469d.jpg!q70.dpg',
            title: '一触开合 车载支架无线充',
            price: '128.00',
            percent: '14%'
          }, {
            href: 'home',
            src: 'http://img30.360buyimg.com/cf/jfs/t28861/47/1225722337/36496/7814b591/5cd936a9N958f4ec1.jpg!q70.dpg',
            title: '2019亦闳国风系列手机壳',
            price: '88.00',
            percent: '100%'
          }
          
        ]
      }
    },
    components: {
      Panel
    }
  }
</script>

<style lang="scss" module>
  @import '../../css/element.scss';
  .panel {
    @include panel;
    >h4 {
      text-align: left;
      font-size: 36px;
      font-weight: 700;
    }
    .item {
      &:nth-child(odd) {
        padding-left: 4px;
      }
      &:nth-child(even) {
        padding-right: 4px;
      }
      width: 50%;
      position: relative;
      box-sizing: border-box;
      float: left;
      background: #f3f5f7;
      font-size: 32px;
      .bg {
        background: #fff;
        margin-bottom: 8px;
        width: 100%;
        height: 100%;
        overflow: hidden;
        a { 
         
          text-decoration: none;
          color: #333;
          .img-wrap {
            margin: 44px auto 20px;
            width: 100%;
            height: 100%;
            img {
              width: 100%;
              padding: 0 44px;
              box-sizing: border-box;
            }
          }
          .title {
            font-family: PingFangSC-Regular;
            letter-spacing: -1.4px;
            font-size: 30px;
            margin: 22px 0;
            height: 42px;
            padding-left: 30px;
            line-height: 42px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .price {
            padding-left: 30px;
            font-family: DIN-Bold;
            color: #ff9a1c;
            margin-bottom: 14px;
            height: 34px;
            line-height: 34px;
            .per {
              color: #f92;
              font-size: 22px;
            }
            .up {
              font-family: STHeitiSC-Medium;
              font-size: 22px;
              font-weight: 400;
              color: #999;
              margin-left: .10px;
            }
          }
          .progress-wrap {
            height: 30px;
            padding: 0 30px;
            margin-bottom: 26px;
            .progress {
              width: 70%;
              height: 10px;
              margin-top: 10px;
              background: #f3f5f7;
              border-radius: 20px;
              float: left;
              .progress-inner {
                font-weight: 700;
                height: 10px;
                background-image: linear-gradient(270deg,#f55 1%,#ff9c31);
                border-radius: 20px;
              }
            }
            .percent {
              font-size: 20px;
              color: #999;
              letter-spacing: -.9908px;
              display: inline-block;
              height: 24px;
              line-height: 24px;
              text-align: center;
              float: left;
              margin-left: 6px;
            }
          }
        }
      }
    }
  }
</style>
