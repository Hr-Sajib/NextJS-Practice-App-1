import React from 'react';

const Product = ({product}) => {
    return (
        <div className='bg-gray-700 p-5 mb-2'>
            <p className='text-gray-300'>{`ID: ${product.id}`}</p>
            <p key={product.id} className="text-white">{product.title}</p>
        </div>
    );
};

export default Product;