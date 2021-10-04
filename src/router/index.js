import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'

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
    // { 
    //     path: '/Stock',
    //     name: 'Stock',
    //     component: Stock
    // },
    // { 
    //     path: '/Shop',
    //     name: 'Shop',
    //     component: Shop
    // },
    // { 
    //     path: '/Job',
    //     name: 'Job',
    //     component: Job
    // },
    // { 
    //     path: '/Contacts',
    //     name: 'Contacts',
    //     component: Contacts
    // },
    // { 
    //     path: '/Cooperation',
    //     name: 'Cooperation',
    //     component: Cooperation
    // },
    // { 
    //     path: '/Franchise',
    //     name: 'Franchise',
    //     component: Franchise
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;