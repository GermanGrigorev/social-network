import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4c7b227d-d83d-45ab-9f12-6ba2c0dc507f',
    },
})

export const profileApi = {
    getUsersProfile(userId) {
        return axiosInstance.get(`profile/${userId}`)
            .then((response) => response.data);
    },
    getStatus(userId) {
        return axiosInstance.get(`profile/status/${userId}`)
            .then((response) => response.data);
    },
    updateStatus(status) {
        return axiosInstance.put('profile/status', {status: status})
            .then((response) => response.data);
    }
}

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data);
    },

    follow(friendId) {
        return axiosInstance.post(`follow/${friendId}`)
            .then((response) => response.data);
    },

    unfollow(friendId) {
        return axiosInstance.delete(`follow/${friendId}`)
            .then((response) => response.data);
    },
}

export const authApi = {
    getAuthData() {
        return axiosInstance.get('auth/me')
            .then((response) => response.data);
    },
    login(email, password, rememberMe, captcha) {
        return axiosInstance.post('/auth/login', {
            email,
            password,
            rememberMe,
            captcha,
        }).then((response) => response.data);
    },
    logout() {
        return axiosInstance.delete('/auth/login')
            .then((response) => response.data);
    }
}

export const securityApi = {
    getCaptcha() {
        return axiosInstance.get('/security/get-captcha-url')
            .then((response) => response.data);
    }
}
