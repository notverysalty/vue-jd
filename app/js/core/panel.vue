<template>
  <section :class="[panelClass, cname]">
    <h4>--{{ title }}--</h4>
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
