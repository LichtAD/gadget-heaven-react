import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa6";
import { addToCartList, addToWishList, getWishList } from '../utilities/addToLS';
import { cartContext, wishContext } from './Root';
import ReactStars from "react-rating-stars-component";

const ProductDetails = () => {

    const data = useLoaderData();
    // console.log(data);

    // const param = useParams();
    const { productId } = useParams();
    // console.log(productId);

    const product = data.find(product => product.product_id === productId);
    // console.log(product);

    const { product_id, product_title, product_image, price, availability, description, Specification, rating } = product;






    const { cartLength, setCartLength } = useContext(cartContext)
    // console.log('cartLength', cartLength);

    const { wishCount, setWishCount } = useContext(wishContext)
    // console.log('wishCount', wishCount);



    const handleAddToCart = () => {
        // console.log('added to cart');
        addToCartList(product_id);
        setCartLength((counter) => counter + 1)
    }

    const handleAddToWishList = () => {
        // console.log('added to wishlist');
        addToWishList(product_id);
        setWishCount((prev) => prev + 1)
    }







    // ! getting wishlist from local storage and checking if product is already in wishlist - then disable the wishlist button
    const [isDisabled, setDisabled] = useState(false);

    useEffect(() => {
        const product_in_wishlist = getWishList();
        product_in_wishlist.includes(product_id) ? setDisabled(true) : setDisabled(false);
    }, [product_id]);


    // rating component
    const ratingStartComponent = {
        size: 30,
        value: rating,
        isHalf: true
    };


    return (
        <div className='bg-base-200 pb-80 lg:relative'>
            <div className='text-center bg-purple-600 text-white pt-10 pb-60 flex justify-center items-center flex-col space-y-2'>
                {/* <h3>Product Details: {product.product_id} - {product.product_title} - {product.price}</h3> */}
                <h1 className='text-2xl font-semibold'>Product Details</h1>
                <p className='text-sm lg:w-[55%]'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>


            <div className='w-1/2 mx-auto lg:absolute top-40 left-80'>
                {/* card */}
                <div className="bg-white rounded-2xl p-4 w-[900px]">
                    <div className="flex gap-4 flex-col lg:flex-row">
                        <img
                            src={product_image}
                            className="w-[400px] rounded-lg bg-white" />
                        <div className='space-y-2'>
                            <h1 className="text-2xl font-bold">{product_title}</h1>
                            <p className="font-medium">Price: $ {price}</p>

                            <div>{
                                availability ? <div className="badge badge-success badge-outline bg-base-200 p-3">In Stock</div> : <div className="badge badge-error badge-outline bg-base-200 p-3">Out of Stock</div>
                            }</div>

                            <h3 className='text-sm pt-2'>{description}</h3>

                            <div>
                                <h1 className='mb-2 font-bold'>Specifications:</h1>
                                <ul className="list-decimal pl-8">
                                    {
                                        Specification.map((spec, index) => <li key={index} className='text-sm mb-1 text-gray-600'>{spec}</li>)
                                    }
                                </ul>
                            </div>

                            <div>
                                <div className='flex items-center gap-2'>
                                    <h1 className='font-bold'>Rating</h1>
                                    <div><FaRegStar /></div>
                                </div>
                                <div className='flex items-center gap-4'>

                                    {/* daisy ui rating start */}
                                    {/* <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div> */}
                                    {/* daisy ui rating end */}

                                    {/* react rating component start */}
                                    <div>
                                        <ReactStars {...ratingStartComponent} />
                                    </div>
                                    {/* react rating component end */}

                                    <button className='btn rounded-full'>{rating}</button>
                                </div>

                            </div>

                            <div>
                                <div className='flex items-center gap-4'>
                                    <button onClick={() => {
                                        handleAddToCart(product_id)
                                    }} className="btn bg-purple-600 text-white rounded-full">Add to Cart <CiShoppingCart size={20} className='font-bold' /></button>

                                    <button disabled={isDisabled} onClick={() => {
                                        handleAddToWishList(product_id)
                                        setDisabled(true)
                                    }} className='btn bg-white border-2 rounded-full'><CiHeart size={20} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;