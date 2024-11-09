import React from 'react';
import { RxCrossCircled } from "react-icons/rx";

const CartCard = ({ product }) => {

    const { product_id, product_title, product_image, price, availability, description, Specification, rating } = product;

    const style = { 
        color: "red",
    }

    return (
        <div>
            <div className='bg-white rounded-2xl p-4 flex justify-between'>
                <div className='flex gap-4 items-center'>
                    <div>
                        <img className='rounded-2xl' src={product_image} alt="" />
                    </div>
                    <div className='space-y-8'>
                        <h1 className='font-bold text-2xl'>{product_title}</h1>
                        <p className='text-sm text-gray-600'><span className='font-bold text-black'>Description:</span> {description}</p>
                        <p className='font-bold'>Price: {price}$</p>
                        {/* <button className="btn bg-purple-600 text-white rounded-full">Add to Cart</button> */}
                    </div>
                </div>

                <div className='cursor-pointer'><RxCrossCircled size={30} style={style} /></div>

            </div>
        </div>
    );
};

export default CartCard;