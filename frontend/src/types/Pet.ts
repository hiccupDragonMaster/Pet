export type AddPetType = {
    name: string;
    pet_type_id: number;
    breed_id: number;
    size_id: number;
    age_id: number;
    gender_id: number;
}

export type RequestPetType = {
    name: string;
    pet_type_id: number;
    breed_id: number;
    size_id: number;
    age_id: number;
    gender_id: number;
    client_id: number;
}

export type ResponsePetType = {
    name: string;
    type: string;
    size: string;
    breed: string;
}