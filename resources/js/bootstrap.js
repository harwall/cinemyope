import ES6Promise from 'es6-promise';
require('es6-promise').polyfill();

// import bugsnag from 'bugsnag-js';
import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import Router from './routes';
//import VueAnalytics from 'vue-analytics';
// Vue.use(VueAnalytics, {
// 	id: 'UA-117619233-1',
// 	router: Router,
// 	autoTracking: {
//     	pageviewOnLoad: true
// 	}
// });

window.Vue = Vue;
window.Router = Router;
window._ = require('lodash');
window.axios = require('axios');
window.$ = window.jQuery = require('jquery');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

 // window.bugsnagClient = bugsnag('d89d3baa8f9b304611bfe36f981c88d1');
 // const bugsnagVue = require('bugsnag-vue')
 // bugsnagClient.use(bugsnagVue(Vue))

let token = document.head.querySelector('meta[name="csrf-token"]');
let xsid = document.head.querySelector('meta[name="x-sid"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    window.axios.defaults.headers.common['x-sid'] = xsid.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

Vue.use(VueRouter);

Vue.component('home', require('./app/home.vue'));
Vue.component('game', require('./app/game.vue'));
 
