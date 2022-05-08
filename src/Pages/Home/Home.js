import React from 'react';
import Faq from '../FAQ/Faq';
import Banner from './Banner/Banner';
import Inventory from './Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Faq></Faq>
        </div>
    );
};

export default Home;