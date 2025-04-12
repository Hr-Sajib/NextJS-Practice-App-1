
import Product from '@/components/products/Product';
import Link from 'next/link';
import React from 'react';

const ProductsPage = async () => {
    const res = await fetch("http://localhost:5100/posts",
        {
            // next: { revalidate:5} ,
            // cache:"force-cache"  //prepares html in built time
        }
         
    );
    const items = await res.json();
    console.log(items);

    return (
        <div className='mx-10'>
            <h1 className="text-xl text-blue-300 mb-4">Products Page</h1>
            {items.slice(0,3).map(item => (
                <Product product={item} key={item.id} ></Product>
            ))}

            <div className='flex justify-center'>
                <Link href="allProducts"><button className='bg-blue-800 p-2 mt-5'>See All Products</button></Link>
            </div>
        </div>
    );
};

export default ProductsPage;
