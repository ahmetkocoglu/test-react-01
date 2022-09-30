import axios from "axios";

const baseUrl = 'https://api.adoptez1artisan.com/';

const get = async (url) => {
    const token = localStorage.getItem('token');

    return await axios.get(baseUrl + url, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return false;
        });
}

const post = async (url, payload) => {
    return await axios.post(baseUrl + url, payload)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return false;
        });
}

export {get, post};
