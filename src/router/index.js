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
                path: 'expenses-records',
                name: 'ExpensesPage',
                component: () => import(/* webpackChunkName: "ExpensesPage" */ "../components/pages/ExpensesPage")
            },
            {
                path: 'sales-records',
                name: 'SalesPage',
                component: () => import(/* webpackChunkName: "SalesPage" */ "../components/pages/SalesPage")
            },
            {
                path: 'birds-records',
                name: 'BirdsPage',
                component: () => import(/* webpackChunkName: "BirdsPage" */ "../components/pages/BirdsPage")
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
