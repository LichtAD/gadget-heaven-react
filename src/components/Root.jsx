import React, { createContext, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import HomeNavBanner from './HomeNavBanner';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ! changed here
export const cartContext = createContext(null)

export const wishContext = createContext(null)

const Root = () => {




    // ! changed here
    const [cartLength, setCartLength] = useState(0);      // cartCount

    const [wishCount, setWishCount] = useState(0);




    const { pathname } = useLocation();
    // console.log(pathname);

    return (
        <div>
            {/* changed here */}
            <cartContext.Provider value={{ cartLength, setCartLength }}>
                <wishContext.Provider value={{ wishCount, setWishCount }}>

                    <div>
                        {/* <HomeNavBanner></HomeNavBanner> */}
                        {/* <Navbar></Navbar> */}

                        {
                            pathname === '/' ?
                                <div className='pt-4 bg-base-200 px-24'><HomeNavBanner></HomeNavBanner></div> :
                                <div className='pt-4 px-24'><Navbar></Navbar></div>
                        }
                        <div>
                            {
                                pathname === '/' ?
                                    <div className='bg-base-200 px-24'><Outlet></Outlet></div> :
                                    <div className='bg-base-200'><Outlet></Outlet></div>
                            }
                            {/* <Outlet></Outlet> */}
                        </div>
                    </div>

                    <Footer></Footer>

                    {/* <ToastContainer /> */}
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        transition={Bounce} // Corrected syntax
                    />

                </wishContext.Provider>
            </cartContext.Provider>

        </div>
    );
};

export default Root;