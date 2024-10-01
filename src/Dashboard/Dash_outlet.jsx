import React from "react";
import { FaBook, FaHome } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Dash_outlet=()=>{
    return(
        <div className="w-[96%] mx-auto mt-10">
               <div className="w-[240px] bg-black opacity-80 min-h-[80vh]
                p-2 rounded-md">
                  <div className="flex flex-col text-[17px] space-y-3 font-medium">
                     <Link className="text-white flex items-center">
                       <FaBook className="mr-1"></FaBook> Post Vlog</Link>
                  </div>
                 
               </div>
        </div>
    )
}

export default Dash_outlet