import { toast } from "react-toastify";

const getCartList = () => {
    const cartList = localStorage.getItem('cart-list');

    if (cartList) {
        return JSON.parse(cartList);
    }
    else {
        return [];
    }
}

const addToCartList = (id) => {
    const cartList = getCartList();
    if (cartList.includes(id)) {
        // console.log('Already added');
        toast.error('Already added to Cart');
    }
    else {
        cartList.push(id);
        localStorage.setItem('cart-list', JSON.stringify(cartList));
        toast.success('Product successfully added to Cart');
    }
}


const getWishList = () => {
    const wishList = localStorage.getItem('wish-list');

    if (wishList) {
        return JSON.parse(wishList);
    }
    else {
        return [];
    }
}

const addToWishList = (id) => {
    const wishList = getWishList();
    if (wishList.includes(id)) {
        toast.error('Already added to Wishlist');
    }
    else {
        wishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(wishList));
        toast.success('Product successfully added to Wishlist');
    }
}

export { getCartList, addToCartList, getWishList, addToWishList }