<template lang="html">
  <div :class="$style.container">
    <Heador/>
    <Top/>
    <Mybody/>
    <Bottom/>
    <myFooter/>
    <Navbar/>
  </div>
</template>

<script>
  import Heador from '../public/header.vue'
  import Top from './top.vue'
  import Mybody from './mybody.vue'
  import Bottom from './bottom.vue'
  import myFooter from '../public/footer.vue'
  import Navbar from '../public/navbar.vue'
  export default {
    data() {
      return {
        
      }
    },
    components: {
      Heador,
      Top,
      Mybody,
      Bottom,
      myFooter,
      Navbar
    }
  }
</script>

<style lang="scss" module>
  .container {
    background-color: #f5f5f5;
    padding-top: 100px;
  }
</style>
