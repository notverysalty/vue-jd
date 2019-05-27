<template lang="html">
    <div>
        <Heador/>
        <hSlider/>
        <Money/>
        <Reward/>
        <Insurance/>
    </div>
</template>

<script>
  import Heador from '../public/header.vue'
  import hSlider from './hslider.vue'
  import Money from './money.vue'
  import Reward from './reward.vue'
  import Insurance from './insurance.vue'
  export default {
    components: {
      Heador,
      hSlider,
      Money,
      Reward,
      Insurance
    }
  }
</script>

<style lang="scss" module>

</style>
