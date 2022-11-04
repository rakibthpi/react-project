const deleteData = (id) => {
    let removeItem = localStorage.getItem('shoping-cart');
    if (removeItem) {
        const removeId = JSON.parse(removeItem);
        if (id in removeId) {
            delete removeId[id];
            localStorage.setItem('shoping-cart', JSON.stringify(removeId));
        }
    }
}

export { deleteData };