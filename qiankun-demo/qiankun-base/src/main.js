import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入ElementUI
import 'element-ui/lib/theme-chalk/index.css'
import elementui from 'element-ui';
import {useQiankun} from './qiankun'
// 引入axios
import axios from 'axios';
import VueAxios from "vue-axios";

axios.defaults.withCredentials = true;//允许跨域携带cookie信息
// 挂载  在组件中可以通过this.axios使用
Vue.use(VueAxios, axios);
Vue.use(elementui)
Vue.config.productionTip = false

const vueApp = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

vueApp.$nextTick(() => {
    useQiankun()
})
