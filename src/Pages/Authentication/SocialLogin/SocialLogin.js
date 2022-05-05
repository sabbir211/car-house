import React from 'react';
import google from "../../../images/Logo/google.png"
import facebook from "../../../images/Logo/facebook.png"
import github from "../../../images/Logo/github.png"
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Spinner } from 'react-bootstrap';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    if (loading || githubLoading) {
        return <Spinner animation="border" variant="primary"></Spinner>
    }
    return (
        <div>
            {
                error && <p className='text-danger'> Sorry {error.message.split('/')[1].split(")")[0]}</p>
            }

            <div className='text-muted'>
                Continue with
                <img onClick={() => signInWithGoogle()} width="35px" className='mx-2 shadow cursor-pointer rounded-circle' src={google} alt="" />
                <img onClick={() => signInWithGithub()} width="35px" className='mx-2 shadow cursor-pointer rounded-circle' src={github} alt="" />
                <img width="35px" className='mx-2 shadow cursor-pointer rounded-circle' src={facebook} alt="" />
            </div>
        </div>
    );
};

export default SocialLogin;