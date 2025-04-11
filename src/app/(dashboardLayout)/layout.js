import Sidebar from '@/components/shared/Sidebar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='flex gap-10'>
            <Sidebar/>
            {children}
        </div>
    );
};

export default DashboardLayout;