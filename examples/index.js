import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './app.vue'

Vue.use(VueRouter)

Vue.config.debug = true

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/icon",
            component: (resolve) => require(["./routers/icon"], resolve)
        },
        {
            path: "/button",
            component: resolve => require(["./routers/button"], resolve)
        }
    ]
})

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount("#app")
