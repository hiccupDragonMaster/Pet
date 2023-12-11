'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, AuthContextProps } from '../types';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Client } from '@/types/Client';
import { ResponsePetType } from '@/types/Pet';

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


export const AuthProvider = ({ children }: AuthProviderProps) => {

    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [isLoadingAuth, setIsLoadingAuth] = useState(true); // New state to track loading


    useEffect(() => {
        const initAuth = async () => {
            setIsLoadingAuth(true); // Start loading
            const token = localStorage.getItem('authToken');
            if (token) {
                try {
                    // Fetch user data and validate token
                    const response = await axios.get(API_BASE_URL + 'user', {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    setUser(response.data as User);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    setUser(null);
                    router.push('/');
                }
            } else {
                setUser(null);
                router.push('/');
            }
            setIsLoadingAuth(false); // Finish loading
        };

        initAuth();
    }, []);


    const login = async (email: string, password: string): Promise<void> => {
        try {
            const response = await axios.post(API_BASE_URL+'login', {
                email,
                password,
            });

            const data = response.data;

            if (!data.success) {
                throw new Error(data.message || 'Failed to log in.');
            }

            localStorage.setItem('authToken', data.access_token);
            setUser(data.user as User);  // Adjusted this line
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Handle axios-specific error
                throw new Error(error.response?.data.message || 'An unexpected error occurred.');
            } else if (error instanceof Error) {
                // Handle general error
                throw error;
            } else {
                // Handle unexpected error cases
                throw new Error('An unexpected error occurred.');
            }
        }
    };

    const cleanFrontendSession = () => {
        localStorage.removeItem('authToken');
        setUser(null);
        router.push('/');
    }

    const logout = async () => {
        try {
            await axios.post(API_BASE_URL +'logout', {}, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            cleanFrontendSession();
            
        } catch (error) {
            console.error('Logout failed:', error);
            // Handle logout error (e.g., show a message to the user)

            cleanFrontendSession();
        }
    };

    const [client, setClient] = useState<Client | null>(null);
    const [pet, setPet] = useState<ResponsePetType | null>(null);

    const clientSelect = (param: Client | null) => {
        setClient(param);
    }

    const selectClientPet = (param: ResponsePetType) => {
        setPet(param);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoadingAuth, client, pet, selectClientPet, clientSelect }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): Partial<AuthContextProps> => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
