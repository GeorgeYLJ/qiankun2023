import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//qiankun配置
import {registerMicroApps, start} from 'qiankun';

Vue.config.productionTip = false
//子应用列表
let apps = [
    {
        name: 'vueChild',
        entry: '//localhost:8080/',//子应用的地址，这里演示是本地启动的地址。
        container: '#vueApp',//子应用的容器节点的选择器（vue一般为app）
        activeRule: '/vueChild',//访问子应用的规则，比如：主应用为localhost:8081，那访问该子应用的url应为localhost:8081/subapp
    }
]

//注册子应用
registerMicroApps(apps);

//启动
start();
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
