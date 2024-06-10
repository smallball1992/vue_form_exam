import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './components/HomePage.vue';
import SubmitPage from './components/SubmitPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/submit',
      name: 'Submit',
      component: SubmitPage
    }
  ]
});
