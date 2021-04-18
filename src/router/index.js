import { createRouter, createWebHashHistory } from 'vue-router'

import Home from "@/views/Home/Home";
import Article from "@/views/Article/Article";
import Stars from "@/views/Stars/Stars";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Moran\'s blog',
      isShow: false,
    }
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
    meta: {
      title: '文章 | Moran\'s blog',
      isShow: true,
    }
  },
  {
    path: '/stars',
    name: 'Stars',
    component: Stars,
    meta: {
      title: '友链 | Moran\'s blog',
      isShow: true,
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
