import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import SingleGadget from './SingleGadget';

const MainContent = () => {

    const [gadgets, setGadgets] = useState([]);

    const data = useLoaderData();
    // console.log(data);
    // const slicedData = data.slice(0, 6);
    
    useEffect(() => {
        setGadgets(data.slice(2, 11));
    }, [])

    const handleCategory = (category) => {
        // console.log(category);

        if (category === 'all') {
            setGadgets(data);
        }
        else if (category === 'laptops') {
            setGadgets(data.filter(gadget => gadget.category === 'Laptops'));
        }
        else if (category === 'phones') {
            setGadgets(data.filter(gadget => gadget.category === 'Phones'));
        }
        else if (category === 'accessories') {
            setGadgets(data.filter(gadget => gadget.category === 'Accessories'));
        }
        else if (category === 'smartWatches') {
            setGadgets(data.filter(gadget => gadget.category === 'Smart Watches'));
        }
        else if (category === 'others') {
            setGadgets(data.filter(gadget => gadget.category === 'Others'));
            // console.log(gadgets);
        }
    }
    // console.log(gadgets);

    return (
        <div className='pt-80 pb-20 rounded-2xl p-10'>
            <h4 className='text-4xl text-center text-purple-600 font-bold mb-10'>Explore Cutting-Edge Gadgets</h4>
            <div className='flex gap-10'>
                <div className='bg-white rounded-2xl p-10 flex flex-col gap-4 self-start'>
                    <button onClick={() => handleCategory('all')} className='btn bg-base-200 rounded-full flex flex-col gap-4 hover:bg-purple-400'>All Product</button>
                    <button onClick={() => handleCategory('laptops')} className='btn bg-base-200 rounded-full flex flex-col gap-4 hover:bg-purple-400'>Laptops</button>
                    <button onClick={() => handleCategory('phones')} className='btn bg-base-200 rounded-full flex flex-col gap-4 hover:bg-purple-400'>Phones</button>
                    <button onClick={() => handleCategory('accessories')} className='btn bg-base-200 rounded-full flex flex-col gap-4 hover:bg-purple-400'>Accessories</button>
                    <button onClick={() => handleCategory('smartWatches')} className='btn bg-base-200 rounded-full flex flex-col gap-4 hover:bg-purple-400'>Smart Watches</button>
                    <button onClick={() => handleCategory('others')} className='btn bg-base-200 rounded-full flex flex-col gap-4 hover:bg-purple-400'>Others</button>
                </div>

                <div className='grid grid-cols-3 gap-4'>
                    {
                        gadgets.length === 0 ? <h1 className='text-4xl font-bold text-purple-600'>No gadget found</h1> :
                        gadgets.map((gadget, idx) => <SingleGadget key={idx} gadget={gadget}></SingleGadget>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MainContent;