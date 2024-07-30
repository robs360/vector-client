import React from "react";
import { FaHome } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Dash_outlet=()=>{
    return(
        <div className="w-[96%] mx-auto mt-10">
               <div className="w-[240px] bg-black opacity-80 min-h-[80vh]
                p-2 rounded-md">
                  <div className="flex flex-col text-[17px] space-y-3 font-medium">
                     <Link className="text-white flex">
                       <FaClock className="text-[21px] text-white mr-2"></FaClock> Payment History</Link>
                     <Link className="text-white flex">
                     <FaHome className="text-2xl text-white mr-2"></FaHome>Your Post</Link>
                     <Link className="text-white">Post Vlog</Link>
                     <Link className="text-white flex">
                      </Link>
                  </div>
                  <div>
                     
                  </div>
               </div>
        </div>
    )
}

export default Dash_outlet