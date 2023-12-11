'use client';

import { useRouter } from 'next/navigation';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useSidebarContext } from '@/contexts/SidebarContext';
import { HiUser, HiMenu, HiX } from 'react-icons/hi';
import { useAuth } from '@/contexts/authContext';
import { getInitials } from '@/app/utils/Helpers';

type NavbarProps = {
    navbarType?: 'dropdown' | 'simple';
    exitLink?: string;
    titleNav?: string;
};

export default function NavbarComponent({ navbarType = 'dropdown', exitLink, titleNav }: NavbarProps) {
    const user = useAuth();
    const router = useRouter();
    const { isOpenOnSmallScreens, isPageWithSidebar, setOpenOnSmallScreens } =
        useSidebarContext();

    const renderDropdownNavbar = () => (
        <>
            <Dropdown
                arrowIcon={false}
                inline
                label={
                    <Avatar className="mr-2 avatar-user-info" size={"md"} placeholderInitials={getInitials(user.user?.first_name, user.user?.last_name)} rounded color="purple" />
                }
            >
                <Dropdown.Header>
                    <span className="block text-sm">{user.user?.first_name} {user.user?.last_name} {HiUser}</span>
                    <span className="block truncate text-sm font-medium">{user.user?.email}</span>
                </Dropdown.Header>
                {/*
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    */}
                <Dropdown.Item onClick={() => {
                    // user.logout;
                    localStorage.removeItem('authToken'); // Remove user from local storage on logout
                    router.push('/'); // Redirect to homepage
                }}>Sign out</Dropdown.Item>
            </Dropdown>
            <button
                aria-controls="sidebar"
                aria-expanded="true"
                className="cursor-pointer rounded p-2 pr-0 text-black xl:hidden"
                onClick={() => setOpenOnSmallScreens(!isOpenOnSmallScreens)}
            >
                <HiMenu />
            </button>
        </>
    );

    const renderNavbarWithDropdown = () => (
        <>
            <Navbar.Brand href="/">
                {titleNav ? <h3 className='text-lg font-medium'>{titleNav}</h3> : <img src="/images/brand/logo-font.svg" className="mr-3 h-6 sm:h-7" alt="Healthy Smiles Logo" />}
                
            </Navbar.Brand>
            <div className="flex md:order-2">
                {renderDropdownNavbar()}
            </div>
        </>
    );

    const renderSimpleNavbar = () => (
        <>
            <Navbar.Brand href="/">
                {titleNav ? <h3 className='text-lg font-medium'>{titleNav}</h3> : <img src="/images/brand/logo-font.svg" className="mr-3 h-6 sm:h-7" alt="Healthy Smiles Logo" />}
            </Navbar.Brand>
            <div className="flex md:order-2">
                <a
                    href={exitLink ? exitLink : '/dental-report'}
                    className="cursor-pointer rounded p-2 pr-0 text-black"
                >
                    <HiX />
                </a>
            </div>
        </>
    );

    return (
        <Navbar fluid border className='!px-6 lg:!px-8'>
            {navbarType === 'dropdown' ? renderNavbarWithDropdown() : renderSimpleNavbar()}
        </Navbar>
    )
}
