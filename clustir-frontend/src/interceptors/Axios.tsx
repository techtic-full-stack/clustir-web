import axios, { AxiosResponse } from 'axios';
import Router from 'next/router';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        maxBodyLength: Infinity,
    },
});

const setAuthorizationHeader = () => {
    const token = process.browser && localStorage.getItem('token');
    return token ? `Bearer ${token}` : '';
};

axiosInstance.interceptors.request.use((config) => {
    // Set the Authorization header using the dynamically retrieved token
    config.headers.Authorization = setAuthorizationHeader();
    return config;
});

let refresh = false;

axiosInstance.interceptors.response.use(
    (response: AxiosResponse<any, any>) => {
        if (response.data?.status_code === 403 || response.data?.status_code === 401) {
            refresh = true;
            Router.push('/login').then(() => {
                localStorage.clear();
            });
        }
        return response.data;
    },
    async (error) => {
        if ((error.response?.status === 401 || error.response?.status === 500) && !refresh) {
            refresh = true;
            Router.push('/login').then(() => {
                localStorage.clear();
            });
        }
        refresh = false;
        return Promise.reject(error);
    },
);

export default axiosInstance;
