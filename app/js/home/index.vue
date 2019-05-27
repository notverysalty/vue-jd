<template lang="html">
    <div :class="$style.container">
        <Heador/>
        <hSlider/>
        <Money/>
        <Reward/>
        <Insurance/>
        <Product/>
        <myFooter/>
        <Navbar/>
    </div>
</template>

<script>
  import Heador from '../public/header.vue'
  import hSlider from './hslider.vue'
  import Money from './money.vue'
  import Reward from './reward.vue'
  import Insurance from './insurance.vue'
  import Product from './product.vue'
  import myFooter from '../public/footer.vue'
  import Navbar from '../public/navbar.vue'
  export default {
    components: {
      Heador,
      hSlider,
      Money,
      Reward,
      Insurance,
      Product,
      myFooter,
      Navbar
    }
  }
</script>

<style lang="scss" module>
  .container {
    background-color: #f5f5f5;
  }
</style>
