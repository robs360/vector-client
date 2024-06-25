import React, { useEffect, useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Review = () => {
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('/blog.json')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])
    return (
        <Carousel>
                <div>
                    
                    <p className="text-black">Legend 1qwieuhiuawhdfuihwaeiofhiowuhferi</p>
                </div>
                <div>
                    
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    )
}
export default Review