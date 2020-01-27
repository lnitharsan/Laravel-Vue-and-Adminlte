/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import AnimatedVue from 'animated-vue';
import * as VeeValidate from 'vee-validate';
import VeeValidateLaravel from 'vee-validate-laravel';
import VueAWN from "vue-awesome-notifications"
import infiniteScroll from 'vue-infinite-scroll';
import InfiniteLoading from 'vue-infinite-loading';
import router from './config/router';

import store from './store';
import Auth from './plugins/Auth.js';

// Your custom options
let VueAWNOptions = {
    position: 'top-left',
    maxNotifications: 1,
    durations: {
        global: 5000,
    },
    labels: {
        //warning: "Warning",
    }
};

Vue.use(VueRouter);
Vue.use(Auth);
Vue.use(AnimatedVue);
Vue.use(VeeValidate);
Vue.use(VeeValidateLaravel);
Vue.use(VueAWN, VueAWNOptions);
Vue.use(infiniteScroll);
Vue.use(InfiniteLoading);


require('./helpers/EnumHelper');
require('./helpers/UtilityHelper');

// This is a global mixin, it is applied to every vue instance
Vue.mixin({
    data() {
        return {
            Laravel: window.Laravel,
            MonthsList: window.MonthsList,
            lang: fnlang,
        }
    },

    computed: {

    },

    watch: {
        $route(to, from) {
            //this.closeProfileModal();
        }
    },

    mounted() {
        document.onreadystatechange = () => {
            if (document.readyState == "complete") {
                // run code here
                //console.log('Hello');

                // kick off the polyfill!
                //smoothscroll.polyfill();
            }
        };

        window.addEventListener('load', () => {
            //console.log(this);
        });
    },

    methods: {

        routerBack() {
            this.$router.go(-1);
        },
    }
});



require('./config/interceptors');
require('./config/guards');

const app = new Vue({
    el: '#userApp',
    router,
    store
});

app.$refs.loader.style.display = 'none';
