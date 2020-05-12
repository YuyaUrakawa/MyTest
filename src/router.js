import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login.vue'

import LoginHome from '@/views/Home.vue'
import LoginTodo from '@/views/Todo.vue'
import LoginMessage from '@/views/Message.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            name: 'Login-home',
            path: '/home',
            component: LoginHome
        },
        {
            name: 'Login-todo',
            path: '/todo',
            component: LoginTodo
        },
        {
            name: 'Login-message',
            path: '/message',
            component: LoginMessage
        },
        {
            path: '/',
            component: Login,
            // props: route => ({id: Number(route.params.id)}),
        }
    ]
})
export default router
