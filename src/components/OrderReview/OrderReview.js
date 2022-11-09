import React from 'react';
import './orderReview.css';
import useCart from '../../hooks/useCart';
import { useProducts } from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import { removeData, setData } from '../../utilities/fackdatabase';




const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [carts, setCart] = useCart(products);
    const removeProduct = (productItem) => {
        const rest = carts.filter(pd => pd.id !== productItem.id);
        setCart(rest);
        removeData(productItem.id)
    }
    return (
        <div>
            <h1 className='text-center text-6xl mt-10'>Order Review Page area start </h1>
            <p className='text-center font-bold text-lg py-4'>Oder Product length:{products.length} </p>
            <p className='text-center font-bold text-lg py-4'>Oder Product length: {carts.length}</p>
            <div className='container mx-auto'>
                <div className='order_main'>
                    <div className='orderLeft'>
                        {
                            carts.map((cart) => {
                                const { id, name, price, quantity, img } = cart;
                                return <article
                                    key={id} >
                                    <div className='orderCard'>
                                        <div className='img_area'>
                                            <img src={img} alt="photos" />
                                        </div>
                                        <div className='orderCartText' title={name}>
                                            <h3>Name: {name.length >= 20 ? name.slice(0, 20) + "..." : name}</h3>
                                            <p>Price: {price}</p>
                                            <p>Quantity: {quantity}</p>
                                        </div>
                                        <div className='btnArea'>
                                            <button onClick={() => { removeProduct(cart) }} className='text-white bg-red-400 py-2 px-14 inline-block'>Del</button>
                                        </div>
                                    </div>
                                </article>
                            })
                        }
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