import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './store/getters';
import * as mutations from './store/mutations';
import * as actions from './store/actions';

import user from './store/modules/user';
import _default from './store/modules/_default';
import profile from './store/modules/profile_modal';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,

    /**
     * include modules here
     */
    modules: {
        user,
        _default,
        profile,
    },

    /**
     * GLOBAL SHARED STATE
     * - use this when data is used on multiple pages (components)
     */
    state: {},

    /**
     * Use getters when you need to add additional
     * functionality when getting data from state.
     *
     * FILE:
     * store/getters.js
     *
     * SETUP:
     * someValue: state => {
     *    return state.value;
     * }
     *
     * USAGE IN COMPONENT:
     * this.$store.getters.someValue;  // note: without parentheses
     */
    getters,

    /**
     * Use mutations when you need to change state value.
     * THEY MUST NOT CONTAIN ASYNC TASKS! (ajax call, timeout...)
     * use actions for that
     *
     * FILE:
     * store/mutations.js
     *
     * SETUP:
     * setValue: (state, payload) => {
     *    state.value = payload;
     * }
     *
     * USAGE IN COMPONENT:
     * this.$store.commit('setValue', value);
     * for multiple parameters use object
     */
    mutations,

    /**
     * Use actions when you need to do ASYNC
     * task before committing mutation.
     *
     * FILE:
     * store/actions.js
     *
     * SETUP:
     * setValue: ({ commit }, payload) => {
     *    commit('mutationFunctionName', payload);
     * }
     *
     * USAGE IN COMPONENT:
     * this.$store.dispatch('setValue', value);
     * for multiple parameters use object
     */
    actions
});