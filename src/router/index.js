import { isInGroup } from '@/user'
import { createRouter, createWebHistory} from 'vue-router'
import { LoginCallback } from '@okta/okta-vue'
import { navigationGuard } from '@okta/okta-vue'
import Home from '@/components/Home.vue'
import LoginComponent from '@/components/Login.vue'
import ProfileComponent from '@/components/Profile.vue'
import About from '@/components/About.vue'
import Admin from '@/components/Admin.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/login/callback',
    component: LoginCallback
  },
  {
    path: '/profile',
    component: ProfileComponent,
    meta: {
      requiresAuth: true
    }
  }
  ,
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAuth: true
    }
    //evaluate group for RBAC
    ,
    beforeEnter: async (to, from, next) => {
      next(await isInGroup('admin'));
    }
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(navigationGuard)

// router.safeNavigate = function(route, dest) {
//   if (route.name != dest) this.push({ name: dest });
// }

export default router