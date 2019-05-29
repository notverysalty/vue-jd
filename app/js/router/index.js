import Vue from 'vue'
import Router from 'vue-router'
import Home from '../home/index.vue'
import Money from '../money/index.vue'
import Borrow from '../borrow/index.vue'
import '../../css/reset.scss'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', redirect: '/home' },
    { path: '/home', name: 'home', component: Home },
    { path: '/money', name: 'money', component: Money },
    { path: '/borrow', name: 'borrow', component: Borrow }
  ]
})
