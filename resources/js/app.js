/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router';
import router from './router';
import i18n from './i18n'
import VueProgressBar from 'vue-progressbar'
// import VModal from 'vue-js-modal'
// import VueI18n from 'vue-i18n';
// Vue.use(VueI18n);
import VueLazyload from 'vue-lazyload'
Vue.use(VueProgressBar, {
    color: '#009688',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'left',
    inverse: false
})
Vue.use(VueLazyload, {
    // preLoad: 1.3,
    // error: '../../assets/images/error.png',
    // loading: '../assets/images/loading.gif',
    attempt: 3
    }
)

// Vue.use(VModal, );


Vue.use(VueRouter);

window.Vue = require('vue');

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {

    // use the language from the routing param or default language
    let language = to.params.lang;
    if (!language) {
        language = 'en'
    }

    // set the current language for i18n.
    i18n.locale = language
    next()
})

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('layout', require('./components/Layout.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    i18n,
    router,
});
