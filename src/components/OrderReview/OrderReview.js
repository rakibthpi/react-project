import React from 'react';
import './orderReview.css';
import useCart from '../../hooks/useCart';
import { useProducts } from '../../hooks/useProducts';
import Cart from '../Cart/Cart';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [carts, setCart] = useCart(products);
    console.log(carts);

    return (
        <div>
            <h1 className='text-center text-6xl mt-10'>Order Review Page area start </h1>
            <p className='text-center font-bold text-lg py-4'>Oder Product length:{products.length} </p>
            <p className='text-center font-bold text-lg py-4'>Oder Product length: {carts.length}</p>
            <div className='container mx-auto'>
                <div className='order_main'>
                    <div className='orderLeft'>
                        <h1>Left site area start </h1>
                    </div>
                    <div className='orderRight'>
                        <div className='mainCard bg-yellow-600 px-5 py-8 text-white'>
                            <Cart carts={carts}></Cart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;