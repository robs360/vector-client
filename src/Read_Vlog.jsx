import React from "react";
import person from './assets/images/person1.jpg'
const Read_Vlog=()=>{
    return(
        <div className="mx-auto w-[360px] md:w-[540px] lg:[680px]">
             <div className="w-full">
                  <div className="w-full flex justify-between">
                      <h1 className="text-2xl font-medium">
                        Lorem ipsum dolor sit amet</h1>
                      <div>
                         <img src={person} className="w-[40px] h-[40px] rounded-[50%]"
                          alt="" srcset="" />
                      </div>
                  </div>
             </div>
        </div>
    )
}

export default Read_Vlog