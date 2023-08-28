import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage'


const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
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
                path: 'dashboard',
                name: 'MainDashboard',
                component: () => import(/* webpackChunkName: "MainDashboard" */ "../components/pages/MainDashboard")
            },
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
                path: 'feeding-record',
                name: 'FeedingRecord',
                component: () => import(/* webpackChunkName: "FeedingRecord" */ "../components/pages/FeedingRecord")
            },
            {
                path: 'eggs-record',
                name: 'EggsRecord',
                component: () => import(/* webpackChunkName: "EggsRecord" */ "../components/pages/EggsRecord")
            },
            {
                path: 'vet-record',
                name: 'VetRecord',
                component: () => import(/* webpackChunkName: "VetRecord" */ "../components/pages/VetRecord")
            },
            {
                path: 'clients-details',
                name: 'ClientsAndVendors',
                component: () => import(/* webpackChunkName: "ClientsAndVendors" */ "../components/pages/ClientsAndVendors")
            },
            {
                path: 'staffs-record',
                name: 'CompanyStaffs',
                component: () => import(/* webpackChunkName: "ClientsAndVendors" */ "../components/pages/CompanyStaffs")
            },
            {
                path: 'settings',
                name: 'SettingsPage',
                component: () => import(/* webpackChunkName: "SettingsPage" */ "../components/pages/SettingsPage")
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
