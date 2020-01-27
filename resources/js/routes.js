const routes = [
    {
        path: '/login',
        component: require('./views/auth/Login.vue').default,
        name: 'login',
        meta: {
            requiresAuth: false
        },
    },
    {
        path: '/register',
        component: require('./views/auth/Register.vue').default,
        name: 'register',
        meta: {
            requiresAuth: false
        },
    },
    {
        path: '/logout',
        name: 'logout',
        redirect: '/login',
        meta: {
            requiresAuth: false
        },
    },
    {
        path: '/forgot_password',
        component: require('./views/auth/ForgotPassword.vue').default,
        name: 'forgot_password',
        meta: {
            requiresAuth: false
        },
    },
    {
        path: '/recover_password',
        component: require('./views/auth/RecoverPassword.vue').default,
        name: 'recover_password',
        meta: {
            requiresAuth: false
        },
    },

    {
        path: '/',
        component: require('./views/layouts/DefaultLayout.vue').default,
        meta: {
            requiresAuth: false
        },
        children: [
            {
                path: '/',
                component: require('./views/dashboard/Index.vue').default,
                name: 'home',
            },
            {
                path: '/home',
                redirect: '/',
            },
            {
                path: '/dashboard',
                redirect: '/',
            },
        ]
    },

    {
        // not found handler
        path: '*',
        component: require('./views/errors/404').default,
    }
];

export default routes;
