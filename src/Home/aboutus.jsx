import React from "react";
import about from '../assets/images/about.jpg'
import study from '../assets/images/study.avif'
import location from '../assets/images/location.jpg'
import purpose from '../assets/images/pur.png'
import achive from '../assets/images/achive.jpg'
const About = () => {
    const bannerStyle = {
        backgroundImage: `url(${about})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className="mt-16">
            <div className="bg-black min-h-[20vh] flex items-center justify-center">
                <h1 className="text-center text-4xl text-white">About Us</h1>
            </div>
            <div className="mt-10">
                  <div className="w-[360px] md:w-[460px] mx-auto">
                        <h1 className="text-2xl font-medium text-center">Discover Vector Class</h1>
                        <h1 className="text-2xl font-medium mt-1 text-center">Where Innovation Meet In A Point</h1>
                  </div>
                  <div className="w-[98%] md:w-[80%] mt-14  mx-auto min-h-[60vh]" style={bannerStyle}>
                       
                  </div>
                  <div className="bg-orange-400 rounded-md flex space-x-4 p-2
                  w-[95%] md:w-[70%] mx-auto -mt-[100px] min-h-[30vh] justify-evenly">
                        <div className="w-[220px] rounded-md shadow-xl bg-white min-h-[220px]">
                        <img src={location} className="w-[75px] h-[75px] mx-auto
                        rounded-[50%] -mt-[30px]" alt="" srcset="" />
                        </div>
                        <div className="w-[220px] rounded-md shadow-xl bg-white min-h-[220px]">
                        <img src={purpose} className="w-[75px] h-[75px] mx-auto
                        rounded-[50%] -mt-[30px]" alt="" srcset="" />
                        </div>
                        <div className="w-[220px] rounded-md shadow-xl bg-white min-h-[220px]">
                        <img src={achive} className="w-[75px] h-[75px] mx-auto
                        rounded-[50%] -mt-[30px]" alt="" srcset="" />
                        </div>
                  </div>
                  
            </div>
        </div>
    )
}
export default About