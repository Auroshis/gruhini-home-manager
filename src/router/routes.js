
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', name: 'Index', component: () => import('pages/IndexPage.vue') },
      { path: '/tabs', name: 'Tabs', component: () => import('pages/Tabs-view.vue') },
      { path: '/help', name: 'Help', component: () => import('pages/Help-page.vue') },
      { path: '/users', name: 'Users', component: () => import('pages/users-detail.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
