<template>
  <Panel :cname="$style.product" title="众筹新品" arraw="更多尖货>">
    <section :class="$style.content">
      <Slider :options="options" :items="items" cname="product-slider"></Slider>
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
            src: '//img12.360buyimg.com/jrpmobile/jfs/t1/30149/40/8970/20149/5ca2e84dE7641a4dc/342b926b8582a140.jpg?width=335&height=421'
          }, {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t1/19514/33/13824/16597/5ca2e84eE4b9cc39a/23b319b8846b585c.png?width=335&height=421'
          }, {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t1/12202/17/13916/19329/5ca2e84fE6bde713f/ff4f3231eb4c7312.jpg?width=335&height=421'
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
  .product-slider {
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
  .product {
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
