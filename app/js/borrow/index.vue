<template lang="html">
    <div :class="$style.container">
        <Heador/>
        <Bsilder/>
        <Acir/>
        <Boutique/>
        <myFooter/>
        <Navbar/>
    </div>
</template>

<script>
  import Heador from '../public/header.vue'
  import Bsilder from './bsilder.vue'
  import Acir from './acir.vue'
  import Boutique from './boutique.vue'
  import myFooter from '../public/footer.vue'
  import Navbar from '../public/navbar.vue'
  export default {
    data() {
      return {
      }
    },
    components: {
      Heador,
      Bsilder,
      Acir,
      Boutique,
      myFooter,
      Navbar
    }
  }
</script>

<style lang="scss" module>
  .container {
    background-color: #f5f5f5;
    background: url(https://m.jr.jd.com/vip/borrowMoney/css/i/bj.png) 0 0 no-repeat;
    background-size: 100% auto;
  }
</style>
