<template>
  <Panel title="精品活动" :cname="$style.panel">
    <FooterImg :img="img" :cname="$style.foot"></FooterImg>
  </Panel>
</template>

<script>
  import Panel from '../core/panel.vue'
  import FooterImg from '../core/footer.vue'
  export default {
    data() {
      return {
        img: {
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/35525/40/2975/21587/5cbd5b06E7ebc4232/b4596aec68de09cf.png?width=730&height=264',
          href: 'home'
        }
      }
    },
    components: {
      Panel,
      FooterImg
    }
  }
</script>

<style lang="scss" module>
  @import '../../css/element.scss';
  .panel {
    @include panel;
    >h4 {
      font-weight: 700;
      text-align: left;
    }
    .foot {
      height: 231.43px;
    }
  }
</style>
