import axios from "axios";

import { AddPetType } from '@/types/Pet';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const createAuthHeaders = (authToken: string | null) => {
    return {
        headers: {
            'Authorization': `Bearer ${authToken}`,
        },
    };
};

export const addNewPet = async (petData: AddPetType, id: number | undefined, authToken: string | null) => {
    return await axios.post( API_BASE_URL + 'addNewPet', {petData: petData, id: id, authToken: createAuthHeaders(authToken)});
}

export const selectedClientPet = async (client_id: number, authToken: string | null) => {
    return await axios.post( API_BASE_URL + 'selectedClientPet', { client_id: client_id, authToken: createAuthHeaders(authToken) } );
}