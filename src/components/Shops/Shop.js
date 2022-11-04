import React from 'react';
import defoltimg from '../../images/giphy.gif';

const Shop = (props) => {
    const { product, addToCart } = props;
    const { img, name, price, seller, ratings } = product;

    return (
        <div className='bg-blue-600'>
            <div className='single_card  text-white rounded-md py-7 px-4 pb-0'>
                <img className='w-full ' src={img ? img : defoltimg} alt="photos" />
                <h1 className='text-base'>{name}</h1>
                <p className='text-sm'>Price: ${price}</p>
                <p className='mt-3 text-sm'>Manufacturer : {seller}</p>
                <p className='text-xs'>Rating :   {ratings} start</p>
            </div>
            <button onClick={() => addToCart(product)} className='bg-orange-600 w-full text-white inline-block py-1 mt-2'>Add to Cart</button>
        </div>
    );
};

export default Shop;