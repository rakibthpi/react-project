import { useEffect, useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { getData, setData } from '../../utilities/fackdatabase';
import Cart from '../Cart/Cart';
import Shop from './Shop';

const Shops = () => {
    // cart item area start 


    const [products, setProducts] = useProducts();

    const [carts, setCarts] = useState([]);

    useEffect(() => {
        const shopingData = getData();
        const saveCart = [];
        for (const id in shopingData) {
            const addedProduct = products.find(product => product.id === id);
            console.log(addedProduct);
            if (addedProduct) {
                const quantity = shopingData[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCarts(saveCart);
    }, [products])

    const addToCart = (productResive) => {
        console.log(productResive);
        const { id } = productResive;
        let newItem = [];
        const axisProduct = carts.find(product => product.id === productResive.id);
        if (!axisProduct) {
            productResive.quantity = 1;
            newItem = [...carts, productResive];
        }
        else {
            axisProduct.quantity = axisProduct.quantity + 1;
            const rest = carts.filter(product => product.id !== productResive.id)
            newItem = [...rest, axisProduct];
        }

        setCarts(newItem);
        setData(id);

    }
    return (
        <div className='shop_main_area'>
            <div className='shop_card py-7 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <Shop
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Shop>)
                }
            </div>
            <div className='mainCard bg-yellow-600 px-5 py-8 text-white'>
                <Cart carts={carts}></Cart>
            </div>
        </div>
    );
};

export default Shops;