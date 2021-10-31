import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'
import DatasetsMain from '../views/Datasets/DatasetsMain'
import DatasetCreation from '../views/Datasets/DatasetCreation'
import DatasetsView from '../views/Datasets/DatasetsView'
import DatasetUpload from '../views/Datasets/DatasetUpload'
import Model from '../views/Model'
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
        path: '/ds/upload',
        name: "DatasetUpload", 
        component: DatasetUpload,
        meta: { transition: 'fade' }
    },
    {
        path: '/model', 
        name: "Model", 
        component: Model, 
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