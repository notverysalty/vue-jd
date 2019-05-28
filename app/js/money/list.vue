<template>
  <section :class="$style.list">
    <div :class="$style.item" v-for="item in enters" :key="item.img">
        <router-link :to="{ name: item.href}">
          <img :src="item.src" :alt="item.title">
          <h4>{{ item.title }}</h4>
        </router-link>
      </div>
      <footer-img :img="img1"/>
      <footer-img :img="img2"/>
  </section>
</template>

<script>
  import footerImg from '../core/footer.vue' 
  export default {
    data() {
      return {
        enters: [
          {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t1/71967/29/100/8974/5ce24a67E99e3598e/01aad70029ce55b2.png?width=90&height=90',
            title: '有钱赚'
          }, {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t1/22708/8/15082/7446/5cad5c35E7e3ae22b/72adc577175d7c4f.png?width=90&height=90',
            title: '双签'
          }, {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t27796/46/1836066448/4169/de69ccb0/5bee6bc3N92ca0e60.png?width=90&height=90',
            title: '优惠券'
          }, {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t27850/30/1789047580/4856/13f8bcb9/5bee6bcbN996fb433.png?width=90&height=90',
            title: '单单反京豆'
          }, {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t29131/288/288291507/3943/bed46aef/5bee6bd5Nfc5d5360.png?width=90&height=90',
            title: '全部'
          },
        ],
        img1: {
          href: 'home',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t1/63259/11/578/59388/5cec92e4E953e94da/8bd2e0a7bce47f38.jpg?width=750&height=200'
        },
        img2: {
          href: 'home',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t1/32159/15/10538/46268/5cb03b07Ea032bd41/9d84130f81c2e107.jpg?width=750&height=200'
        }
      }
    },
    components: {
      footerImg
    }
  }
</script>

<style lang="scss" module>
  @import '../../css/element.scss';
  .list {
    @include list(row);
    background-color: #fff;
    padding-top: 40px;
    padding-bottom: 20px;
    justify-content: space-around;
    a {
      text-decoration: none;
    } 
    .item {
      text-align: center;
      width: 20%;
      margin-bottom: 40px;
      img {
        display: inline-block;
        width: 90px;
        height: 90px;
      }
      h4 {
        font-size: 24px;
        margin-top: 12px;
        color: #666;
      }
    }
  }
</style>