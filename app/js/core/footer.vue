<template>
  <section :class="[footer,cname]">
    <img :src="img.src">
  </section>
</template>

<script>
  export default {
    data() {
      return {
        footer: 'footer'
      }
    },
    props: {
      cname: {
        type: String,
        default: ''
      },
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
