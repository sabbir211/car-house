import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import useCars from '../../Hooks/useCars';
import ManageInventory from './ManageInventory';

const ManageInventoris = () => {
  const [cars, setCars] = useCars(null)
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/deletecar/${id}`)
      .then(res => {
        if (res.data.deletedCount >= 1) {
          const restCars = cars.filter(car => car._id !== id)
          setCars(restCars)
        }
      })
  }
  return (
    <div className="container ">
      <div>
        {
          cars.map(car => <ManageInventory car={car} handleDelete={handleDelete} key={car._id}></ManageInventory>)
        }
      </div>
      <div className='text-center'>
        <Link to="/addCar" className='btn btn-warning '> Add New Car</Link>
      </div>
    </div>
  );
};

export default ManageInventoris;