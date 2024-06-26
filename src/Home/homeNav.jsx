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
        <div className="w-[97%] p-2 gap-4 mx-auto bg-gradient-to-r from-purple-400 to-purple-500 flex justify-between flex-col md:flex-row items-center rounded-md">
            <div className="flex space-x-2 items-center">
                <img src={logo} className="w-[55px] h-[55px] rounded-[50%]" alt="" srcset="" />
                <div>
                <h1 className="text-3xl text-black font-medium">Vector Classes</h1>
                <h1 className="text-[16px] text-black">
                        Since 2013 11 Years Experience</h1>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2 md:gap-5">
                <img className="w-[55px] h-[55px] rounded-[50%]" src={book} alt="" />
                <img className="w-[55px] h-[55px] rounded-[50%]" src={pen} alt="" />
                <img className="w-[55px] h-[55px] rounded-[50%]" src={research} alt="" />
           
            </div>
            <div>
                <h1 className="text-[16px] font-medium text-black">
                    Email:nayemshahadat581@gmail.com</h1>
               
              
                <div className="flex mt-1 space-x-2 items-center">
                <h1 className="text-[16px] font-medium text-black">
                Mobile:018123...123</h1>
                        <Link className="text-[16px] font-medium px-1 bg-orange-300 rounded-md text-black">
                        Call Now</Link>
                </div>
            </div>
        </div>
    )
}
export default HomeNav