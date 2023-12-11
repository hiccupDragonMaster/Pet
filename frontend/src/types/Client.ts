export type Client = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
};

export type AddClientType = {
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
}