import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import CustomSpin from '../../UtilityComponents/CustomSpin';
import ManageInventory from '../ManageInventory/ManageInventory';

const MyCars = () => {
    const [user, loading] = useAuthState(auth)
    const [myCars, setMyCars] = useState([])
    const navigate=useNavigate()
    useEffect(() => {
        const email = user?.email
        axiosPrivate.get(`http://localhost:5000/userscar?email=${email}`)
        .then(res => setMyCars(res.data))
        .catch(error=>{
            if(error.response.status===401 || error.response.status===403 ){
                console.log('get out');
                signOut(auth)
                navigate("/login")
            }
        })

    }, [user])
    if (loading) {
        return <CustomSpin></CustomSpin>
    }

    else {

    }
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/userscar/${id}`)
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