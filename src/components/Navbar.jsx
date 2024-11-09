import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { getCartList, getWishList } from '../utilities/addToLS';
import { cartContext, wishContext } from './Root';

const Navbar = () => {

    // ! changed here
    const { cartLength, setCartLength } = useContext(cartContext)
    const [cartNumber, setCartNumber] = useState(0);
    // console.log(cartLength);



    const {wishCount, setWishCount} = useContext(wishContext)
    const [wishNumber, setWishNumber] = useState(0);




    // ! adding cartlist length in navbar
    // const cartList = getCartList();
    // const cartListLength = cartList.length;

    useEffect(() => {
        const cartList = getCartList();
        setCartNumber(cartList.length)
    }, [cartLength])



    // ! adding wishlist length in navbar
    // const wishList = getWishList();
    // const wishListLength = wishList.length;

    useEffect(() => {
        const wishList = getWishList();
        setWishNumber(wishList.length)
    }, [wishCount])





    const { pathname } = useLocation();
    // console.log(pathname);

    const links = <>
        <div className='flex gap-4'>
            <li><NavLink className={({ isActive }) => (isActive ? 'underline p-2 text-white rounded-lg' : undefined)} to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'underline decoration-purple-400 p-2 bg-purple-400 text-transparent bg-clip-text rounded-lg' : undefined)} to={'/statistics'}>Statistics</NavLink></li>

            {/* <li><NavLink className={({ isActive }) => (isActive ? 'underline decoration-purple-400 p-2 bg-purple-400 text-transparent bg-clip-text rounded-lg' : undefined)} to={'/dashboard/cart'}>Dashboard</NavLink></li> */}

            <li><NavLink className={`${pathname === '/dashboard/cart' || pathname === '/dashboard/wishlist' ? 'underline decoration-purple-400 p-2 bg-purple-400 text-transparent bg-clip-text rounded-lg' : undefined}`} to={'/dashboard/cart'}>Dashboard</NavLink></li>

            <li><NavLink className={({ isActive }) => (isActive ? 'underline decoration-purple-400 p-2 bg-purple-400 text-transparent bg-clip-text rounded-lg' : undefined)} to={'/offers'}>Offers</NavLink></li>
        </div>
    </>


    return (
        <div>
            <div className="navbar bg-white px-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <NavLink to={'/'} className="btn btn-ghost text-xl">Gadget Heaven</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <div>
                        <div className='lg:relative bg-white border-2 p-2 rounded-full'><CiShoppingCart /></div>
                        <div className='lg:absolute top-5 right-48 z-50 text-[12px]'>{cartNumber}</div>
                    </div>

                    <div>
                        <div className='bg-white border-2 p-2 rounded-full'><CiHeart /></div>
                        <div className='lg:absolute top-5 right-36 z-50 text-[12px]'>{wishNumber}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;