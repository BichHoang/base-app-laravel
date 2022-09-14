import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import useStore from '../store';
import middleware from '../utils/middleware';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/dashboard',
        meta: {
            hidden: true,
        },
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../components/auth/Login.vue"),
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../components/dashboard/Index.vue"),
        meta: {
            permissions: ['view', 'edit', 'delete', 'create'],
        }
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../components/pages/404.vue'),
        name: 'NotFound',
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/401',
        component: () => import('../components/pages/401.vue'),
        name: 'NotPermission',
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach(async (to, from) => {
    const store = useStore();
    const isAuthenticated = store.auth.getAuthenticationState;
    const canAccess = middleware.canAccess(to.meta.permissions);

    if (to.name == 'Login') {
        if (isAuthenticated) {
            return { name: 'Dashboard' };
        }
    } else {
        if (!canAccess) {
            if (isAuthenticated) {
                return { name: 'NotPermission' };
            } else {
                return { name: 'Login' }
            }
        }
    }
    return true;
})

export default router;
