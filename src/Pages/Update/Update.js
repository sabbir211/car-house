import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import "../../UtilityComponents/Styles/utilityStyle.css"
import "./Update.css"
const Update = () => {
    const { id } = useParams()
    const [car, setCar] = useState({})
    const [newQuantity, setNewQuantity] = useState(0)
    const [stockOut, setStockOut] = useState('')
    useEffect(() => {
        const getSingleItem = async () => {
            const response = await axios.get(`http://localhost:5000/inventory/${id}`)
            console.log(response.data);
            setCar(response.data)
        }
        getSingleItem()
    }, [id, newQuantity])
    let { name, price, img, quantity, supplier, _id, description } = car


    // Deliver confirmation happening here 

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDeliverConfirm = (id) => {
        if (quantity >= 1) {
            const newQuantity = quantity - 1
            console.log(newQuantity);
            setNewQuantity(newQuantity);
            axios.put(`http://localhost:5000/update/${id}`, { newQuantity })
                .then(() => setShow(false))
        }
    }
    // useEffect(() => {

    console.log(quantity);
    // }, [newQuantity])
    return (
        <div >
            <div className='d-flex container shadow min-width px-0'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='mx-4  p-3'>
                    <h2 style={{ color: "#252173" }}>{name}</h2>
                    <div className='d-flex align-items-center justify-content-around '>
                        <h4><span className='fs-3' style={{ color: "#5A102C" }}> {price}</span> $</h4>
                        | <p>Quantity: <span className='fs-3'>{quantity>=1? quantity:"Stock out"} </span> </p>
                    </div>
                    <article className='text-muted my-3'>{description}</article>
                    <p>Supplier: <span className='fs-4'>{supplier}</span> </p>
                    <p> Car Id:{_id}</p>

                    {/* deliver modal  */}
                    <button 
                    className={` btn btn-outline-primary w-100`}
                    onClick={handleShow}
                    disabled={ quantity<1 ? true:false}
                    >Deliver</button>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Deliver Confirmation</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            By confirming deliver stock will decrease
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={() => handleDeliverConfirm(_id)}>Confirm deliver</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>
        </div>

    );
};

export default Update;