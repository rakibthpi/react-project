const setLocaldb = (id) => {
    let shopingCard = {};
    const storeCart = localStorage.getItem("Tom");
    if (storeCart) {
        shopingCard = JSON.parse(storeCart);
    }
    const quentity = shopingCard[id];

    if (quentity) {
        const newQuantity = quentity + 1;
        shopingCard[id] = newQuantity;
    }
    else {
        shopingCard[id] = 1;
    }
    localStorage.setItem("Tom", JSON.stringify(shopingCard));

}

const local = (id) => {

    let shopingCard = getStoreCart();

    let quentity = shopingCard[id];
    if (quentity) {
        const newQuentity = quentity + 1;
        shopingCard[id] = newQuentity;
    }
    else {
        shopingCard[id] = 1;
    }
    localStorage.setItem('shoping-cart', JSON.stringify(shopingCard));

}
const getStoreCart = () => {
    let shopingCard;
    const quentityItem = localStorage.getItem('shoping-cart');
    if (quentityItem) {
        shopingCard = JSON.parse(quentityItem);
    }
    else {
        shopingCard = {};
    }
    return shopingCard;
}

export { local, getStoreCart };
export { setLocaldb };




// var	rakibtest = {
//     first_name : "Marty",
//       last_name : "Mcfly",
//     born : 1968,
//     died : 1933,
//     lovers: ["Jennifer Parker","Baines McFly"]
// };
// const quantity = rakibtest[id];
// console.log(quantity);

// rakibtest[id] = 1;
// if(quantity != 1){
//     const newQuantity =
// }

// if(item != null){
//     const newItem = parseInt(item) + 1;
//     localStorage.setItem(id , newItem);
// }
// else{
//     localStorage.setItem(id , 1);
// }

