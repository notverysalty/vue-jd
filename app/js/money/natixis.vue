<template>
  <Panel :cname="$style.panel" title="银行精选" arraw="更多银行服务 >">
    <Silder cname="natixis-silder" :items="items" :options="options"></Silder>
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
            src: '//img12.360buyimg.com/jrpmobile/jfs/t11146/24/2920754736/6944/5845636d/5cdd0a6eN9927ae25.png?width=210&height=260'
          }, {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t11293/128/3052512266/21236/ff9211a7/5cde1a7bNec04b900.png?width=210&height=260'
          }, {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t1/34648/31/6933/6783/5cc59defEad87f71e/e40ec7ce514a3883.png?width=210&height=260'
          }, {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t1/26193/24/14261/19795/5ca4805eE241b0c6d/34d5bcef2b821e13.png?width=210&height=260'
          }, {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t26410/345/1052784155/8412/66e542af/5bc04992N0d13e713.jpg?width=210&height=260'
          }
        ],
        options: {
          slidesPerView: 2.6,
          spaceBetween: 30,
          freeMode: true
        }
      }
    },
    components: {
      Panel,
      Silder
    }
  }
</script>

<style lang="scss">
  .natixis-silder {
    .swiper-container {
      box-sizing: border-box;
      padding: 0 24px;
      .swiper-slide {
        a {
          display: inline-block;
          width: 100%;
          margin-bottom: 40px;
          img {
            width: 100%;
            display: block;
            height: 260px;
            border: 1px solid #fafafa;
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
      font-weight: 700;
      >span {
        color: #bbb;
        position: absolute;
        right: 0;
      }
    }
  }
</style>
