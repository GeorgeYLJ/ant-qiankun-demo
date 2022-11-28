import {registerMicroApps, start} from 'qiankun'
import {initGlobalState} from 'qiankun';
import store from './store';

const initialState = {
//这里可以写初始化数据
}
// 初始化 state
const actions = initGlobalState(initialState);

//onGlobalStateChange:注册 观察者 函数 - 响应 globalState 变化，在 globalState 发生改变时触发该 观察者 函数。
actions.onGlobalStateChange((state, prev) => {
    // 监听actions全局公共状态数据的变化
    console.log("主应用变更前 ：" + prev);
    // state: 变更后的状态; prev 变更前的状态
    console.log("主应用变更后 ：" + state);
    store.commit('setProject', state); //这里我把公共状态存到主应用的vuex里了
});
/*设置 globalState - 设置新的值时，内部将执行 浅检查，如果检查到 globalState 发生改变则触发通知，通知到所有的 观察者 函数。
actions.setGlobalState(state);*/

/*取消 观察者 函数 - 该实例不再响应 globalState 变化。
actions.offGlobalStateChange(); */
export default actions;

const loader = (loading) => {
    // 此处可以获取微应用是否加载成功,可以用来触发全局的 loading
    console.log("loading", loading);
};

export const useQiankun = () => {
    const apps = [
        {
            name: 'vueApp', // 应用的名字
            entry: '//localhost:8081/', // 默认加载这个html，解析里面的js动态的执行（子应用必须支持跨域，内部使用的是 fetch）
            container: '#vueApp', // 要渲染到的容器名id
            activeRule: '/child/vue1',// 通过哪一个路由来激活
            loader,//loader: 加载微应用的状态 true | false
            props: { // - 可选，主应用需要传递给微应用的数据。
                actions,
                msg: {data: "基座传递给子应用的数据"},
                routerBase: '/child/vue1',
            }
        }, {
            name: 'vueApp2', // 应用的名字
            entry: '//localhost:8082/', // 默认加载这个html，解析里面的js动态的执行（子应用必须支持跨域，内部使用的是 fetch）
            container: '#vueApp', // 要渲染到的容器名id
            activeRule: '/child/vue2',// 通过哪一个路由来激活
            loader,//loader: 加载微应用的状态 true | false
            props: { // - 可选，主应用需要传递给微应用的数据。
                actions,
                msg: {data: "基座传递给子应用的数据"},
                routerBase: '/child/vue2',
            }
        }, {
            name: 'staticApp', // 应用的名字
            entry: '//localhost:3002/', // 默认加载这个html，解析里面的js动态的执行（子应用必须支持跨域，内部使用的是 fetch）
            container: '#vueApp', // 要渲染到的容器名id
            activeRule: '/child/static',// 通过哪一个路由来激活
            loader,//loader: 加载微应用的状态 true | false
            props: { // - 可选，主应用需要传递给微应用的数据。
                actions,
                msg: {data: "基座传递给子应用的数据"},
                routerBase: '/child/static',
            }
        },
    ];

    registerMicroApps(apps, {
        beforeLoad: [
            app => {
                console.log(`${app.name}的beforeLoad阶段`)
            }
        ],
        beforeMount: [
            app => {
                console.log(`${app.name}的beforeMount阶段`)
            }
        ],
        afterMount: [
            app => {
                console.log(`${app.name}的afterMount阶段`)
            }
        ],
        beforeUnmount: [
            app => {
                console.log(`${app.name}的beforeUnmount阶段`)
            }
        ],
        afterUnmount: [
            app => {
                console.log(`${app.name}的afterUnmount阶段`)
            }
        ]
    })
    start({sandbox: {strictStyleIsolation: false}/*样式隔离*/, prefetch: false,})
}


