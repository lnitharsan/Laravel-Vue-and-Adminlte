import axios from 'axios';

const state = {
    id: null,
    name: '',
    email: '',
    profile_image: null,
    profile_image_thumb: null,
    profile_image_small: null,
    created_at: null,
    updated_at: null,
    is_email_verified: false,
    profile_completeness: 0
};

const mutations = {
    SET_USER: (state, payload) => {
        state.id = payload.id;
        state.name = payload.name;
        state.email = payload.email;
        state.profile_image = payload.profile_image;
        state.profile_image_thumb = payload.profile_image_thumb;
        state.profile_image_small = payload.profile_image_small;
        state.created_at = payload.created_at;
        state.updated_at = payload.updated_at;
        state.is_email_verified = payload.is_email_verified;
        state.profile_completeness = payload.profile_completeness;
    }
};

const actions = {
    getUserData: (context, payoload) => {
        axios.get( route('user.api.auth.user') )
            .then( (response) => {
                context.commit('SET_USER', response.data);
            });
    }
};

export default {
    state,
    mutations,
    actions
}
