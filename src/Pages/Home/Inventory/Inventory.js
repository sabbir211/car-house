import axios from 'axios';
import React ,{useEffect, useState} from 'react';
import { Row } from 'react-bootstrap';
import SingleItem from './SingleItem';

const Inventory = () => {
const [cars,setCars]=useState([])
useEffect(()=>{
 axios.get(`http://localhost:5000/inventory?size=${6}`)
.then(res=>setCars(res.data))   
},[])
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

        </div>
    );
};

export default Inventory;