import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { getCartList } from '../utilities/addToLS';
import CartCard from './CartCard';
import { BsSortNumericDownAlt } from "react-icons/bs";

const Cart = () => {

    const [cartList, setCartList] = useState([]);
    // console.log('cartList', cartList.length);

    const data = useLoaderData();
    // console.log(data);

    useEffect(() => {
        const cartList_LS = getCartList();
        // console.log(cartList_LS);

        const productList = data.filter(product => cartList_LS.includes(product.product_id));
        setCartList(productList);
    }, [])

    // ! showing total cost
    let total_price = 0;
    const cartList_price = cartList.map(product => total_price += product.price);
    // console.log('cartList_price', cartList_price);
    // console.log('total_price', total_price);

    // ! sorting by price
    // const [sort, setSort] = useState('');
    const handleSort = (sortType) => {
        // setSort(sortType);

        if (sortType === 'Price_ASC') {
            const sortedPrice = [...cartList].sort((a, b) => b.price - a.price);
            setCartList(sortedPrice);
        }
    }

    // ! clear cart list in LS
    const handleClearCartList = () => {
        localStorage.removeItem('cart-list');
    }

    // ! disable purchase button
    const isDisabled = cartList.length === 0 ? true : false;

    return (
        <div className='mt-10 pb-10'>
            <div className='flex justify-between items-center'>
                <h4 className='text-xl font-bold'>Cart</h4>
                <div className='flex gap-4 items-center'>
                    <h1 className='text-xl font-semibold'>Total Cost: {total_price} $</h1>

                    <button onClick={() => handleSort('Price_ASC')} className='btn border-purple-600 text-purple-600 rounded-full'>Sort by Price <BsSortNumericDownAlt size={20} /></button>

                    <div>
                        <NavLink disabled={isDisabled} onClick={() => {
                            handleClearCartList()
                            document.getElementById('my_modal_1').showModal()
                        }} className='btn bg-purple-600 text-white rounded-full'>Purchase</NavLink>

                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}

                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className="flex flex-col gap-4 justify-center items-center">
                                    <div className='text-center'><img src='/assets/Group.png' alt="" /></div>
                                    <h3 className="font-bold text-2xl text-center border-b-2 pb-4">Payment Successfully</h3>
                                </div>
                                <p className="py-2 text-center">Thanks for Purchasing</p>
                                <div>
                                    <h1 className="font-semibold text-lg text-center">Total: {total_price}$</h1>
                                </div>
                                <div className="text-center mt-4">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <NavLink to={'/'} className="btn w-60">Close</NavLink>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                    </div>
                </div>
            </div>
            <div className='space-y-8 pt-4'>
                {
                    cartList.map((product, idx) => <CartCard key={idx} product={product}></CartCard>)
                }
            </div>
        </div>
    );
};

export default Cart;