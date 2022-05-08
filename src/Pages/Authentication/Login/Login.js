import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import useToken from '../../../Hooks/useToken';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const navigate = useNavigate()
    const [reset, setReset] = useState(false)
    const { register, handleSubmit } = useForm();
    const location = useLocation()
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
    const [token] = useToken(user)
    const onSubmit = async (data) => {
        const email = data.email
        await signInWithEmailAndPassword(email, data.password)
        //     const res = await axios.post('https://young-crag-76268.herokuapp.com/login', { email })
        //    localStorage.setItem("accessToken",res.data);


    };
    useEffect(()=>{
      if (token) {
        navigate(from, { replace: true })

    }  
    },[token])
    

    if (loading) {
        return <CustomSpin></CustomSpin>
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
                                    <div className='d-flex '>
                                        <span className='border-bottom'>   <FontAwesomeIcon icon={faEnvelope} className="me-2"></FontAwesomeIcon></span>
                                        <input id='email' type="email" className='inputField w-100' {...register("email")}
                                            required /><br />
                                    </div>

                                </div>
                                <div className=' my-3'>
                          <label className='text-muted' htmlFor="password">Password</label>
                                   <div className='d-flex'>
                                       <span className="border-bottom"> <FontAwesomeIcon icon={faLock} className="me-2"></FontAwesomeIcon></span>
                                    <input id='password' type="password" className='inputField w-100 ' {...register("password")} required />
                                   </div>

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
                                    sending ? <Spinner variant='success' animation="border" className=" d-block mx-auto" />
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