import React from 'react';
import "./footer.css"
import facebook from "../../../images/Logo/facebook2.png"
import linkedin from "../../../images/Logo/linkedin.png"
import twitter from "../../../images/Logo/twitter.png"
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const Footer = () => {
    const { register, handleSubmit,reset } = useForm();

    const handleSubscribe = (e) => {
       reset()
    }
    const date=new Date()
    const year=date.getFullYear()
    return (
        <div className='footContainer text-white '>
            <div className='container py-4 d-flex flex-column flex-md-row justify-content-between'>
                <div>
                    <h2>CONTACT INFO</h2>
                    <p>20/13 Fulbari,Natore,Bangladesh</p>
                    <p>sabbir21122@gmail.com</p>
                    <p> +8801756035663</p>
                    <div className='footImgContainer'>
                        <a href="https://www.facebook.com/sabbir1144" target="blank"> <img src={facebook} alt="" /></a>

                        <a href="linkedin.com/in/sabbir-alam-694438234"><img src={linkedin} alt="" /></a>
                        <img src={twitter} alt="" />
                    </div>
                </div>
                <div>
                    <h2>Useful links</h2>
                    <Link className='text-white text-decoration-none pt-4 d-block' to="/home"> HOME</Link>
                    <Link className='text-white text-decoration-none pt-4 d-block' to="/myCars">MY CARS</Link>
                    <Link className='text-white text-decoration-none pt-4 d-block' to="/addCar">ADD CARS</Link>
                    <Link className='text-white text-decoration-none pt-4 d-block' to="/blogs">BLOGS</Link>
                </div>
                <div>
                    <form onSubmit={handleSubmit(handleSubscribe)}>
                        <div className=' my-3'>
                            <label className='' htmlFor="email">Email</label>
                            <input id='email' type="email" className='inputField w-100 rounded-pill fs-4' {...register("email")}
                                required /><br />
                        </div>
                        <input type="submit" value="Subscribe" className='btn btn-outline-primary rounded-pill w-100' />
                    </form>

                </div>

            </div>
            <div className='my-2 py-2 copyRights text-center'>
                <p>&copy;{year} Car house.All Rights Reserved </p>
            </div>
        </div>
    );
};

export default Footer;