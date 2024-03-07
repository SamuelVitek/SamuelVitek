import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': process.env.POSTMARK_API_KEY
    },
});

export const api = instance;