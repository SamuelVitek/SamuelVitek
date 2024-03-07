import axios, { AxiosInstance } from 'axios';

console.log()

const instance: AxiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': '60d62636-82e2-4023-866d-09c7d057bcf6'
    },
});

export const api = instance;