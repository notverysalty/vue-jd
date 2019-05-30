<template>
  <Panel :cname="$style.panel" style="margin-top: 100px;background: none;">
    <section :class="$style.content">
      <div :class="$style.container">
        <img src="https://m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/goldCard.png" alt="">
        <p :class="$style.txt1">最高可借</p>
        <p :class="$style.txt2">
          <span>￥</span>300,000
        </p>
        <p :class="$style.txt3">立即登录</p>
      </div>
      <Silder :cname="$style.silder" :items="items" :options="options"></Silder>
    </section>
  </Panel>  
</template>

<script>
  import Panel from '../core/panel.vue'
  import Silder from '../core/silder.vue'
  export default {
    data() {
      return {
        items: [
          {
            href: 'home',
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t22897/39/1541754983/14812/d61317bc/5b6263e4Nbd9cf24d.png?width=690&height=154'
          }, {
            href: 'home',
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/12277/16/15363/78163/5caf2fe1Ea8b5743e/5afe5457e88a1e33.jpg?width=1080&height=240'
          }, {
            href: 'home',
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/21509/20/4531/39775/5c33281eE7e0635bb/6a8c62f841f035a7.png?width=1080&height=240'
          }
        ],
        options: {
          autoplay: {
            delay: 600
          },
          loop: true,
          pagination: {
              el: ".swiper-pagination",
              clickable: true,
              type: "bullets"
          },
          speed: 2000,
        }
      }
    },
    components: {
      Panel,
      Silder
    }
  }
</script>

<style lang="scss" module>
  @import '../../css/element.scss';
  .panel {
    @include panel;
    >h4 {
      display: none;
    }
    .content {
      width: 100%;
      .container {
        width: 100%;
        padding: 47.25px 26.25px 0;
        box-sizing: border-box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        color: #fff;
        position: relative;
        img {
          width: 100%;
          height: 346.42px;
        }
        .txt1 {
          position: absolute;
          top: 28%;
          left: 13%;
          font-size: 28px;
        }
        .txt2 {
          position: absolute;
          top: 40%;
          left: 12%;
          font-size: 75.25px;
          font-family: DINAlternate-Bold;
          text-shadow: 0 8.75px 8.75px rgba(63,39,0,.2);
          span {
            font-size: 52.5px;
            margin-right: 6.126px;
          }
        }
        .txt3 {
          position: absolute;
          top: 62%;
          left: 16%;
          font-size: 24.5px;
          font-weight: 500;
          width: 180.25px;
          height: 56.87px;
          line-height: 56.87px;
          text-align: center;
          background: url(https://m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/btnBj.png) 0 0 no-repeat;
          background-size: 100% 100%;
        }
      }
      .silder {
        padding: 0 40px;
        img {
          width: 100%;
        }
      }
    }
  }
</style>
