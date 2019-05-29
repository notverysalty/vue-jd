<template>
  <Panel :cname="$style.reward" title="-赏金任务-" arraw="查看更多任务>">
    <section :class="$style.content">
      <Slider :options="options" :items="items" cname="reward-slider"></Slider>
    </section>
  </Panel>
</template>

<script>
  import Panel from '../core/panel.vue'
  import Slider from '../core/silder.vue'
  export default {
    data() {
      return {
        items: [
          {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t26893/316/1416172900/5740/58f20b1e/5bc82e3aN7aa90a89.png?width=210&height=260'
          }, {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t26767/72/1365822552/8516/2e071d95/5bc82e6eN0be93809.png?width=210&height=260'
          }, {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t27040/190/1395454031/8316/d3d74de2/5bc82eb2N34a7625d.png?width=210&height=260'
          }, {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t26182/297/1417522782/7864/19181a3b/5bc82ec0N0824153d.png?width=210&height=260'
          }
        ],
        options: {
          slidesPerView: 2.3,
          spaceBetween: 30,
          freeMode: true
        }
      }
    },
    components: {
      Panel,
      Slider
    }
  }
</script>

<style lang="scss">
  .reward-slider {
    .swiper-container {
      box-sizing: border-box;
      padding: 0 24px;
      .swiper-slide {
        a {
          display: inline-block;
          width: 100%;
          img {
            width: 100%;
            display: block;
            height: 300px;
            border: 1px solid #fafafa;
          }
        }
      }
    }
  }
</style>

<style lang="scss" module>
  @import '../../css/element.scss';
  .reward {
    >h4 {
      font-weight: 700;
      >span {
        color: #bbb;
        position: absolute;
        right: 0;
      }
    }
    @include panel;
    .content {
      padding-bottom: 40px;
    }
  }
</style>
