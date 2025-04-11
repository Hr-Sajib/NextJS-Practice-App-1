import React from 'react';

const DynamicProductPage = async({params, searchParams}) => {

    const abc = await params.productId;
    console.log("id: ", abc);
    console.log("search: ",await searchParams)
    return (
        <div>
            DynamicProductPage
        </div>
    );
};

export default DynamicProductPage;