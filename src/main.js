import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' //  引入element-ui
import 'element-ui/lib/theme-chalk/index.css' //  引入样式
import './styles/index.less' //  引入初始化配置
Vue.config.productionTip = false
//  使用element-ui，全局注册element-UI
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
