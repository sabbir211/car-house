import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCars from '../../../Hooks/useCars';
import SingleItem from './SingleItem';

const Inventory = () => {
    const [cars,setCars]=useCars(6)
    return (
        <div className="container mx-auto">
            <h2 className='text-center my-3'>Featured Cars</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    cars.map((car, index) => {
                        return <SingleItem car={car} key={index}></SingleItem>
                    })
                }
            </Row>
            <div className='text-center '>
                <Link to="/ManageInventoris" className='btn btn-warning my-3'>Manage inventory</Link>
            </div>
        </div>
    );
};

export default Inventory;