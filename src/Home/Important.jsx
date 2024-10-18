import React, { useEffect } from "react";
import read from '../assets/images/reding.webp'
import write from '../assets/images/writeing.avif'
import think from '../assets/images/think.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Importance = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
        });
      }, []);
    return (
        <div className="w-full mx-auto mt-28 p-2 text-white">
            <div className="mb-16 bg-gray-800 opacity-80 py-2">
                <h1 className="text-3xl text-center font-medium">Importance of a coaching</h1>
                <p className="mt-2 text-center">Reading is important because it develops <br />
                    your mind and gives you excessive knowledge

                    and lessons of life. It helps you understand
                    the world around you better.
                    <br /> It keeps your mind active
                    and enhances your creative ability. </p>
            </div>
            <div className="w-[97%] md:w-[94%] mx-auto">
                <div  data-aos="flip-up" className="rounded-md border-[1px] border-orange-300 flex gap-3 flex-col items-center md:flex-row shadow-xl p-2">
                    <div>
                        <img className="w-[250px] h-[210px] rounded-md" src={read} alt="" srcset="" />
                    </div>
                    <div className="w-full md:w-[70%]">
                        <h1 className="text-3xl font-medium mt-2 text-white text-center">Reading Book</h1>
                       <p className="text-white">Reading is important because it
                         develops your mind and gives you
                          excessive knowledge and lessons
                           of life. It helps you understand
                            the world around you better. It
                             keeps your mind active and enhances
                              your creative ability. Communication Skills: Reading improves
                         your vocabulary and develops your communication skills
                         .Reading makes you more empathetic and knowledgeable,
                          and stimulates your imagination. Reading is one of the first things 
                         children are taught when they go to school. Reading
                          has numerous benefits</p>
                    </div>
                </div>
                <div data-aos="flip-up" className="my-5 rounded-md border-[1px] border-orange-300 flex gap-3 flex-col items-center md:flex-row shadow-xl p-2">
                    <div>
                        <img className="w-[250px] h-[210px] rounded-md" src={write} alt="" srcset="" />
                    </div>
                    <div className="w-full md:w-[70%]">
                        <h1 className="text-3xl font-medium mt-2 text-white text-center">Writing</h1>
                       <p className="text-white">Wring is important because it
                         develops your mind and gives you
                          excessive knowledge and lessons
                           of life. It helps you understand
                            the world around you better. It
                             keeps your mind active and enhances
                              your creative ability. Communication Skills: Reading improves
                         your vocabulary and develops your communication skills
                         .Reading makes you more empathetic and knowledgeable,
                          and stimulates your imagination. Reading is one of the first things 
                         children are taught when they go to school. Reading
                          has numerous benefits</p>
                    </div>
                </div>
                <div data-aos="flip-up"  className="rounded-md border-[1px] border-orange-300 flex gap-3 flex-col items-center md:flex-row shadow-xl p-2">
                    <div>
                    <img className="w-[250px] h-[210px] rounded-md" src={think} alt="" srcset="" />
                    </div>
                    <div className="w-full md:w-[70%]">
                        <h1 className="text-3xl font-medium mt-2 text- text-white enter">Thinking Proccess</h1>
                       <p className="text-white">Thinking Proccess is important because it
                         develops your mind and gives you
                          excessive knowledge and lessons
                           of life. It helps you understand
                            the world around you better. It
                             keeps your mind active and enhances
                              your creative ability. Communication Skills: Reading improves
                         your vocabulary and develops your communication skills
                         .Reading makes you more empathetic and knowledgeable,
                          and stimulates your imagination. Reading is one of the first things 
                         children are taught when they go to school. Reading
                          has numerous benefits</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Importance