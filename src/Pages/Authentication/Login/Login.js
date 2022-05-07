import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "../AuthStyle.css"
import { Link, useLocation, useNavigate } from "react-router-dom"
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomSpin from '../../../UtilityComponents/CustomSpin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from 'react-bootstrap';

const Login = () => {
    const navigate = useNavigate()
    const [reset, setReset] = useState(false)
    const [show, setShow] = useState(true);
    const location=useLocation()
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    if (loading) {
        return <CustomSpin></CustomSpin>
    }
    if (user) {      
        navigate(from, { replace: true });
    }

    const handleReset = async (data) => {
        await sendPasswordResetEmail(data.resetEmail)
        toast("Reset Mail sent")
    }
    return (
        <div className='min-width'>
            <div className='container mx-auto d-flex justify-content-center'>
                <div className=''>
                    <div className='mt-4 mx-4 p-4 shadow rounded-4'>
                        {!reset ? <>
                            <h2>Welcome Back</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className=' my-3'>
                                    <label className='text-muted' htmlFor="email">Email</label>
                                    <input id='email' type="email" className='inputField w-100' {...register("email")}
                                        required /><br />
                                </div>
                                <div className=' my-3'>

                                    <label className='text-muted' htmlFor="password">Password</label>
                                    <input id='password' type="password" className='inputField w-100 ' {...register("password")} required />

                                </div>
                                <p className="text-danger">{error?.message.split("/")[1].split(')')[0]}</p>

                                <input type="submit" value="LOG IN" className='btn btn-primary rounded-pill w-100' />
                                <p className='text-info cursor-pointer' onClick={() => setReset(true)}>Forgot Password ?</p>
                            </form>
                        </> : <>
                            {/* reset form  */}
                            <h2>Reset Password</h2>
                            <form onSubmit={handleSubmit(handleReset)}>
                                <div className=' my-3'>
                                    <label className='text-muted' htmlFor="resetEmail">Email</label>
                                    <input id='resetEmail' type="email" className='inputField w-100' {...register("resetEmail")}
                                        required /><br />
                                </div>
                                {resetError && <p> {error?.message} </p>}
                                {
                                    sending ? <Spinner variant='success' animation="border" className=" d-block mx-auto"/>
                                        :
                                        <input type="submit" value="Reset" className='my-1 btn btn-primary rounded-pill w-100' />
                                }
                               
                            </form>
                            <h6 className='text-info my-1 mb-3 pointer-cursor' onClick={() => setReset(false)}>Have password ?</h6>
                        </>

                        }
                        <SocialLogin></SocialLogin>
                        <small className='mx-4 text-muted'>Are you New at Car house?<Link to="/register" className='fs-5 text-decoration-none'> Register </Link></small>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;