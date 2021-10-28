import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'
import Datasets from '../views/Datasets'
import DatasetCreation from '../views/DatasetCreation'
import ModelCreation from '../views/ModelCreation'
import Tutorial from '../views/Tutorial'

const routes = [
    {
        path: '/', 
        name: "Home", 
        component: Home
    }, 
    {
        path: '/ds', 
        name: "Datasets", 
        component: Datasets
    },
    {
        path: '/ds-create', 
        name: "Dataset Creation", 
        component: DatasetCreation
    }, 
    {
        path: '/models', 
        name: "Model Creation", 
        component: ModelCreation
    }, 
    {
        path: '/tutorial',
        name: "Tutorial", 
        component: Tutorial
    }
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router 