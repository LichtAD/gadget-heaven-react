import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter
} from "recharts";

const Statistics = () => {

    const data = useLoaderData();
    // console.log(data);

    // ! generate random colors
    const getRandomColor = () => {
        let n = Math.floor(Math.random() * 0xffffff).toString(16);
        return "#" + n.padStart(6, '0');
    }

    return (
        <div className=''>
            {/* <Helmet>
                <meta charSet="utf-8" />
                <title>Statistics | Gadgets Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet> */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Statistics | Gadgets Heaven</title>
                <link rel="icon" type="image/png" href="/assets/favicon.png" />
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className='bg-purple-600 text-white text-center flex flex-col justify-center items-center py-10 space-y-4'>
                <h4 className='text-3xl font-semibold'>Statistics</h4>
                <p className='text-sm lg:w-[50%]'>Discover cutting-edge technology and innovative gadgets designed to elevate your lifestyle and enhance your productivity.</p>
            </div>

            <div className='px-24 pt-10'>
                <h1 className='text-2xl font-bold mb-4'>Statistics</h1>
                {/* <h2 className='text-xl font-bold text-purple-600 pb-8'>No Data found</h2> */}

                <div>
                    <ComposedChart
                        width={1400}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="product_title" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="price" barSize={20} fill="#413ea0" />
                        {/* <Line type="monotone" dataKey="price" stroke={getRandomColor()} /> */}
                        {/* <Line type="monotone" dataKey="rating" stroke="#ff7300" /> */}
                        <Scatter dataKey="rating" fill="red" />
                    </ComposedChart>
                </div>

            </div>

        </div>
    );
};

export default Statistics;