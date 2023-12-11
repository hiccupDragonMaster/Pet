import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const createAuthHeaders = (authToken: string | null) => {
    return {
        headers: {
            'Authorization': `Bearer ${authToken}`,
        },
    };
};

export const searchClient = async (searchTerm: string, authToken: string | null) => {
    return await axios.post( API_BASE_URL + 'searchClient', {searchTerm: searchTerm, authToken: createAuthHeaders(authToken)});
}