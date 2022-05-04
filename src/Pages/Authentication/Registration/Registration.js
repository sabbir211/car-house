import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Registration = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='loginContainer'>
        <div className='container mx-auto d-flex justify-content-center'>
            <div className=''>
                <div className='mt-4 mx-4 p-4 shadow rounded-4'>
                    <h2>Please Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=' my-3'>
                            <label className='text-muted' htmlFor="name">Name</label>
                            <input id='name' type="text" className='inputField w-100' {...register("Name")}
                             required /><br />
                        </div>
                        <div className=' my-3'>
                            <label className='text-muted' htmlFor="email">Email</label>
                            <input id='email' type="email" className='inputField w-100' {...register("Email")}
                             required /><br />
                        </div>
                        <div className=' my-3'>

                            <label className='text-muted' htmlFor="password">Password</label>
                            <input id='password' type="password" className='inputField w-100 ' {...register("Password")} required />

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