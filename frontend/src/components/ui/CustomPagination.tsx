'use client';

import { Pagination } from 'flowbite-react';
import { useState, useEffect } from 'react';

interface PaginationProps {
    initialPage?: number; // Optional initial page
    totalPages: number; // Required total number of pages
    onPageChange: (page: number) => void; // Callback function when the page changes
    className?: string; // Optional class name for styling
}

function CustomPagination({
    initialPage = 1,
    totalPages,
    onPageChange,
    className
}: PaginationProps) {
    const [currentPage, setCurrentPage] = useState(initialPage);

    useEffect(() => {
        setCurrentPage(initialPage); // Set the initial page when the component mounts or when initialPage changes
    }, [initialPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        onPageChange(page); // Call the passed in onPageChange function
    };

    return (
        <div className={`flex overflow-x-auto ${className || 'sm:justify-center'}`}>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                showIcons
                nextLabel=''
                previousLabel=''
            />
        </div>
    );
}

export default CustomPagination;
