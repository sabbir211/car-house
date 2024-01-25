import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useCars from '../../Hooks/useCars';
import ManageInventory from './ManageInventory';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useMyCars from '../../Hooks/useMyCars';
import CustomSpin from '../../UtilityComponents/CustomSpin';

const ManageInventoris = () => {
  const [user,loading]=useAuthState(auth)
  const [cars, setCars] = useCars(null)
  const [myCars,setMyCars]= useMyCars(user)
if (loading) {
  return <CustomSpin></CustomSpin>
  
}
  const handleDelete = (id) => {
    axios.delete(`https://car-house-bcsm.onrender.com/deletecar/${id}`)
      .then(res => {
        if (res.data.deletedCount >= 1) {
          const restCars = cars.filter(car => car._id !== id)
          setCars(restCars)
        }
      })
  }
  const handleDeleteMyCars = (id) => {
    axios.delete(`https://car-house-bcsm.onrender.com/userscar/${id}`)
        .then(res => {
            if (res.data.deletedCount >= 1) {
                const restMyCars = myCars.filter(car => car._id !== id)
                setMyCars(restMyCars)
            }
        })
}
  return (
    <div className="container ">
      <div>
        {
          cars.map(car => <ManageInventory car={car} handleDelete={handleDelete} key={car._id}></ManageInventory>)
        }
        {
          myCars.map(car => <ManageInventory car={car} handleDelete={handleDeleteMyCars} key={car._id}></ManageInventory>)
        }
      </div>
      <div className='text-center'>
        <Link to="/addCar" className='btn btn-warning '> Add New Car</Link>
      </div>
    </div>
  );
};

export default ManageInventoris;