import React from "react";
import HomeNav from "./homeNav";
import banner from '../assets/images/banner2.jpg'
import Importance from "./Important";
const Home = () => {
    const bannerStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div>
            <div className="w-[98%] flex p-1 md:flex-row flex-col items-center gap-4 justify-end md:w-[80%] min-h-[70vh] mx-auto mt-12" style={bannerStyle}>
                <div className="md:w-[540px] w-[340px]">
                    <h1 className="text-3xl mb-2 font-medium">Effective Learning</h1>
                    <p className="mb-4">Effective learning refers to a teaching and
                        learning process that not only focuses on
                        the results achieved by students, but also
                        emphasizes the understanding, intelligence,
                        perseverance, and quality of learning.</p>

                    <a className="text-[17px] font-medium"
                        href="https://typeset.io/questions/what-is-effective-learning-5edw2c0x4r">
                        Learn More
                    </a>
                </div>
                <div>
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
        </div>
    )
}
export default Home