import Product from '@/components/products/Product';
import React from 'react';

const allProducts = async() => {

    const res = await fetch("http://localhost:5100/posts",
        {
            cache:"no-store"
        }
    );
    const items = await res.json();
    console.log(items);


    return (
        <div>
            <p className='mb-5'>All Products</p>
            {items.map(item => (
                <Product product={item} key={item.id} ></Product>
            ))}
        </div>
    );
};

export default allProducts;