"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <nav style={{ padding: '1rem', backgroundColor: '#f5f5f5', marginBottom:'20px' }}>
            <Link className={pathname=="/" ? "text-black text-xl mr-5":"   text-gray-400 text-xl mr-5"} href="/">Home</Link> 
            <Link className={pathname=="/about" ? "text-black text-xl mr-5":"   text-gray-400 text-xl mr-5"} href="/about"  >About</Link> 
            <Link className={pathname=="/counter" ? "text-black text-xl mr-5":"   text-gray-400 text-xl mr-5"} href="/counter"  >Counter</Link>
            <a className={pathname=="/products" ? "text-black text-xl mr-5":"   text-gray-400 text-xl mr-5"} href="/products"  >Products</a>
        </nav>
    );
};

export default Navbar;

// Link doesn't reload smooth navigation, a does reload 