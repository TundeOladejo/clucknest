import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: () => import(/* webpackChunkName: "RegisterPage" */ "../views/RegisterPage")
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: () => import(/* webpackChunkName: "LoginPage" */ "../views/LoginPage")
    },
    {
        path: '/main',
        name: 'MainPage',
        component: () => import(/* webpackChunkName: "MainPage" */ "../views/MainPage"),
        children: [
            {
                path: 'expenses-record',
                name: 'ExpensesRecord',
                component: () => import(/* webpackChunkName: "ExpensesRecord" */ "../components/pages/ExpensesRecord")
            },
            {
                path: 'sales-record',
                name: 'SalesRecord',
                component: () => import(/* webpackChunkName: "SalesRecord" */ "../components/pages/SalesRecord")
            },
            {
                path: 'birds-record',
                name: 'BirdsRecord',
                component: () => import(/* webpackChunkName: "BirdsRecord" */ "../components/pages/BirdsRecord")
            },
            {
                path: 'inventory-record',
                name: 'InventoryRecord',
                component: () => import(/* webpackChunkName: "InventoryRecord" */ "../components/pages/InventoryRecord")
            },
            {
                path: 'eggs-record',
                name: 'EggsRecord',
                component: () => import(/* webpackChunkName: "EggsRecord" */ "../components/pages/EggsRecord")
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
