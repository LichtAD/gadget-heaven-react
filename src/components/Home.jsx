import React from 'react';
import MainContent from './MainContent';
import { Helmet } from 'react-helmet';

const Home = () => {

    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Gadgets | Gadgets Heaven</title>
                <link rel="icon" type="image/png" href="/assets/favicon.png" /> 
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>


            <MainContent></MainContent>
        </div>
    );
};

export default Home;