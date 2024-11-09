import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center min-h-screen'>
                <h1 className='text-6xl font-bold text-red-600'>404</h1>
                <p className='text-2xl text-center'>Page Not Found</p>
            </div>
        </div>
    );
};

export default ErrorPage;