<template lang="html">
    <div :class="$style.container">
        <Heador/>
        <HeaderImg/>
        <mSlider/>
        <Login/>
        <Reward/>
        <myFooter/>
        <Navbar/>
    </div>
</template>

<script>
  import Heador from '../public/header.vue'
  import HeaderImg from './headerImg.vue'
  import mSlider from './mslider.vue'
  import Login from './login.vue'
  import Reward from '../home/reward.vue'
  import myFooter from '../public/footer.vue'
  import Navbar from '../public/navbar.vue'
  export default {
    components: {
      Heador,
      HeaderImg,
      mSlider,
      Login,
      Reward,
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
