
const state = {
    id: null,
    name: null
};

const mutations = {
    SET_PROFILE_MODAL: (state, payload) => {
        for(var i in payload) state[i] = payload[i];
    }
};

const actions = {
    setProfileData: (context, payoload) => {
        context.commit('SET_PROFILE_MODAL', payoload);
    },
};

export default {
    state,
    mutations,
    actions
}
