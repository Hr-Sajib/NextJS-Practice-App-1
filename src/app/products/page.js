import React from 'react';

const ProductsPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/",
        {
            cache:"force-cache"  //prepares html in built time
        }
    );
    const items = await res.json();
    console.log(items);

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Products Page</h1>
            {items.map(i => (
                <p key={i.id} className="text-white">{i.title}</p>
            ))}
        </div>
    );
};

export default ProductsPage;
