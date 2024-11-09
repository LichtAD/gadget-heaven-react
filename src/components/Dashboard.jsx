import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Dashboard = () => {

    const location = useLocation();
    const { pathname } = location;
    // console.log(pathname);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{
                    pathname === '/dashboard/cart' ? 'Cart - Dashboard | Gadgets Heaven' : pathname === '/dashboard/wishlist' ? 'Wishlist - Dashboard | Gadgets Heaven' : 'Dashboard | Gadgets Heaven'
                }</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div>
                <div className='bg-purple-600 text-white text-center flex flex-col justify-center items-center py-10 space-y-4'>
                    <h4 className='text-3xl font-semibold'>Dashboard</h4>
                    <p className='text-sm lg:w-[50%]'>Manage orders and saved items. Explore your purchase history and keep track of your orders. Save your favorite items and be the first to know when they go on sale.</p>

                    <div className='flex gap-4'>
                        {/* <NavLink className={({ isActive }) => (isActive ? 'btn bg-white text-purple-600 rounded-full py-3 w-32' : 'btn py-3 rounded-full w-32 btn-outline border-white text-white hover:bg-purple-300 hover:border-none hover:text-black')} to={'/dashboard/cart'}>Cart</NavLink> */}

                        <NavLink className={`${pathname === '/dashboard/cart' ? 'btn bg-white text-purple-600 rounded-full py-3 w-32' : 'btn py-3 rounded-full w-32 btn-outline border-white text-white hover:bg-purple-300 hover:border-none hover:text-black'}`} to={'cart'}>Cart</NavLink>

                        <NavLink className={`${pathname === '/dashboard/wishlist' ? 'btn bg-white text-purple-600 rounded-full py-3 w-32' : 'btn py-3 rounded-full w-32 btn-outline border-white text-white hover:bg-purple-300 hover:border-none hover:text-black'}`} to={'wishlist'}>Wishlist</NavLink>
                    </div>

                </div>

                <div className='px-24'>
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;