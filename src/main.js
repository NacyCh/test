import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Element)
const  Test = { template: '<div><h2>我是1个子界面</h2></div>' }
import fir_comp from './component/firstcomponent.vue'
import sec_comp from './component/secondcomponent.vue'
import event_comp from './component/eventcomp.vue'
const routes = [
  {
    path: '/test',
    component: Test
  },
  {
    path:'/first',
    component:fir_comp
  },
  {
    path: '/second',
    component: sec_comp
  },
  {
    path: '/event',
    component: event_comp
  }
]
const router = new VueRouter({
    routes : routes
})


new Vue({
  router : router,
  render: h => h(App)
}).$mount('#app')
