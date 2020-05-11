import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "@/components/Login"
import Home from '@/components/Home.vue'
import Todo from '@/components/Todo.vue'
import Message from '@/components/Message.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {path: '/', component: Login},
        {path: '/home', component: Home},
        {path: '/todo', component: Todo},
        {path: '/message', component: Message},
            ]
})
export default router
