import axios from "axios";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const createAuthHeaders = (authToken: string | null) => {
    return {
        headers: {
            'Authorization': `Bearer ${authToken}`,
        },
    };
};

export const getGender = async (authToken: string | null) => {
    return await axios.post(API_BASE_URL + 'getGender', {}, createAuthHeaders(authToken));
};

export const getAge = async (authToken: string | null) => {
    return await axios.post(API_BASE_URL + 'getAge', {}, createAuthHeaders(authToken));
};

export const getSize = async (authToken: string | null) => {
    return await axios.post(API_BASE_URL + 'getSize', {}, createAuthHeaders(authToken));
};

export const getBreed = async (id:number, authToken: string | null) => {
    return await axios.post(API_BASE_URL + 'getBreed', { id }, createAuthHeaders(authToken));
};
