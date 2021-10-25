import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'

const routes = [
    {
        path: '/bitna', 
        name: "Home", 
        component: Home
    }, 
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router 