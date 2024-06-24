import React from "react";
import logo from '../assets/images/logo.avif'
import { FaMessage } from "react-icons/fa6";
import telegram from '../assets/images/telegram.png'
import { Link } from "react-router-dom";
import book from '../assets/images/book.jpg'
import pen from '../assets/images/pen.jpg'
import research from '../assets/images/research.avif'
import creative from '../assets/images/creative.png'
const HomeNav = () => {
    return (
        <div className="w-[97%] mx-auto flex justify-between flex-col md:flex-row items-center rounded-md p-2 bg-blue-800 min-h-[20vh]">
            <div>
                <img src={logo} className="w-[100px] h-[100px] rounded-[50%]" alt="" srcset="" />
                <h1 className="text-3xl text-orange-300 font-medium mt-3">Vector Classes</h1>
            </div>
            <div className="grid grid-cols-3 gap-2 md:gap-5">
                <img className="w-[80px] h-[80px] rounded-[50%]" src={book} alt="" />
                <img className="w-[80px] h-[80px] rounded-[50%]" src={pen} alt="" />
                <img className="w-[80px] h-[80px] rounded-[50%]" src={research} alt="" />
           
            </div>
            <div>
                <h1 className="text-[16px] font-medium text-orange-300">
                    Email:nayemshahadat581@gmail.com</h1>
                <h1 className="text-[16px] font-medium text-orange-300">
                    Mobile:018123...123</h1>
                <div className="flex space-x-4 mt-2 items-center">
                    <img src={telegram} className="w-[30px] h-[30px]" alt="" srcset="" />
                    <FaMessage className="text-2xl text-orange-400"></FaMessage>
                </div>
                <div className="mt-4">
                    <Link className="text-[16px] font-medium p-1 bg-green-400 rounded-md text-black">
                        Apply Now</Link>
                    <h1 className="text-[16px] font-medium mt-2 text-orange-300">
                        Since 2013 11 Years Experience</h1>
                </div>
            </div>
        </div>
    )
}
export default HomeNav