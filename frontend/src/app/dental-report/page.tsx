// Dashboard.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/authContext';
import Layout from '@/components/dashboard/Layout';
import { Avatar, Badge, Button, Dropdown } from 'flowbite-react';
import { Checkbox, Table } from 'flowbite-react';
import 'react-toastify/dist/ReactToastify.css';
import CustomPagination from '@/components/ui/CustomPagination';
import Loading from '@/components/ui/Loading';

const Dashboard = () => {
    const router = useRouter();
    const { user, isLoadingAuth } = useAuth();

    useEffect(() => {
        if (!isLoadingAuth && !user) {
            router.push('/login');
        }
    }, [user, isLoadingAuth, router]);

    if (isLoadingAuth) {
        return <Loading/>
    }

    const reportsData = [
        {
            id: 1,
            client: 'Alice T. Morlan',
            pet: 'Luna',
            petType: 'Dog',
            date: 'Apr 23, 2021',
            dentalTech: 'Mia Gregor',
            createdBy: 'Mia Gregor',
        },
        {
            id: 2,
            client: 'Carlos D. Smith',
            pet: 'Baxter',
            petType: 'Cat',
            date: 'May 15, 2021',
            dentalTech: 'Juan Carlos',
            createdBy: 'Stephanie Sun',
        },
        {
            id: 3,
            client: 'Brianna C. Webb',
            pet: 'Thor',
            petType: 'Cat',
            date: 'Jun 03, 2021',
            dentalTech: 'Lisa Ray',
            createdBy: 'Martin Ruiz',
        },
        
    ];

    

    const handlePageChange = (page: number) => {
        console.log(`Changed to page ${page}`);
    };

    const IconDots = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z" fill="#1F2A37" />
                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#1F2A37" />
                <path d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z" fill="#1F2A37" />
            </svg>
        );
    };

    // Your page content
    const content = (
        <>
            <div className='flex justify-between items-center p-6'>
                <h2 className="text-2xl mb-0">Dental report</h2>
                <Button href={'/dental-report/client'} type="submit" className="bg-teal-400 transition-all duration-300">
                    New dental report
                </Button>
            </div>

            <div>
                <Table hoverable border={1} className='shadow-none drop-shadow-none border-0 border-t border-b'>
                    <Table.Head>
                        <Table.HeadCell className="p-2 md:p-4 hidden sm:table-cell">
                            <Checkbox />
                        </Table.HeadCell>
                        <Table.HeadCell className='p-2 md:p-4'>CLIENT</Table.HeadCell>
                        <Table.HeadCell className='p-2 md:p-4'>PET</Table.HeadCell>
                        <Table.HeadCell className='hidden md:table-cell'>PET TYPE</Table.HeadCell>
                        <Table.HeadCell className='p-2 md:p-4'>DATE</Table.HeadCell>
                        <Table.HeadCell className='hidden lg:table-cell'>DENTAL TECH</Table.HeadCell>
                        <Table.HeadCell className='hidden lg:table-cell'>CREATED BY</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>


                    <Table.Body className="divide-y">
                        {reportsData.map((report) => (
                            <Table.Row key={report.id} className="bg-white dark:border-gray-700 dark:bg-gray-800 border-0 border-t">
                                <Table.Cell className="p-2 md:p-4 hidden sm:table-cell">
                                    <Checkbox />
                                </Table.Cell>

                                <Table.Cell className="p-2 md:p-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {report.client}
                                </Table.Cell>

                                <Table.Cell className='p-2 md:p-4'>
                                    {report.pet}
                                </Table.Cell>

                                <Table.Cell className='hidden md:table-cell p-2 md:p-4'>
                                    <Badge size="sm" 
                                        className='inline-flex' 
                                        color={report.petType === "Cat" ? "cat" : report.petType === "Dog" ? "dog" : ""}>
                                        {report.petType}
                                    </Badge>
                                </Table.Cell>

                                <Table.Cell className='p-2 md:p-4'>
                                    {report.date}
                                </Table.Cell>

                                <Table.Cell className='hidden lg:table-cell'>
                                    <div className='flex items-center'>
                                        <Avatar size="sm" className='mr-2 text-xs' placeholderInitials="MG" rounded />
                                        {report.dentalTech}
                                    </div>
                                </Table.Cell>

                                <Table.Cell className='hidden lg:table-cell'>
                                    <div className='flex items-center'>
                                        <Avatar size="sm" className='mr-2 text-xs' placeholderInitials="MG" rounded />
                                        {report.createdBy}
                                    </div>
                                </Table.Cell>

                                <Table.Cell className='p-2 md:p-4'>
                                    <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span><IconDots /></span>}>
                                        <Dropdown.Item>View</Dropdown.Item>
                                        <Dropdown.Item>Download</Dropdown.Item>
                                        <Dropdown.Item>Send report</Dropdown.Item>
                                    </Dropdown>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>

            <div className='flex justify-center mt-4'>
                <CustomPagination
                    initialPage={1}
                    totalPages={10}
                    onPageChange={handlePageChange}
                    className="my-custom-class" // Optional custom styling
                />
            </div>
        </>

    );

    return (
        <>
            {user && (
                <Layout>
                    {content}
                </Layout>
            )}
        </>
    );
};

export default Dashboard;