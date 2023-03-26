import {notification} from 'antd';
import axios from "axios";
import {createAuth0Client} from "@auth0/auth0-spa-js";

axios.defaults.baseURL = window.API_URL + "/v1"
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(async function (config) {
    let auth0Client = await createAuth0Client({
        domain: "dimssss.eu.auth0.com",
        clientId: "uOjxgnXBdFxLEduxn1od2bTTP3KQYpDi",
        cacheLocation: 'localstorage',
        authorizationParams: {
            redirect_uri: window.location.origin, audience: "http://unounds-io.test",
        },

    })
    const token = await auth0Client.getTokenSilently();
    console.log(token)
    config.headers['Authorization'] = `Bearer ${token}`
    return config;
}, function (error) {
    return Promise.reject(error);
});


axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // console.error(error)
    // notification.error({message: 'Error', description: error.response.data.message});
    return Promise.resolve(error);
});

export function whoami() {

    const config = {
        url: '/user/profile', method: 'get',
    }
    return axios(config)
}

export function onboard() {

    const config = {
        url: '/user/onboard', method: 'get',
    }
    return axios(config)
}