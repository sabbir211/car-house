import React from 'react';
import CountUp, { useCountUp } from 'react-countup';
import { faBoxesPacking, faCar, faCoffee, faHandshake, faSquarePlus, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './summary.css'
const YearSummary = () => {

    return (
        <div className='summaryDiv container'>
            <h1 className='text-center my-5'>Summary </h1>
            <div className=' container d-flex flex-column flex-md-row justify-content-around'>
                <div className='text-center fw-bolder'>
                    <FontAwesomeIcon icon={faCar} className="icons"></FontAwesomeIcon>
                    <p className='fs-2 numbers'><CountUp start={1010} end={3400} enableScrollSpy></CountUp></p>
                    <small>In Stock</small>
                </div>
                <div className='text-center fw-bolder'>
                    <FontAwesomeIcon icon={faSquarePlus} className="icons"></FontAwesomeIcon>

                    <p className='fs-2 numbers'><CountUp start={500} end={10124} enableScrollSpy></CountUp></p>
                    <small>Added</small>
                </div>
                <div className='text-center fw-bolder'>
                    <FontAwesomeIcon icon={faTruck} className="icons"></FontAwesomeIcon>
                    <p className='fs-2 numbers'><CountUp start={5000} end={108760} enableScrollSpy></CountUp></p>
                    <small>Delivered</small>
                </div>
                <div className='text-center fw-bolder'>
                    <FontAwesomeIcon icon={faHandshake} className="icons"></FontAwesomeIcon>
                    <p className='fs-2 numbers'><CountUp start={500} end={18760} enableScrollSpy></CountUp></p>
                    <small>Brands</small>
                </div>
            </div>
        </div>

    );
};

export default YearSummary;