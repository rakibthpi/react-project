import React from 'react';
import useCart from '../../hooks/useCart';
import { useProducts } from '../../hooks/useProducts';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    return (
        <div>
            <h1 className='text-center text-6xl mt-10'>Order Review Page area start </h1>
            <p className='text-center font-bold text-lg py-4'>Oder Product length:{cart.length} </p>
            <p className='text-center font-bold text-lg py-4'>Oder Product length: {setCart.length}</p>
        </div>
    );
};

export default OrderReview;