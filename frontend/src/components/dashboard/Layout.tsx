// Layout.tsx
'use client';

import { ReactNode } from 'react';
import NavbarWithDropdown from '@/components/dashboard/NavbarWithDropdown';
import SidebarList from '@/components/dashboard/SidebarList';
import { SidebarProvider } from '@/contexts/SidebarContext';

type LayoutProps = {
    children: ReactNode;
    showSidebar?: boolean;
    navbarType?: 'dropdown' | 'simple';
    exitLink?: string;
    titleNav?: string;
    bottomNav?: boolean;
};

const Layout: React.FC<LayoutProps> = ({ children, showSidebar = true, navbarType = 'dropdown', exitLink, titleNav, bottomNav = false }) => {
    return (
        <SidebarProvider>
            <div className='flex h-screen relative flex-col'>
                <NavbarWithDropdown navbarType={navbarType} exitLink={exitLink} titleNav={titleNav} />
                <div className="hide-scrollbar h-full flex overflow-y-scroll">
                    {showSidebar && <SidebarList />}
                    {/* Main content */}
                    <main className={`flex-1 ${bottomNav ? 'pb-16' : ''}`}>
                        {children}
                    </main>
                    {/* End Main content */}
                </div>
            </div>
        </SidebarProvider>
    );
};

export default Layout;
