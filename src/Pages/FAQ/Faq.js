import React from 'react';
import { Accordion } from 'react-bootstrap';
import "./faq.css"
const Faq = () => {
    return (
        <div className='mx-auto res-width my-5'>

            <div className='container '>
                <h1 className='text-center'>Frequently Asked Question</h1>
                <Accordion  flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header > How can i choose multiple Car ?</Accordion.Header>
                        <Accordion.Body>
                            You have to go manage inventory page and you will see a deliver button click on it. on every click you will get one car .so if you want more .than click more.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What are the safeties rate ?</Accordion.Header>
                        <Accordion.Body>
                            safeties rate is high.safety is our first priority.we know that a accident can cause very badly .
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            what is the deliver policy ?
                        </Accordion.Header>
                        <Accordion.Body>
                            We will not accept delivered item so deliver wisely. it cannot be one done.and it will reduce the stock.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            What are the Restriction to add cars?

                        </Accordion.Header>
                        <Accordion.Body>
                            By adding car  will add to your my car section so if you want to delete one item than it is easy for you .but why will you waste your time on doing so.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>

                            How can i contact supplier ?
                        </Accordion.Header>
                        <Accordion.Body>
                            You can easily contact supplier .you can call him/her direct other wise you can text him/her on social account 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>
                            What is the privacy policy ?
                        </Accordion.Header>
                        <Accordion.Body>
                            Privacy is not valuable to use .so don't think about it .if you want privacy than you should got jungle.
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>
        </div>



    );
};

export default Faq;