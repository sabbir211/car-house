import React from 'react';
import Faq from '../FAQ/Faq';
import YearSummary from '../YearSummary.js/YearSummary';
import Banner from './Banner/Banner';
import Inventory from './Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <YearSummary></YearSummary>
            <Faq></Faq>
        </div>
    );
};

export default Home;