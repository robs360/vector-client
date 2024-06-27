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
                        <h1 className="text-2xl font-medium text-center">Discover Vector Flex</h1>
                        <h1 className="text-2xl font-medium mt-1 text-center">Where Innovation Meet In A Point</h1>
                  </div>
                  <div className="w-[98%] md:w-[80%] mt-14  mx-auto min-h-[60vh]" style={bannerStyle}>
                       
                  </div>
                  <div className="bg-orange-400 rounded-md flex space-x-4 p-2 gap-10
                  w-[95%] md:w-[70%] mx-auto -mt-[130px] min-h-[30vh] justify-evenly flex-wrap">
                        <div className="w-[310px] rounded-md ml-3 shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500 min-h-[220px] p-1">
                        <img src={location} className="w-[75px] h-[75px] mx-auto
                        rounded-[50%] -mt-[30px]" alt="" srcset="" />
                        <h1 className="text-white mt-2 font-medium">Level-4, Awal Centre, Banani, Dhaka</h1>
                        <h1 className="text-white mt-2 font-medium">Support: web@programming-hero.com</h1>
                        <h1 className="text-white mt-2 font-medium">(Available : Sat - Thu, 10:00 AM to 7:00 PM)</h1>
                        </div>
                        <div className="w-[310px] rounded-md shadow-xl bg-black bg-gradient-to-r from-yellow-300 to-yellow-400 p-1 min-h-[220px]">
                        <img src={purpose} className="w-[75px] h-[75px] mx-auto
                        rounded-[50%] -mt-[30px]" alt="" srcset="" />
                        <h1 className="text-white mt-2 font-medium text-center">
                            Create a center of creativity</h1>
                            <p className="text-white mt-2 font-medium text-center">
                                Creativity is defined as the tendency to generate
                                 or recognize ideas, alternatives, or possibilities 
                                that may be useful in solving problems,
                                 communicating with others,
                                  and entertaining ourselves and others</p>
                        </div>
                        <div className="w-[310px] rounded-md shadow-xl bg-gradient-to-r from-pink-300 to-pink-400 min-h-[220px]">
                        <img src={achive} className="w-[75px] h-[75px] mx-auto
                        rounded-[50%] -mt-[30px]" alt="" srcset="" />
                              <h1 className="text-white mt-2 font-medium text-center">
                            Create a nation</h1>
                            <p className="text-white mt-2 font-medium text-center">
                                Creativity is defined as the tendency to generate
                                 or recognize ideas, alternatives, or possibilities 
                                that may be useful in solving problems,
                                 communicating with others,
                                  and entertaining ourselves and others</p>
                        </div>
                  </div>
                  
            </div>
        </div>
    )
}
export default About