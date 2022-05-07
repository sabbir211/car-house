
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ManageInventory = ({ car, handleDelete }) => {
    const [show, setShow] = useState(false);
    const { name, img, quantity, supplier, price, _id } = car

    return (
        <div className='d-flex justify-content-center'>
            <div className='row  shadow my-4'>
                <div className=' col-md-5 col-12 ps-0 '>
                    <img src={img} alt="" className='w-100' />
                </div>
                <div className='col-md-6 col-12'>
                    <div>
                        <h3>{name}</h3>
                        <p>{price}$</p>
                        <p> <span className="text-muted">Quantity:</span> {quantity}</p>
                        <p><span className="text-muted">supplier: </span> {supplier}</p>
                    </div>

                </div>
                <div className='col-md-1 col-12'>
                    <button className="btn btn-danger" onClick={() => setShow(true)}>Delete</button>
                </div>
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure ?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        By confirming  car will remove from database and can not be undone
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow(false)}>
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={() => {
                            handleDelete(_id)
                            setShow(false)
                        }}>Confirm</Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </div>
    );
};

export default ManageInventory;