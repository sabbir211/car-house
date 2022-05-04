import React from 'react';
import { useForm } from 'react-hook-form';
import "../AuthStyle.css"
import { Link } from "react-router-dom"
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='loginContainer'>
            <div className='container mx-auto d-flex justify-content-center'>
                <div className=''>
                    <div className='mt-4 mx-4 p-4 shadow rounded-4'>
                        <h2>Welcome Back</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className=' my-3'>
                                <label className='text-muted' htmlFor="email">Email</label>
                                <input id='email' type="email" className='inputField w-100' {...register("Email")}
                                 required /><br />
                            </div>
                            <div className=' my-3'>

                                <label className='text-muted' htmlFor="password">Password</label>
                                <input id='password' type="password" className='inputField w-100 ' {...register("Password")} required />

                            </div>
                            <input type="submit" value="LOG IN" className='btn btn-primary rounded-pill w-100' />
                            <p className='text-info cursor-pointer'>Forgot Password ?</p>
                        </form>
                  <SocialLogin></SocialLogin>
                    <small className='mx-4 text-muted'>Are you New at Car house?<Link to="/register" className='fs-5 text-decoration-none'> Register </Link></small>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;