import React, { useState } from 'react';
import banner from "../../../images/banner.jpg"
const Banner = () => {
    return (
        <div>
         <img src={banner} className="w-100" alt="" />
        </div>
    );
};

export default Banner;