<template lang="html">
    <div>
        <Heador/>
        <hSlider/>
        <Money/>
    </div>
</template>

<script>
  import Heador from '../public/header.vue'
  import hSlider from './hslider.vue'
  import Money from './money.vue'
  export default {
    components: {
      Heador,
      hSlider,
      Money
    }
  }
</script>

<style lang="scss" module>

</style>
