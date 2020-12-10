import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7874eee4 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _54d02568 = () => interopDefault(import('..\\pages\\user\\_id\\index.vue' /* webpackChunkName: "pages/user/_id/index" */))
const _7b115c86 = () => interopDefault(import('..\\pages\\_.vue' /* webpackChunkName: "pages/_" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/user",
    component: _7874eee4,
    name: "user"
  }, {
    path: "/user/:id",
    component: _54d02568,
    name: "user-id"
  }, {
    path: "/*",
    component: _7b115c86,
    name: "all"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
