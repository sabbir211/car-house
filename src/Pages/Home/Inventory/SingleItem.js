import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleItem = ({ car }) => {
    const { name, img, description, price, quantity, supplier } = car
    return (
        <div>
            <Col>
                <div className="d-flex align-items-stretch">
                    <Card>
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
                        </Card.Body>
                        <Card.Footer>
                            <button className='btn btn-outline-info w-100'>Update</button>
                        </Card.Footer>

                    </Card>
                </div>
            </Col>


        </div >
    );
};

export default SingleItem;