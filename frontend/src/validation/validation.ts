import { AddClientType } from '@/types/Client';
import { AddPetType } from "@/types/Pet";

export const clientDataValidation = (data: AddClientType) => {
    let client_errors: string[] = [];

    if (!data.first_name || !data.last_name || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
        client_errors.push('All fields are required.');
    }

    return client_errors;

}

export const petDataValidation = (data: AddPetType) => {
    let pet_errors: string[] = [];

    if (!data.name || !data.gender_id || !data.breed_id || !data.age_id || !data.size_id) {
        pet_errors.push('All fields are required.');
    }

    return pet_errors;
}