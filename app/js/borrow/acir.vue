<template>
  <Panel :cname="$style.panel" title="有车有钱">
    <section :class="$style.container">
      <div :class="$style.imgBox">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/16662/30/15341/22141/5caf3007Ed04371f5/92aeb35325e56d32.png?width=375&height=233" alt="">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/21337/31/13706/22340/5ca18608Ebdd6ea02/02d3b385bf9c045c.png?width=375&height=233" alt="">
      </div>
      <!-- 轮播图 -->
      <swiper class="silder" :options="options" :not-next-tick="options.notNextTick">
        <swiper-slide v-for="item in items" :key="item.id">
          <div class="iconBox">
            <img :src="item.src" alt="">
            <p>{{ item.title }}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" v-if="options.pagination" slot="pagination"></div>
      </swiper>
    </section>
  </Panel>
</template>

<script>
  import Panel from '../core/panel.vue'
  import {swiper, swiperSlide} from "vue-awesome-swiper"
  export default {
    data() {
      return {
        items: [
          {
            id: 1,
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/14341/37/3393/6583/5c26c570E1c91365c/a12b127c15c524c4.png?width=90&height=90',
            title: '机票'
          }, 
          {
            id: 2,
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/5678/12/7013/4702/5ba49a4fE808c96ed/2622695db5d0128b.png?width=88&height=88',
            title: '租房'
          }, 
          {
            id: 3,
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/4294/38/6852/4745/5ba49a5aEeb72a2f0/b28774eadc4e1527.png?width=90&height=90',
            title: '房抵贷'
          }, 
          {
            id: 4,
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/4554/34/7050/3668/5ba49a60Ed1481e30/413fed46004f96e7.png?width=88&height=88',
            title: '分期用'
          }, 
          {
            id: 5,
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/852/23/6959/5247/5ba49a6bE45fd05f7/36437307167c7071.png?width=90&height=90',
            title: '彩票推荐'
          }, 
          {
            id: 6,
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t16183/231/1309653281/4671/3ace8435/5a4f27d0N9e3df1d5.png?width=90&height=90',
            title: '教育'
          }, 
          {
            id: 7,
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t15955/206/1280935063/4274/6204375a/5a4f2801N015920c5.png?width=90&height=90',
            title: '车险'
          }, 
          {
            id: 8,
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t15451/2/1424737894/3801/e7844c76/5a4f2823Ne430c735.png?width=88&height=88',
            title: '家装'
          }, 
          {
            id: 9,
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90',
            title: '驾校'
          }, 
        ],
        options: {
          pagination: {
              el: ".swiper-pagination",
              clickable: true,
              type: "bullets"
          },
          slidesPerView: 5,
          spaceBetween: 30,
          slidesPerGroup: 5,
          freeMode: false
        }
      }
    },
    components: {
      Panel,
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="scss" scoped>
  .silder {
    width: 100%;
    padding: 0 26.25px;
    height: 140px;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    .swiper-pagination {
        bottom: 0;
    }
    .swiper-wrapper {
      width: 100%;
      .swiper-slide {
        .iconBox {
          text-align: center;
          font-size: 21px;
          color: #333;
          -webkit-box-flex: 1;
          -ms-flex: 1;
          flex: 1;
          img {
            width: 77px;
            height: 77px;
            margin-bottom: 17.5px;
          }
        }
      }
    }
  }
</style>

<style lang="scss" module>
  @import '../../css/element.scss';
  .panel {
    @include panel;
    >h4 {
      text-align: left;
      font-weight: 400;
      color: #000;
      position: relative;
      &::before {
        content: '';
        width: 5.12px;
        height: 31.5px;
        background: url(https://m.jr.jd.com/vip/borrowMoney/css/i/title.png) 0 0 no-repeat;
        background-size: 100% 100%;
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 3%;
        margin-top: -15.75px;
        border-radius: 8.75px;
      }
    }
    .container {
      width: 100%;
      .img-box{
        width: 100%;
        font-size: 0;
        img {
          width: 50%;
          vertical-align: middle;
        }
      }
    }
  }
</style>
