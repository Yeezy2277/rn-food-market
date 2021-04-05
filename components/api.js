import axios from 'react-native-axios';
const config = {
    baseURL: "http://127.0.0.1:8000/",
    headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data"
    }
};
const client = axios.create(config);
export const authMeAPI = {
    login(data) {
        return client.post(`api/login`,data)
    },
    register(data) {
        return client.post(`api/register/`,data)
    },
    mail(data) {
        return client.post(`api/mail`,data)
    }
}

export const userInfoAPI = {
    currentUser() {
        return client.get(`/api/user-info/CurrentUser`)
    },
    updateProfile(data) {
        return client.put(`/api/user-info`,data)
    }
}