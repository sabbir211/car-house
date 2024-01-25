import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import useMyCars from '../../Hooks/useMyCars';
import CustomSpin from '../../UtilityComponents/CustomSpin';
import ManageInventory from '../ManageInventory/ManageInventory';

const MyCars = () => {
    const [user, loading] = useAuthState(auth)
    const [myCars,setMyCars]=useMyCars(user)
    if (loading) {
        return <CustomSpin></CustomSpin>
    }

    else {

    }
    const handleDelete = (id) => {
        axios.delete(`https://car-house-bcsm.onrender.com/userscar/${id}`)
            .then(res => {
                if (res.data.deletedCount >= 1) {
                    const restMyCars = myCars.filter(car => car._id !== id)
                    setMyCars(restMyCars)
                }
            })
    }


    return (
        <div className='min-vh-100'>
            {
                myCars.map(car => <ManageInventory car={car} key={car._id} handleDelete={handleDelete}></ManageInventory>)
            }
        </div>
    );
};

export default MyCars;