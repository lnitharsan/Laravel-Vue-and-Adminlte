
const state = {
    openProfile: false,
    onBottomMenu: false,
    onSidebar: false,
    contentWrapperStyles: {},
};

const mutations = {
    SET_DEFAULT: (state, payload) => {
        state.openProfile = payload.openProfile;
        state.onBottomMenu = payload.onBottomMenu;
        state.onSidebar = payload.onSidebar;
        state.contentWrapperStyles = payload.contentWrapperStyles;
    }
};

const actions = {
    getDefaultData: (context, payoload) => {

        //context.commit('SET_DEFAULT', response.data);
    }
};

export default {
    state,
    mutations,
    actions
}
