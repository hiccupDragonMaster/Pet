export type SizeType = {
    id: number;
    name: string;
    description: string | null;
}

export type GenderType = {
    id: number;
    name: string;
}

export type AgeType = {
    id: number;
    name: string;
}

export type BreedType = {
    id: number;
    name: string;
    pet_type_id: number;
}