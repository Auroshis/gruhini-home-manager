
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      // { path: '/tab', component: () => import('pages/Tabs-view.vue') },
      { path: '/help', component: () => import('pages/Help-page.vue') },
      { path: '/users', component: () => import('pages/users-detail.vue') }
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
