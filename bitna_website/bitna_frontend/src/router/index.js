import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'
import DatasetCreation from '../views/DatasetCreation'
import ModelCreation from '../views/ModelCreation'

const routes = [
    {
        path: '/bitna', 
        name: "Home", 
        component: Home
    }, 
    {
        path: '/bitna/ds-create', 
        name: "Dataset Creation", 
        component: DatasetCreation
    }, 
    {
        path: '/bitna/models', 
        name: "Model Creation", 
        component: ModelCreation
    }
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router 