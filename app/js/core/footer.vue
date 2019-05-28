<template>
  <section class="footer">
    <img :src="img.src">
  </section>
</template>

<script>
  export default {
    props: {
      img: {
        type: Object,
        default() {
          return {
            src: '',
            href: ''
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .footer {
    padding: 0 0 40px;
    background-color: #fff;
    clear: both;
    margin: 0;
    overflow: hidden;
    height: 166px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
