<template>
  <Panel :class="$style.panel" style="margin: 0">
    <section :class="$style.content">
      <Slider :items="mItems" :cname="$style.silder"></Slider>
    </section>
  </Panel>
</template>

<script>
  import Panel from '../core/panel.vue'
  import Slider from '../core/silder.vue'
  export default {
    data() {
      return {
        mItems: [
          {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t1/34635/34/11051/40707/5cec92a1E6c1c055e/4b275eb83bd6c1f3.png?width=750&height=400'
          }, {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t1/36765/37/5600/41959/5cc0019fE75ecd507/b974d4b9cfad325a.png?width=750&height=400'
          }, {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t1/46879/19/504/107897/5cdea0baE7a0eaf0c/d4db650be0adb4d4.png?width=750&height=400'
          }, {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t1/17681/24/15074/50450/5cad5bdaE66940a09/f95c470495804548.png?width=750&height=400'
          }, {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t1/31588/6/14705/52443/5cbeb2b2Ea0648bba/e05f04db25d47126.png?width=750&height=400'
          }, {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t1/32631/24/13193/68981/5cb9794aEe09955cf/9d48d241507f1b4e.jpg?width=750&height=400'
          }
        ]
      }
    },
    components: {
      Panel,
      Slider
    }
  }
</script>

<style lang="scss">
  section {
    .swiper-pagination {
      bottom: 30px!important;
    } 
  }
</style>

<style lang="scss" module>
  @import '../../css/element.scss';
  .panel {
    @include panel;
    >h4 {
      display: none;
    }
    .content {
      .slider {
        margin-top: 100px;
        img {
          width: 100%;
        }
      } 
    }
  }
</style>
