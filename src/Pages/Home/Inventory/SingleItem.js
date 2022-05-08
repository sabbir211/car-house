import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SingleItem = ({ car }) => {
    const navigate=useNavigate()
    const { name, img, description, price, quantity, supplier,_id } = car
const handleUpdate=(id)=>{
navigate(`/inventory/${id}`)
}
    return (
        <div>
            <Col>
                <div className="d-flex align-items-stretch ">
                    <Card className=''>
                        <Card.Img variant="top" src={img} className="w-100" />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text className="text-muted">
                                {description}                                
                            </Card.Text>
                            <Card.Text className='d-flex align-items-center mt-2 mx-auto'>
                                Price: $ <span className='text-info fs-4'>{price}</span> /car
                                <span className='ms-3'> Quantity: {quantity} </span>

                            </Card.Text>
                            <Card.Text>

                            Supplier: {supplier} 
                            </Card.Text>
                            <button 
                            className='btn btn-outline-primary w-100' 
                            onClick={()=>{
                                handleUpdate(_id)
                            }}
                            >Update</button>
                        </Card.Body>
                      
                            
                  

                    </Card>
                </div>
            </Col>


        </div >
    );
};

export default SingleItem;