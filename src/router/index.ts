import {createRouter, createWebHashHistory} from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes = [
    {
        path: '/',
        redirect: '/home',
        name: 'Default',
        component: DefaultLayout,
        children: [
            {
                path: 'home',
                name: 'Home',
                component: () => import('@/views/Home.vue')
            },
            {
                path: 'about',
                name: 'About',
                component: () => import('@/views/About.vue')
            },
            {
                path: 'setting',
                name: 'Setting',
                component: () => import('@/views/Setting.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
