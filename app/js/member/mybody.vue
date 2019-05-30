<template>
  <section class="container">
    <!-- <div class="row" v-for="item in items" :key="item.id">
      <div class="icon">
        <div class="img-wrap">
          <img :src="item.src" alt="">
        </div>
      </div>
      <div class="info">
        <div class="name">{{ item.name }}</div>
      </div>
      <div class="benifit">
        <span>{{ item.benifit }}</span>
        <img src="https://m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png" alt="">
      </div>
      
    </div> -->
    <List v-for="item in items" :key="item.id" :item="item"></List>
  </section>
</template>

<script>
  import List from './list.vue'
  export default {
    data() {
      return {
        items: [
          {
            id: 1,
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t8971/199/1863233880/2035/56d04776/59cb5fbdNa7c682c3.png?width=70&height=70',
            name: '我的资产',
            benifit: '查看全部资产'
          }, {
            id: 2,
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70',
            name: '我的优惠券',
            benifit: '查看全部'
          }, {
            id: 3,
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t10264/48/2521964269/2177/cb479501/59f945edNc1197b64.png?width=90&height=90',
            name: '我的金币',
            benifit: '赚金币兑好礼'
          }, {
            id: 4,
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t12115/250/469950434/3906/ad97c994/5a0bdf3aN22efb724.png?width=90&height=90',
            name: '我的金条',
            benifit: '查看额度'
          }, {
            id: 5,
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t9244/132/2364556535/1134/334cd5d9/59cb612dN5b974dc5.png?width=70&height=70',
            name: '我的借钱',
            benifit: '查看全部产品'
          }, {
            id: 6,
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t9121/110/2300703915/1348/91af205c/59cb613bN1e749e58.png?width=70&height=70',
            name: '我的白条',
            benifit: '去提额'
          }, {
            id: 7,
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/18738/31/15049/5408/5cadb703E039f2599/e92ce5b31d8b1ecf.png?width=70&height=70',
            name: '兑换优惠券',
            benifit: '去兑换'
          }, {
            id: 8,
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t8014/149/2344686222/2102/341ff316/59cb616bN3e1bd87d.png?width=70&height=70',
            name: '我的保障',
            benifit: '全方位保障'
          }
        ]
      }
    },
    components: {
      List
    }
  }
</script>

<style lang="scss">
  .container {
    margin-bottom: 20px;
    background-color: #fff;
    // .row {
    //   height: 112px;
    //   line-height: 112px;
    //   position: relative;
    //   overflow: hidden;
    //   .icon {
    //     width: 48px;
    //     height: auto;
    //     margin-top: 32px;
    //     font-size: 12px;
    //     display: block;
    //     text-align: center;
    //     background: #fff;
    //     margin: 24px 32px 0;
    //     float: left;
    //     color: #9891FF;
    //     box-sizing: border-box;
    //     .img-wrap {
    //       width: 100%;
    //       height: auto;
    //       img {
    //         width: 100%;
    //       }
    //     }
    //   }
    //   .info {
    //     max-width: 35%;
    //     text-align: left;
    //     float: left;
    //     height: 88px;
    //     line-height: 88px;
    //     margin: 13px 0 0;
    //     -webkit-box-sizing: border-box;
    //     box-sizing: border-box;
    //     .name {
    //       font-size: 32px;
    //       color: #333;
    //       display: block;
    //       white-space: nowrap;
    //       text-overflow: ellipsis;
    //       overflow: hidden;
    //     }
    //   }
    //   .benifit {
    //     color: #999;
    //     text-align: left;
    //     float: right;
    //     white-space: nowrap;
    //     text-overflow: ellipsis;
    //     overflow: hidden;
    //     span {
    //       font-size: 28px;
    //       margin-top: 12px;
    //     }
    //     img {
    //       width: 14px;
    //       display: inline-block;
    //       margin-left: 10px;
    //       margin-right: 30px;
    //       vertical-align: middle;
    //     }
    //   }
    // }
  }
</style>