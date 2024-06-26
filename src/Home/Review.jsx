import React, { useEffect, useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import star from '../assets/images/star.png'
import rev from '../assets/images/revi.jpg'
const Review = () => {
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('/blog.json')
            .then(res => res.json())
            .then(data => {setInfo(data)
                console.log(info)
            })
    }, [])
    return (
        <div className="flex justify-center gap-3 items-center p-2 flex-col lg:flex-row">
            <div>
                <img src={rev} className="w-[360px] md:w-[460px] rounded-md" alt="" srcset="" />
            </div>
            <Carousel className="w-[365px] md:w-[520px] lg:w-[580px]"  autoPlay={true} infiniteLoop={true} interval={2000}>
               {
                info.map(item=><div className="w-full
                rounded-md shadow-xl p-2">
                      <div className="w-full h-[90px] flex items-center justify-center bg-orange-300 rounded-md mt-2">
                          <div className="w-[80px] h-[80px]">
                                <img src={item.image} className="w-full h-full rounded-[50%]" alt="" srcset="" />
                          </div>
                      </div>
                       <h1 className="text-center text-2xl mt-2 font-medium">{item.name}</h1>
                       <h1 className="text-center mt-2 font-medium text-gray-500">Client</h1>
                       <p className="mt-2 text-center">Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Esse ex adipisci unde. Lorem ipsum dolor 
                         sit amet consectetur adipisicing elit.</p>
                         <div className="flex justify-center space-x-2 mt-2">
                             <div className="w-[27px]"><img src={star} className="w-full" alt="" srcset="" /></div>
                             <div className="w-[27px]"><img src={star} className="w-full" alt="" srcset="" /></div>
                             <div className="w-[27px]"><img src={star} className="w-full" alt="" srcset="" /></div>
                             <div className="w-[27px]"><img src={star} className="w-full" alt="" srcset="" /></div>
                             <div className="w-[27px]"><img src={star} className="w-full" alt="" srcset="" /></div>
                         </div>
                </div>)
               }
         </Carousel>
        </div>
    )
}
export default Review