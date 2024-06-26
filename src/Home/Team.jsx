import React from "react";
import team from '../assets/images/team.avif'
import person1 from '../assets/images/person1.jpg'
import person2 from '../assets/images/person2.jpg'
import person3 from '../assets/images/person3.avif'
import person4 from '../assets/images/person4.jpeg'
import person5 from '../assets/images/person5.avif'
import person6 from '../assets/images/person6.jpg'
const Team = () => {
    return (
        <div className="mt-24">
            <div className="py-4 px-2 w-[97%] mx-auto bg-black rounded-md">
                <h1 className="text-3xl text-center text-white
                  font-medium">Meet Our Team</h1>
                <p className="text-center text-white mt-3">A "Meet the
                    Team" page is a tab on a company's <br />
                    website devoted to introducing a
                    company's employees to customers. <br />

                    This webpage also allows visitors
                    to learn more about executives managing a company,  <br />
                    which can establish credibility and promote transparency</p>
            </div>
            <div className="mt-16 flex flex-col md:flex-row items-center
             justify-center gap-3">
               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="border-[1px] border-yellow-200 rounded-md p-1">
                        <img className="w-[260px] h-[230px] md:w-[220px] md:h-[200px] rounded-md" src={person1} alt="" srcset="" />
                        <h1 className="text-center">Gary careston</h1>
                         <p className="text-center text-orange-300">Senior Web Instructor</p>
                    </div>
                    <div className="border-[1px] border-yellow-200 rounded-md p-1">
                        <img  className="w-[260px] h-[230px] md:w-[220px] md:h-[200px] rounded-md" src={person2} alt="" srcset="" />
                        <h1 className="text-center">Habib</h1>
                        <p className="text-center text-orange-300">Senior Math instructor</p>
                    </div>
                    <div className="border-[1px] border-yellow-200 rounded-md p-1">
                        <img  className="w-[260px] h-[230px] md:w-[220px] md:h-[200px] rounded-md" src={person3} alt="" srcset="" />
                        <h1 className="text-center">Lory Evan</h1>
                        <p className="text-center text-orange-300">Senior Math Instructor</p>
                    </div>
                    <div className="border-[1px] border-yellow-200 rounded-md p-1">
                        <img className="w-[260px] h-[230px] md:w-[220px] md:h-[200px] rounded-md" src={person4} alt="" srcset="" />
                        <h1 className="text-center">Grills</h1>
                        <p className="text-center text-orange-300">Physics Instructor</p>
                    </div>
                    <div className="border-[1px] border-yellow-200 rounded-md p-1">
                        <img className="w-[260px] h-[230px] md:w-[220px] md:h-[200px] rounded-md" src={person5} alt="" srcset="" />
                        <h1 className="text-center">Grills</h1>
                        <p className="text-center text-orange-300">Physics Instructor</p>
                    </div>
                    <div className="border-[1px] border-yellow-200 rounded-md p-1">
                        <img className="w-[260px] h-[230px] md:w-[220px] md:h-[200px] rounded-md" src={person6} alt="" srcset="" />
                        <h1 className="text-center">Anisha</h1>
                        <p className="text-center text-orange-300">Physics Instructor</p>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}
export default Team