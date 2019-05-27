<template>
  <section :class="[panelClass, cname]">
    <h4>--{{ title }}--<span>{{ arraw }}</span></h4>
    <slot/>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        panelClass: 'panel'
      }
    },
    props: {
      cname: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      arraw: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../css/element.scss";
  .panel{
    @include panel;
  }
</style>
