import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.css'
const NotFound = () => {
    return (
        <div className='d-flex text-white bg-dark min-vh-100 justify-content-center align-items-center'>
            <div>
                <h1 className='status text-muted'>404</h1>
            </div>
            <div className='p-md-5 '>
                <h3 className='fs-1'>We're sorry,but the page you <br /> were looking for doesn't exist</h3>
                <h4 className='my-3 text-muted'>Return to the Home page using the button below</h4>
                <Link to="/home" className='btn btn-outline-danger '>RETURN TO HOME</Link>
            </div>
        </div>
    );
};

export default NotFound;