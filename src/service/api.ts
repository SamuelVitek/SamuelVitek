import axios, { AxiosInstance } from 'axios';

console.log()

const instance: AxiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json'
    },
});

export const api = instance;