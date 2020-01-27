import Vue from 'vue';
import axios from 'axios';
import router from './router';
import _ from 'lodash';

let isAlreadyFetchingAccessToken = false;
let subscribers = [];

function onAccessTokenFetched(access_token) {
    subscribers = subscribers.filter(callback => callback(access_token))
}

function addSubscriber(callback) {
    subscribers.push(callback)
}

axios.interceptors.response.use(function (response) {
    return response
}, function (error) {
    const { config, response: { status } } = error;
    const originalRequest = config;

    switch (status) {
        case 500:
            let error_message = 'Whoops, something went wrong';

            Vue.prototype.$awn.alert(error_message);
            break;

        case 422:
            let mgs = 'The given data was invalid.';

            if (error.response.data) {
                if (!error.response.data.message.isEmpty()) {
                    mgs = error.response.data.message;
                }

                if (error.response.data.errors.length > 0) {
                    if (typeof error.response.data.errors === 'string') {
                        mgs = error.response.data.errors;
                    } else if (typeof error.response.data.errors === 'array') {
                        let errors = _.values(error.response.data.errors);
                        mgs = _.first(errors)[0];
                    }
                }
            }

            Vue.prototype.$awn.warning(mgs);
            break;

        case 401:
			let access_token = localStorage.getItem('access_token');
			let expiration = localStorage.getItem('expiration');

			if (access_token && expiration) {
                if (!isAlreadyFetchingAccessToken) {
                    isAlreadyFetchingAccessToken = true;

                    Vue.prototype.$auth
                        .refreshToken()
                        .then((response) => {
                            // regranted successfully
                            isAlreadyFetchingAccessToken = false;
                            onAccessTokenFetched(response.data.access_token);
                        })
                        .catch(err => {
                            Vue.prototype.$awn.warning(err.response.data.message);
                            Vue.prototype.$auth.logout();
                            router.push({ name: 'login' });
                            //return Promise.reject(err);
                        });
                        
                    const retryOriginalRequest = new Promise((resolve) => {
                        addSubscriber(access_token => {
                            originalRequest.headers.Authorization = 'Bearer ' + access_token;
                            resolve(axios(originalRequest));
                        });
                    });

                    return retryOriginalRequest;
                }
            }else {
                Vue.prototype.$awn.warning(error.response.data.message);
                router.push({ name: 'login' });
            }

            break;
    }


    return Promise.reject(error);
})
