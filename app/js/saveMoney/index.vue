<template lang="html">
  <div :class="$style.container">
    <Heador/>
    <h1>待完成！</h1>
    <myFooter/>
    <Navbar/>
  </div>
</template>

<script>
  import Heador from '../public/header.vue'
  import myFooter from '../public/footer.vue'
  import Navbar from '../public/navbar.vue'
  export default {
    data() {
      return {
      }
    },
    components: {
      Heador,
      myFooter,
      Navbar
    }
  }
</script>

<style lang="scss" module>
  .container {
    background-color: #f5f5f5;
    padding-top: 100px;
    >h1 {
      text-align: center;
    }
  }
</style>
