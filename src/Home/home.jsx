import React from "react";
import HomeNav from "./homeNav";
import banner from '../assets/images/banner4.jpg'
import Importance from "./Important";
import Team from "./Team";
import Review from "./Review";
import About from "./aboutus";
import Footer from "./Footer";
const Home = () => {
    const bannerStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div>
            <div className="w-[98%] flex p-1 md:flex-row flex-col  gap-4 justify-center items-start md:w-[95%] min-h-[75vh] mx-auto mt-12" style={bannerStyle}>
                <div className="md:w-[540px] w-[340px] mt-6">
                  
                     <div className="p-3 rounded-md bg-black opacity-70">
                     <h1 className="text-3xl mb-2 font-medium text-white">Effective Learning</h1>
                    <p className="mb-4 text-white">Effective learning refers to a teaching and <br />
                        learning process that not only focuses on
                        the results achieved by students, but also <br />
                        emphasizes the understanding, intelligence,
                        perseverance, and quality of learning.</p>
                    

                    <a className="text-[17px] text-yellow-100 font-medium"
                        href="https://typeset.io/questions/what-is-effective-learning-5edw2c0x4r">
                        Learn More
                    </a>
                    </div>
                </div>
                <div className="mt-6">
                    <div class="flex bg-orange-300 rounded-lg ">
                        <div class="p-10 relative">
                            <h1 class="text-3xl md:text-4xl font-medium">15% OFF</h1>
                            <p class="text-[18px] font-medium">On your next purchase</p>
                            <p class="text-[16px] font-normal text-gray-500">Use by january 24</p>
                            <div class="w-[40px] h-[40px] bg-white rounded-[50%] absolute -top-[18px] -right-5">

                            </div>
                            <div class="w-[40px] h-[40px] bg-white rounded-[50%] absolute -right-5 -bottom-5">

                            </div>
                        </div>
                        <div class="p-10 border-l-2 border-dashed border-gray-500 rounded-lg">
                            <h1 class="text-2xl md:text-3xl font-semibold">
                                NE<span>V</span><span class="-ml-[8px]">V</span><span class="text-2xl">1</span><span
                                    class="3xl">5</span>
                            </h1>
                            <p class="text-[20px] text-gray-400">Cupon Code</p>
                        </div>
                    </div>

                </div>
            </div>
            <Importance></Importance>
            <Team></Team>
            <div className="py-4 px-2 w-[97%] mx-auto bg-black my-20 rounded-md">
                <h1 className="text-3xl text-center text-white
                  font-medium">Students Review</h1>
                <p className="text-center text-white mt-3">A "Meet the
                    Team" page is a tab on a company's <br />
                    website devoted to introducing a
                    company's employees to customers. <br />

                    This webpage also allows visitors
                    to learn more about executives managing a company,  <br />
                    which can establish credibility and promote transparency</p>
            </div>
            <Review></Review>
            <About></About>
            
        </div>
    )
}
export default Home