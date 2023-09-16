import axios from "axios";

export const httpRequest = axios.create({
    baseURL: process.env.API_URL,
});