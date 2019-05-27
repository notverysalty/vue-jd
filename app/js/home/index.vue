<template lang="html">
    <div>
        <Heador/>
        <hSlider/>
        <Money/>
        <Reward/>
        <Insurance/>
        <Product/>
    </div>
</template>

<script>
  import Heador from '../public/header.vue'
  import hSlider from './hslider.vue'
  import Money from './money.vue'
  import Reward from './reward.vue'
  import Insurance from './insurance.vue'
  import Product from './product.vue'
  export default {
    components: {
      Heador,
      hSlider,
      Money,
      Reward,
      Insurance,
      Product
    }
  }
</script>

<style lang="scss" module>

</style>
