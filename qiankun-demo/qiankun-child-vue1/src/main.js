import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './public.path';
// Vue.config.productionTip = false
import actions from './actions'
// 引入ElementUI
import 'element-ui/lib/theme-chalk/index.css'
import elementui from 'element-ui';
import store from "../../qiankun-base/src/store";

Vue.use(elementui)
let instance = null;

function render(props) {
    if (props) {
        actions.setActions(props)
    }
    const {container} = props;
    instance = new Vue({
        router,
        render: (h) => h(App),
    }).$mount(container ? container.querySelector('#app') : '#app');
}


/*
独立运行：window.__POWERED_BY_QIANKUN__为false，执行mount创建vue对象
运行在qiankun: window.__POWERED_BY_QIANKUN__为true，则不执行mount
*/
// 如何独立运行微应用？
if (!window.__POWERED_BY_QIANKUN__) {
    Vue.prototype.$qiankunFlag = true
    render(new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app'));
}


// 根据 qiankun 的协议需要导出 bootstrap/mount/unmount
export async function bootstrap(props) {
    console.log('bootstrap阶段>>>' + props)
}

export async function mount(props) {
    console.log(props)
    render(props);
}

export async function unmount(props) {
    console.log('unmount阶段>>>' + props)
    instance.$destroy();
}


