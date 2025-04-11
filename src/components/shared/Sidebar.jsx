import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <aside style={{ width: '200px', padding: '1rem', backgroundColor: '#f0f0f0', height: '100vh' }}>
            <ul className="flex flex-col space-y-4">
                <li>
                    <Link className="text-black text-lg hover:underline" href="/dashboard">Home</Link>
                </li>
                <li>
                    <Link className="text-black text-lg hover:underline" href="/dashboard/profile">Profile</Link>
                </li>
                <li>
                    <Link className="text-black text-lg hover:underline" href="/dashboard/settings">Settings</Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
