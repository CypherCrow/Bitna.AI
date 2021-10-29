import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'
import DatasetsMain from '../views/DatasetsMain'
import DatasetCreation from '../views/DatasetCreation'
import DatasetsView from '../views/DatasetsView'
import ModelsMain from '../views/ModelsMain'
import ModelCreation from '../views/ModelCreation'
import ModelsView from '../views/ModelsView'
import Tutorial from '../views/Tutorial'

const routes = [
    {
        path: '/', 
        name: "Home", 
        component: Home, 
        meta: { transition: 'fade' }
    }, 
    {
        path: '/ds', 
        name: "DatasetsMain", 
        component: DatasetsMain, 
        meta: { transition: 'fade' }
    },
    {
        path: '/ds/create', 
        name: "DatasetCreation", 
        component: DatasetCreation, 
        meta: { transition: 'fade' }
    }, 
    {
        path: '/ds/view', 
        name: "DatasetsView",
        component: DatasetsView, 
        meta: { transition: 'fade' }
    },
    {
        path: '/models', 
        name: "ModelsMain", 
        component: ModelsMain, 
        meta: { transition: 'fade' }
    }, 
    {
        path: '/models/create',
        name: "ModelCreation", 
        component: ModelCreation, 
        meta: { transition: 'fade' }
    }, 
    {
        path: '/models/view', 
        name: "ModelsView", 
        component: ModelsView, 
        meta: { transition: 'fade' }
    },
    {
        path: '/tutorial',
        name: "Tutorial", 
        component: Tutorial, 
        meta: { transition: 'fade' }
    }
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router 