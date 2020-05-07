import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Todo from '@/components/Todo.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {path: '/', component: Home},
        {path: '/todo', component: Todo},
            ]
})
export default router
