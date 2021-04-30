import { createRouter, createWebHistory } from 'vue-router';
import PageNotFound from '@/views/PageNotFound.vue';
import Resume from '@/views/Resume.vue';
import Home from '@/views/Home.vue';


const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/resume',
        component: Resume,
        children: [
            {
                path: '/resume-de.pdf',
            },
        ]
    },
    {
        path: '/404',
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