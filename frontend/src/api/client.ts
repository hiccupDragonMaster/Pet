import axios from "axios";

import { AddClientType } from '@/types/Client';
import { AddPetType } from "@/types/Pet";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const createAuthHeaders = (authToken: string | null) => {
    return {
        headers: {
            'Authorization': `Bearer ${authToken}`,
        },
    };
};


export const addClient = async (clientData: AddClientType | null, petData: AddPetType, authToken: string | null) => {
    return await axios.post( API_BASE_URL + 'addClient', {clientData: clientData, petData: petData, authToken: createAuthHeaders(authToken)});
}