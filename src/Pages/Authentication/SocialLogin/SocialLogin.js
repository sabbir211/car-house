import React from 'react';
import google from "../../../images/Logo/google.png"
import facebook from "../../../images/Logo/facebook.png"
import github from "../../../images/Logo/github.png"
const SocialLogin = () => {
    return (
        <div>
             <p className='text-muted'>
                       Continue with 
                   <img width="35px" className='mx-2 shadow cursor-pointer rounded-circle' src={google} alt="" />
                   <img width="35px" className='mx-2 shadow cursor-pointer rounded-circle' src={facebook} alt="" />
                   <img width="35px" className='mx-2 shadow cursor-pointer rounded-circle' src={github} alt="" />
                   </p>
        </div>
    );
};

export default SocialLogin;