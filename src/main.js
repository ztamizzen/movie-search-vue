import Vue from 'vue'
import VueRouter from 'vue-router';
import VueCompositionApi from '@vue/composition-api'
import App from './App.vue'
import Movies from "@/components/Movies";
import MovieImagePopup from './components/MovieImagePopup.vue'

Vue.config.productionTip = false
Vue.use(VueCompositionApi);
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  routes: [
    {
      path: '/',
      component: Movies,
      children: [
        {
          path: '/movie/:id/image',
          component: MovieImagePopup
        }
      ]
    }
  ]
}).$mount('#app')
