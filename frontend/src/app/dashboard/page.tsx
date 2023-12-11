// Dashboard.js
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/dashboard/Layout';

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const user = localStorage.getItem('authToken');
        if (!user) {
            router.push('/');
        } else {
            setIsLogged(true);
        }
    }, [router]);

    useEffect(() => {
        setIsLoading(true);
    }, []);

    // Your page content
    const content = (
        <h2 className="text-2xl font-bold mb-6">Dental report content</h2>
    );

    return (
        <>
            {isLoading && isLogged && (
                <Layout>
                    {content}
                </Layout>
            )}
        </>
    );
};

export default Dashboard;
