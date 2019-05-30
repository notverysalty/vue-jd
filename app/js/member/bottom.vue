<template>
  <div :class="$style.container">
    <List :class="$style.row" v-for="item in items" :key="item.id" :item="item"></List>
  </div>
</template>

<script>
  import List from './list.vue'
  export default {
    data() {
      return {
        items: [
          {
            id: 1,
            src: '//img12.360buyimg.com/jrpmobile/jfs/t10423/230/287832134/1427/af7e4c86/59cb61b2N53280a30.png?width=70&height=70',
            name: '实名认证',
            benifit: ''
          }, {
            id: 2,
            src: '//img12.360buyimg.com/jrpmobile/jfs/t10423/230/287832134/1427/af7e4c86/59cb61b2N53280a30.png?width=70&height=70',
            name: '帮助中心',
            benifit: ''
          }
        ]
      }
    },
    components: {
      List
    }
  }
</script>

<style lang="scss" module>
  .container {
    width: 100%;
    height: auto;
    background-color: #f5f5f5;
    .row {
      margin-bottom: 20px;
      background-color: #fff;
    }
  }
</style>
