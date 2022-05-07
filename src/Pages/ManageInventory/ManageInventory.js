import React from 'react';

const ManageInventory = ({ car }) => {
    const { name, img, quantity, supplier, price } = car
    return (
        <div className='d-flex justify-content-center '>
            <div className='row  shadow my-4'>
                <div className=' col-5 ps-0 '>
                    <img src={img} alt="" className='w-100' />
                </div>
                <div className='col-6'>
                    <div>
                        <h3>{name}</h3>
                        <p>{price}$</p>
                        <p> <span className="text-muted">Quantity:</span> {quantity}</p>
                        <p><span className="text-muted">supplier: </span> {supplier}</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ManageInventory;