import React from 'react';
import { removeData } from '../../utilities/fackdatabase';

const Cart = ({ carts }) => {

    let totalPrice = 0;
    let shipping = 0;
    let tax = 0;
    let grandTotal = 0;
    let quantity = 0;
    for (const cart of carts) {
        quantity = quantity + cart.quantity;
        totalPrice = totalPrice + cart.price * cart.quantity;
        shipping = shipping + cart.shipping
        tax = totalPrice * 0.1;
    }
    grandTotal = totalPrice + shipping + tax;

    const dataClear = () => {
        removeData();
    }
    return (
        <div className='sticky top-0'>
            <div className=''>
                <h1>Order Summary</h1>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p>Grand Total: ${grandTotal.toFixed(2)}</p>
            </div>
            <button onClick={() => { dataClear() }} className='bg-cyan-600 w-full text-white inline-block py-2 mt-2'>Clear Cart</button>
            <button className='bg-red-600 w-full text-white inline-block py-2 mt-2'>Review Order</button>
        </div>
    );
};

export default Cart;