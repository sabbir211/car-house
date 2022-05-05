import React, { useState } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import "../AuthStyle.css"
import CustomSpin from '../../../UtilityComponents/CustomSpin';
const Registration = () => {
    const { register, handleSubmit } = useForm();
    const [show, setShow] = useState(true);
    const navigate=useNavigate()
    const [storedUser]=useAuthState(auth)
    const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
   

    const onSubmit = async (data) => {
        console.log(data)
        const displayName = data.name
        await createUserWithEmailAndPassword(data.email, data.password)
        updateProfile({ displayName })
       
    }; 
    if (loading) {
        return <CustomSpin></CustomSpin>
    }
    
    if (user) {
       navigate("/")
    }
    if (errorUpdate) {
        console.log(errorUpdate);

    }
    if (updating) {
        return (
            <div className='d-flex justify-content-center align-items-center min-width'>
                <Spinner
                    animation="border"
                    variant='primary'
                >
                </Spinner>
            </div>)
    }
    
    return (
        <div className='loginContainer'>
            <div className='container mx-auto d-flex justify-content-center'>
                <div className=''>
                    <div className='mt-4 mx-4 p-4 shadow rounded-4'>
                        <h2>Please Register</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className=' my-3'>
                                <label className='text-muted' htmlFor="name">Name</label>
                                <input id='name' type="text" className='inputField w-100' {...register("name")}
                                    required /><br />
                            </div>
                            <div className=' my-3'>
                                <label className='text-muted' htmlFor="email">Email</label>
                                <input id='email' type="email" className='inputField w-100' {...register("email")}
                                    required /><br />
                            </div>
                            <div className=' my-3'>

                                <label className='text-muted' htmlFor="password">Password</label>
                                <input id='password' type="password" className='inputField w-100 ' {...register("password")} required />

                            </div>
                            <input type="submit" value="Sign up" className='btn btn-primary rounded-pill w-100 mb-4' />

                        </form>
                        <SocialLogin></SocialLogin>
                        <small className='mx-4 text-muted'>Already have account?<Link to="/login" className='fs-5 text-decoration-none'> Login </Link></small>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Registration;