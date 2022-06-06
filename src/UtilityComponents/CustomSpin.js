import React from 'react';
import { Spinner } from 'react-bootstrap';

const CustomSpin = () => {
    return (
        <div className='d-flex justify-content-center align-items-center min-width'>
                <Spinner
                    animation="border"
                    variant='primary'
                >
                </Spinner>
         </div>
    );
};

export default CustomSpin;