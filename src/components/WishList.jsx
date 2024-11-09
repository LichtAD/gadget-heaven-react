import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getWishList } from '../utilities/addToLS';
import WishCard from './WishCard';

const WishList = () => {

    const [wishList, setWishList] = useState([]);

    const data = useLoaderData();
    // console.log(data);

    useEffect(() => {
        const wishList_LS = getWishList();
        // console.log(wishList_LS);

        const productList = data.filter(product => wishList_LS.includes(product.product_id));
        setWishList(productList);
    }, [])

    // console.log(wishList);

    return (
        <div className='mt-10 pb-10'>
            <h4 className='text-xl font-bold'>WishList</h4>
            <div className='space-y-8 pt-4'>
                {
                    wishList.map((product, idx) => <WishCard key={idx} product={product}></WishCard>)
                }
            </div>
        </div>
    );
};

export default WishList;