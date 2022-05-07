import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomSpin from '../../UtilityComponents/CustomSpin';
import ManageInventory from '../ManageInventory/ManageInventory';

const MyCars = () => {
    const [user, loading] = useAuthState(auth)
    const [myCars, setMyCars] = useState([])
    useEffect(() => {
        const email = user?.email
        axios.get(`http://localhost:5000/userscar?email=${email}`)
            .then(res => setMyCars(res.data))
    }, [user])
    if (loading) {
        return <CustomSpin></CustomSpin>
    }

    else {

    }
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/userscar/${id}`)
        .then(res=>{
            if(res.data.deletedCount >= 1){
                const restMyCars=myCars.filter(car=>car._id !== id)
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