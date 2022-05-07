import React from 'react';
import { Link } from 'react-router-dom';
import useCars from '../../Hooks/useCars';
import ManageInventory from './ManageInventory';

const ManageInventoris = () => {
  const [cars, setCars] = useCars(null)
  return (
    <div className="container ">
      <div>
        {
          cars.map(car => <ManageInventory car={car} key={car._id}></ManageInventory>)
        }
      </div>
      <div className='text-center'>
        <Link to="/addCar" className='btn btn-warning '> Add New Car</Link>
      </div>
    </div>
  );
};

export default ManageInventoris;