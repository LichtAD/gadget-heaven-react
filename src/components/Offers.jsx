import React from 'react';
import { Helmet } from 'react-helmet';

const Offers = () => {
    return (
        <div className=''>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Offers | Gadgets Heaven</title>
                <link rel="icon" type="image/png" href="/assets/favicon.png" />
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className='bg-purple-600 text-white text-center flex flex-col justify-center items-center py-10 space-y-4'>
                <h4 className='text-3xl font-semibold'>Offers</h4>
                <p className='text-sm lg:w-[50%]'>Get the best deals on the latest gadgets and accessories.  Don't miss out on this amazing opportunity to upgrade your tech game without breaking the bank!</p>
            </div>

            <div className='px-40 pt-10'>
                {/* <h1 className='text-2xl font-bold mb-4'>Offers</h1> */}
                {/* <h2 className='text-xl font-bold text-purple-600 pb-8'>No Data found</h2> */}
                <div className='pb-20 pt-10'>

                    <div className="bg-white rounded-2xl max-w-3xl mx-auto">
                        <div className="flex gap-4 p-4">

                            <div className="bg-base-200 rounded-2xl w-full max-w-sm">
                                <form className="p-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Claim the discount</button>

                                    </div>
                                </form>
                            </div>

                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold">Grab the offer!</h1>
                                <p className="py-6 font-medium">
                                    Subcribe to our newsletter and get 10% off your first purchase.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Offers;