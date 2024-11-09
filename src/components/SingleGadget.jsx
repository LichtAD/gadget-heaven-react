import React from 'react';
import { Link } from 'react-router-dom';

const SingleGadget = ({ gadget }) => {

    const { product_id, product_title, product_image, price} = gadget;

    return (
        <div>
            {
                <div className="card card-compact bg-base-100">
                    <figure className='bg-white m-4 rounded-2xl'>
                        <img
                            src={product_image}
                            alt={product_title} />
                    </figure>
                    <div className="px-4 pb-2">
                        <h2 className="card-title">{product_title}</h2>
                        <p>Price: {price}$</p>

                        <Link to={`/gadgets/${product_id}`} className="card-actions my-2">
                            <button className="btn btn-outline rounded-full border-purple-600 text-purple-600 hover:border-none hover:bg-purple-400 hover:text-white">View Details</button>
                        </Link>

                    </div>
                </div>
            }
        </div>
    );
};

export default SingleGadget;