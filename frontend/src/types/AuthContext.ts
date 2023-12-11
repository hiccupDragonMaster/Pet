import { User } from '../types/User';
import { Client } from './Client';
import { ResponsePetType } from './Pet';

export interface AuthContextProps {
    user: User | null;
    login: (email: string, password: string) => Promise<void>; // This is the updated type definition
    logout: () => void;
    isLoadingAuth: boolean;
    client: Client | null;
    pet: ResponsePetType | null;
    selectClientPet: (param: ResponsePetType) => void;
    clientSelect: (param: Client) => void;
}