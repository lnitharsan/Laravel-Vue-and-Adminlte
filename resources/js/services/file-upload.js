import * as axios from 'axios';



function upload(formData) {
    return axios.post(route('user.api.photos.upload'), formData)
    // get data
        .then(x => x.data);
}

function horoscopeUpload(formData) {
    return axios.post(route('user.api.photos.horoscope_upload'), formData)
    // get data
        .then(x => x.data);
}


export { upload }
export { horoscopeUpload }