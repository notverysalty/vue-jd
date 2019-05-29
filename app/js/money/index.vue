<template lang="html">
    <div :class="$style.container">
        <Heador/>
        <HeaderImg/>
        <mSlider/>
        <signIn/>
        <List/>
        <Reward/>
        <footer-img :img="img1"/>
        <footer-img :img="img2" style="margin: 20px 0;"/>
        <Natixis/>
        <footer-img :img="img3"/>
        <Feature/>
        <myFooter/>
        <Navbar/>
    </div>
</template>

<script>
  import Heador from '../public/header.vue'
  import HeaderImg from './headerImg.vue'
  import mSlider from './mslider.vue'
  import signIn from './signIn.vue'
  import List from './list.vue'
  import Reward from './reward.vue'
  import footerImg from '../core/footer.vue'
  import Natixis from './natixis.vue'
  import Feature from './feature.vue'
  import myFooter from '../public/footer.vue'
  import Navbar from '../public/navbar.vue'
  export default {
    data() {
      return {
        img1: {
          href: 'home',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t1/7640/35/4322/21318/5bda6023E656cbbbb/b2ddefd7ef80d7aa.png?width=750&height=200'
        },
        img2: {
          href: 'home',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t1/37697/16/1334/187953/5cb44c65E5dbefe83/200ce71a4347aeec.png?width=750&height=200'
        },
        img3: {
          href: 'home',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t20746/93/1719082958/12040/306a2296/5b31b40dNeefe4c3c.png?width=750&height=200'
        }
      }
    },
    components: {
      Heador,
      HeaderImg,
      mSlider,
      signIn,
      List,
      Reward,
      footerImg,
      Natixis,
      Feature,
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
