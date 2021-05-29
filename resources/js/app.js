require('./bootstrap');

import Vue from 'vue/dist/vue.common.js';
import store from './store';
import router from './router';
import App from './App.vue';
import fontawesome from '@fortawesome/fontawesome-free'
import bootstrap from 'bootstrap'


new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');