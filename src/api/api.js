import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4c7b227d-d83d-45ab-9f12-6ba2c0dc507f',
    },
});

export const profileApi = {
    async getUsersProfile(userId) {
        const response = await axiosInstance.get(`profile/${userId}`);
        return response.data;
    },
    async getStatus(userId) {
        const response = await axiosInstance.get(`profile/status/${userId}`);
        return response.data;
    },
    async updateStatus(status) {
        const response = await axiosInstance.put('profile/status', {status: status});
        return response.data;
    },
    async putProfilePhoto(image) {
        const formData = new FormData();
        formData.append('image', image);

        const response = await axiosInstance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    }
};

export const usersApi = {
    async getUsers(currentPage = 1, pageSize = 10) {
        const response = await axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },

    async follow(friendId) {
        const response = await axiosInstance.post(`follow/${friendId}`);
        return response.data;
    },

    async unfollow(friendId) {
        const response = await axiosInstance.delete(`follow/${friendId}`);
        return response.data;
    },
};

export const authApi = {
    async getAuthData() {
        const response = await axiosInstance.get('auth/me');
        return response.data;
    },
    async login(email, password, rememberMe, captcha) {
        const response = await axiosInstance.post('/auth/login', {
            email,
            password,
            rememberMe,
            captcha,
        });
        return response.data;
    },
    async logout() {
        const response = await axiosInstance.delete('/auth/login');
        return response.data;
    },
};

export const securityApi = {
    async getCaptcha() {
        const response = await axiosInstance.get('/security/get-captcha-url');
        return response.data;
    },
};
