const setData = (id) => {
    let shopingCart = getData();

    const quentity = shopingCart[id];
    if (quentity) {
        const newQuentity = quentity + 1;
        shopingCart[id] = newQuentity;
    }
    else {
        shopingCart[id] = 1;
    }
    localStorage.setItem('shoping-cart', JSON.stringify(shopingCart));
}

const getData = () => {
    let shopingCart = {};
    const storeCart = localStorage.getItem('shoping-cart');
    if (storeCart) {
        shopingCart = JSON.parse(storeCart);
    }

    return shopingCart;
}

const removeData = () => {
    localStorage.clear('shoping-cart');
}

export { setData, getData, removeData };