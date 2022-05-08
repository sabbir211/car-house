
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import "./Update.css"
const Update = () => {
    const { id } = useParams()
    const [car, setCar] = useState({})
    const [newQuantity, setNewQuantity] = useState(0)

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
            updateQuantity(newQuantity)
            setShow(false)
        }
    }
    const updateQuantity = async (newQuantity) => {
        const response = await axios.put(`http://localhost:5000/update/${id}`, { newQuantity })
        setNewQuantity(newQuantity);

    }
    // Restock functionality is here 
    const { register, handleSubmit,reset } = useForm();
    const handleRestock = async(data) => {
        console.log(data);
      const newQuantity= quantity+parseInt(data.quantity)
     await updateQuantity(newQuantity)
      reset()
    }
    return (
        <div className='container shadow min-vh-100 px-0'>
            <div className='d-flex flex-md-row flex-column '>
                <div className="w-100">
                    <img src={img} alt="" className='w-100' />
                </div>
                <div className='mx-4  p-3'>
                    <h2 style={{ color: "#252173" }}>{name}</h2>
                    <div className='d-flex  align-items-center justify-content-around '>
                        <h4><span className='fs-3' style={{ color: "#5A102C" }}> {price}</span> $</h4>
                        | <p>Quantity: <span className='fs-3'>{quantity >= 1 ? quantity : "Stock out"} </span> </p>
                    </div>
                    <article className='text-muted my-3'>{description}</article>
                    <p>Supplier: <span className='fs-4'>{supplier}</span> </p>
                    <p> Car Id:{_id}</p>

                    {/* deliver modal  */}
                    <button
                        className={` btn btn-outline-primary w-100`}
                        onClick={handleShow}
                        disabled={quantity < 1 ? true : false}
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
                {/* ReStock ui is here  */}

            </div>
            <div className='d-flex justify-content-center'>
                <form onSubmit={handleSubmit(handleRestock)}>
                    <h2>Restock Car</h2>
                    <div className=' my-3'>
                        <label className='text-muted' htmlFor="quantity">quantity</label>
                        <input id='quantity' type="number" className='inputField w-100'  {...register("quantity")}
                            required /><br />
                        <input type="submit" value="update stock" className='btn btn-primary rounded-pill w-100 my-4' />
                    </div>

                </form>
            </div>
<div className='text-center '>
    <Link to="/ManageInventoris" className='btn btn-warning my-3'>Manage inventory</Link>
</div>
        </div>



    );
};

export default Update;