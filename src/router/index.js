/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
// import { routes } from 'vue-router/auto-routes'
import pages from 'virtual:generated-pages';

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    const tabs = [
      '/News/Notice',
      '/News/Faq',
      '/News/Qna',
      '/News/Guide',
    ];

     if (savedPosition) {
      return savedPosition;
    }

    const fromIsTab = tabs.includes(from.path);
    const toIsTab = tabs.includes(to.path);

    if (fromIsTab && toIsTab) {
    return false;
  }

    if (toIsTab) {
      return { top: 0 };
    }

    return { top: 0 };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(pages),
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
