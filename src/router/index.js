import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import SinglePost from '@/components/SinglePost';
import Admin from '@/components/Admin';
import AdminPosts from '@/components/AdminPosts';
import AdminSettings from '@/components/AdminSettings';
import AdminEditPost from '@/components/AdminEditPost';
import axios from 'axios';

axios.defaults.baseURL = 'https://newsapi.org/v1';
axios.defaults.headers['X-Api-Key'] = '69ee6091a1074c409592b883d60219df';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/p/post-:id',
      name: 'SinglePost',
      component: SinglePost,
    },
    {
      path: '/admin/',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/admin/posts',
      name: 'AdminPosts',
      component: AdminPosts,
    },
    {
      path: '/admin/settings',
      name: 'AdminSettings',
      component: AdminSettings,
    },
    {
      path: '/admin/edit-post',
      name: 'AdminEditPost',
      component: AdminEditPost,
    },
  ],
});
