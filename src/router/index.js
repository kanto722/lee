import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Stock from '@/views/Stock'
import Shop from '@/views/Shop'
import Job from '@/views/Job'
import Contacts from '@/views/Contacts'
import Cooperation from '@/views/Cooperation'
import Franchise from '@/views/Franchise'


const routes = [
    { 
        path: '/',
        name: 'Home',
        component: Home
    },
    { 
        path: '/About',
        name: 'About',
        component: About
    },
    { 
        path: '/Stock',
        name: 'Stock',
        component: Stock
    },
    { 
        path: '/Shop',
        name: 'Shop',
        component: Shop
    },
    { 
        path: '/Job',
        name: 'Job',
        component: Job
    },
    { 
        path: '/Contacts',
        name: 'Contacts',
        component: Contacts
    },
    { 
        path: '/Cooperation',
        name: 'Cooperation',
        component: Cooperation
    },
    { 
        path: '/Franchise',
        name: 'Franchise',
        component: Franchise
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;