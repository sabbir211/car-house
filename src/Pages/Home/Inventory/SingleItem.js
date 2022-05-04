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
                            <Card.Text>
                                <article className="text-muted">
                                    {description}
                                </article>
                                <div>
                                    <div className='d-flex align-items-center mt-2 mx-auto'>
                                         <p >Price: $ <span className='text-warning fs-4'>{price}</span>/car</p>
                                        <p className='ms-3'>Quantity: {quantity}</p>

                                    </div>
                                    <p>Supplier: {supplier}</p>
                                    <Card.Footer>
                                        <button className='btn btn-outline-warning w-100'>Update</button>
                                    </Card.Footer>
                                </div>


                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Col>


        </div >
    );
};

export default SingleItem;