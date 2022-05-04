import React from 'react';
import { Row } from 'react-bootstrap';
import SingleItem from './SingleItem';

const Inventory = () => {
    const cars = [
        { name: "Auston Martin", img: "https://i.ibb.co/vwWXNPd/Aston-martin.jpg", description: "Aston Martin makes the move to a mid-engine layout with the forthcoming Valhalla hypercar,", price: 1232, quantity: 12, supplier: "Bruce Lee", },
        { name: "Audi Q4 e-tron", img:"https://i.ibb.co/1zK33hJ/Kia-sonet.png", description: "The clear design of the Audi Q4 e-tron Sportback, with its focused front and powerful rear ", price: 3433, quantity: 23, supplier: "John doe", },
        { name: "Ford Mustang",   img:"https://i.ibb.co/kSgPg7g/Hundai-zg.png", description: " There’s nothing like the sound of a stampede. A herd of iconic Mustangs", price: 7680, quantity: 13, supplier: "kolim uddin", },
        { name: "Hyundai Kona",   img:"https://i.ibb.co/vxJMhwQ/Ford-mustag.png", description: "The 2021 Hyundai Kona is a subcompact SUV that seats five passengers. Maximum cargo capacity is 45.8 cubic feet", price: 5445, quantity: 21, supplier: "Alex toe", },
        { name: "Kia Sonet",      img:"https://i.ibb.co/19S6phG/Audi-ccss.png", description: "The Kia Sonet is a subcompact crossover SUV manufactured by Kia since 2020. Developed mainly for the Indian market, ", price: 4877, quantity: 20, supplier: "Sara john", },
        { name: "Laxus GS",       img:"https://i.ibb.co/gV0FbTz/toyota-pirus-spescs.png", description: "Prius Prime offers the best of both worlds: impressive fuel economy and the flexibility of electric charging", price: 5477, quantity: 17, supplier: "Jamal Uddin", },
        { name: "Toyota GR Yaris",img:"https://i.ibb.co/C0HwwQm/toyota-gr-yaris.png", description: "Meticulously crafted to make every moment count. Wearing the latest expression of the Lexus design language", price: 4717, quantity: 10, supplier: "Ema john", },
        { name: "Toyota Pirus",   img:"https://i.ibb.co/RB5CspD/Laxus-gs-f.png", description: "Prius Prime offers the best of both worlds: impressive fuel economy and the flexibility of electric charging", price: 5547, quantity: 14, supplier: "Picky Blinder", },
    ]

    return (
        <div className="container mx-auto">
            <h2 className='text-center my-3'>Featured Cars</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    cars.map((car, index) => {
                        return <SingleItem car={car} key={index}></SingleItem>
                    })
                }
          </Row>

        </div>
    );
};

export default Inventory;