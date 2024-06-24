import React from "react";
import HomeNav from "./homeNav";
import banner from '../assets/images/banner2.jpg'
const Home=()=>{
    const bannerStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return(
        <div className="w-[98%] md:w-[70%] min-h-[70vh] mx-auto mt-16" style={bannerStyle}>
           
        </div>
    )
}
export default Home