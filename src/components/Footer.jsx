import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer-center text-black p-8">
                <aside className='mb-4'>
                    <h1 className="font-bold text-xl mb-2">Gadget Heaven</h1>
                    <small>Leading the way in cutting-edge technology and innovation.</small>
                </aside>

                <div className='grid grid-cols-3 gap-20 border-t-2 pt-4 items-start'>
                    <nav>
                        <h6 className="text-lg font-bold mb-2">Services</h6>
                        <div className='flex flex-col gap-2 space-y-2'>
                            <a className="link link-hover">Product Support</a>
                            <a className="link link-hover">Order Tracking</a>
                            <a className="link link-hover">Shipping & Delivery</a>
                            <a className="link link-hover">Returns</a>
                        </div>
                    </nav>
                    <nav>
                        <h6 className="text-lg font-bold mb-2">Company</h6>
                        <div className='flex flex-col gap-2 space-y-2'>
                            <a className="link link-hover">About Us</a>
                            <a className="link link-hover">Careers</a>
                            <a className="link link-hover">Contact</a>
                        </div>
                    </nav>
                    <nav>
                        <h6 className="text-lg font-bold mb-2">Legal</h6>
                        <div className='flex flex-col gap-2 space-y-2'>
                            <a className="link link-hover">Terms of Service</a>
                            <a className="link link-hover">Privacy Policy</a>
                            <a className="link link-hover">Cookie Policy</a>
                        </div>
                    </nav>
                </div>

            </footer >
        </div >
    );
};

export default Footer;