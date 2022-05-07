import { async } from '@firebase/util';
import axios from 'axios';
import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useForm } from 'react-hook-form';
import { toast,ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import CustomSpin from '../../UtilityComponents/CustomSpin';

const AddCar = () => {
    const { register, handleSubmit } = useForm();
    const resetRef = useRef(null)
    const [user,loading]=useAuthState(auth)
if(loading){
    return <CustomSpin></CustomSpin>
}
    const email=  user.email ;
    const handleAddCar = (data) => {
        const cardata={...data,email }
        axios.post("http://localhost:5000/addcar", { cardata })
            .then(() => { 
                resetRef.current.click()
                toast("Car added successfully")
            })
    }
    return (
        <div className='min-vh-100'>
            <div className='d-flex justify-content-center mt-3'>
                <form onSubmit={handleSubmit(handleAddCar)} className="shadow p-3 rounded">
                    <h2>Add new car</h2>
                    <div className=' my-3'>
                        <label className='text-muted' htmlFor="name">Car Name</label>
                        <input id='name' type="text" className='inputField w-100' {...register("name")}
                            required /><br />
                    </div>
                    <div className=' my-3'>
                        <label className='text-muted' htmlFor="description">Car description</label>
                        <input id='description' type="text" className='inputField w-100' {...register("description")}
                            required /><br />
                    </div>
                    <div className=' my-3'>
                        <label className='text-muted' htmlFor="img">Car Image URl</label>
                        <input id='img' type="text" className='inputField w-100' {...register("img")}
                            required /><br />
                    </div>
                    <div className=' my-3'>
                        <label className='text-muted' htmlFor="price">Car price</label>
                        <input id='price' type="number" className='inputField w-100' {...register("price")}
                            required /><br />
                    </div>
                    <div className=' my-3'>
                        <label className='text-muted' htmlFor="supplier">Car supplier</label>
                        <input id='supplier' type="text" className='inputField w-100' {...register("supplier")}
                            required /><br />
                    </div>
                    <div className=' my-3'>
                        <label className='text-muted' htmlFor="quantity">Quantity</label>
                        <input id='quantity' type="number" className='inputField w-100 ' {...register("quantity")} required />
                    </div>
                    <input type="submit" value="Add Car" className='btn btn-primary rounded-pill w-100' />
                    <input type="reset" ref={resetRef} value="Reset" className='btn btn-danger w-100 rounded-pill my-4' />
                </form>
            </div>
                <ToastContainer position='bottom-center'></ToastContainer>
        </div>

    );
};

export default AddCar;