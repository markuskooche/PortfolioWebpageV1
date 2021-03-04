import { createRouter, createWebHistory } from 'vue-router';
import PageNotFound from '@/views/PageNotFound.vue';
import Home from '@/views/Home.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/404',
        name: 'PageNotFound',
        component: PageNotFound,
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/404',
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;