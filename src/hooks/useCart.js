import { useEffect, useState } from "react";
import { getData } from "../utilities/fackdatabase";

const useCart = (products) => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        let getDataItem = getData();
        let saveData = [];
        for (const id in getDataItem) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quentity = getDataItem[id];
                addedProduct.quantity = quentity;
                saveData.push(addedProduct);
            }
        }
        setCarts(saveData);
    }, [products])

    return [carts, setCarts];

}

export default useCart;











// import { useEffect } from "react"
// import { useState } from "react"
// import { getData } from "../utilities/fackdatabase"

// const useCart = (products) => {
//     console.log(products);
//     const [carts, setCarts] = useState([]);

//     useEffect(() => {
//         let getDataItem = getData();
//         let saveData = [];
//         for (const id in getDataItem) {
//             const addedProduct = products.find(product => product.id === id);
//             if (addedProduct) {
//                 const quantity = getData[id];
//                 addedProduct.quantity = quantity;
//                 saveData.push(addedProduct);
//             }
//         }
//         setCarts(saveData);
//     }, [products]);

//     return [carts, setCarts];

// }

// export default useCart;