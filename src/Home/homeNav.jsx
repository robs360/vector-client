import React from "react";
import logo from '../assets/images/logo.avif'
import { FaMessage } from "react-icons/fa6";
import telegram from '../assets/images/telegram.png'
import { Link } from "react-router-dom";
import book from '../assets/images/book.jpg'
import pen from '../assets/images/pen.jpg'
import research from '../assets/images/research.avif'

const HomeNav = () => {
    return (
       <div className="w-[95%] mx-auto block border-2 border-black">
         <div className="w-full p-2 gap-4 opacity-70 mx-auto bg-black flex justify-between flex-col md:flex-row items-center rounded-md">
            <div className="flex space-x-2 items-center">
                <img src={research} className="w-[55px] h-[55px] rounded-[50%]" alt="" srcset="" />
                <div>
                <h1 className="text-3xl text-white font-medium">Vector Flex</h1>
                <h1 className="text-[16px] text-white">
                         11 Years Experience</h1>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2 md:gap-5">
                <img className="w-[55px] h-[55px] rounded-[50%]" src={book} alt="" />
                <img className="w-[55px] h-[55px] rounded-[50%]" src={pen} alt="" />
               
           
            </div>
            <div>
                <h1 className="text-[16px] font-medium text-white">
                    Email:nayemshahadat581@gmail.com</h1>
               
              
                <div className="flex mt-1 space-x-2 items-center">
                <h1 className="text-[16px] font-medium text-white">
                Mobile:018123...123</h1>
                        <Link className="text-[16px] font-medium px-1 bg-orange-300 rounded-md text-black">
                        Call Now</Link>
                </div>
            </div>
        </div>
       </div>
    )
}
export default HomeNav