import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav style={{ padding: '1rem', backgroundColor: '#f5f5f5', marginBottom:'20px' }}>
            <Link className='text-black text-xl mr-5' href="/">Home</Link> 
            <Link className='text-black text-xl mr-5' href="/about"  >About</Link> 
            <Link className='text-black text-xl mr-5' href="/counter"  >Counter</Link>
            <a className='text-black text-xl mr-5' href="/products"  >Products</a>
        </nav>
    );
};

export default Navbar;

// Link doesnt reload smooth navigation, a does reload 