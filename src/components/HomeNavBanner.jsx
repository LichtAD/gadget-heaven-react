import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { getCartList, getWishList } from '../utilities/addToLS';

const HomeNavBanner = () => {

    // console.log(cartListLength);

    const links = <>
        <div className='flex gap-4'>
            <li><NavLink className={({ isActive }) => (isActive ? 'underline p-2 text-white rounded-lg' : undefined)} to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'underline decoration-purple-400 p-2 bg-purple-400 text-transparent bg-clip-text rounded-lg' : 'text-white')} to={'/statistics'}>Statistics</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'underline decoration-purple-400 p-2 bg-purple-400 text-transparent bg-clip-text rounded-lg' : 'text-white')} to={'/dashboard/cart'}>Dashboard</NavLink></li>

            <li><NavLink className={({ isActive }) => (isActive ? 'underline decoration-purple-400 p-2 bg-purple-400 text-transparent bg-clip-text rounded-lg' : 'text-white')} to={'/offers'}>Offers</NavLink></li>
        </div>
    </>

    // ! adding cartlist length in navbar
    const cartList = getCartList();
    const cartListLength = cartList.length;

    // const [cartListLength, setcartListLength] = useState();
    // useEffect(() => {
    //     setcartListLength(cartList.length);
    // }, [])

    // ! adding wishlist length in navbar
    const wishList = getWishList();
    const wishListLength = wishList.length;

    return (
        <div>
            <div>

                {/* navbar start */}
                <div>
                    <div className="navbar bg-purple-600 rounded-t-2xl px-12">
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
                            <NavLink to={'/'} className="btn btn-ghost text-xl text-white">Gadget Heaven</NavLink>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu-horizontal px-1">
                                {links}
                            </ul>
                        </div>

                        <div className="navbar-end gap-4">
                            <div>
                                <div className='lg:relative bg-white border-2 p-2 rounded-full'><CiShoppingCart /></div>
                                <div className='lg:absolute top-5 right-48 z-50 text-[12px] text-white'>{cartListLength}</div>
                            </div>

                            <div>
                                <div className='bg-white border-2 p-2 rounded-full'><CiHeart /></div>
                                <div className='lg:absolute top-5 right-36 z-50 text-[12px] text-white'>{wishListLength}</div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* navbar end */}



                {/* banner start */}
                <div className='pb-60 bg-purple-600 rounded-b-2xl text-white text-center space-y-4 pt-8 flex justify-center items-center flex-col'>
                    <h1 className='text-4xl font-bold w-1/2'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className='w-1/2'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <Link to={'/dashboard/cart'} className='btn rounded-full text-purple-600 font-bold'>Shop Now</Link>
                </div>
            </div>


            {/* Banner img */}
            <div className='lg:relative'>
                <img className='border-2 border-base-200 backdrop-blur-3xl p-2 rounded-3xl lg:absolute h-[450px] w-[700px] -top-52 right-72' src="/assets/banner.jpg" alt="" />
            </div>


        </div>
    );
};

export default HomeNavBanner;