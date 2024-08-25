import React, { useEffect, useState } from "react";
import person from './assets/images/person1.jpg'
import book from './assets/images/book.jpg'
import { FaRegComment, FaThumbsUp } from "react-icons/fa6";
import { FaRegSave } from "react-icons/fa";
const Read_Vlog = () => {
    const [post, setPost] = useState([]);
    const [color, setColor] = useState(false)
    const [arr2, setArr2] = useState(() => {
        return JSON.parse(localStorage.getItem('arr')) || [];
    });
    useEffect(() => {
        fetch('http://localhost:5000/read_post')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    console.log(post)
    const handleColor = (id) => {      
        let arr=JSON.parse(localStorage.getItem('arr')) || [];

        if(arr.includes(id)){
             arr=arr.filter(info=>info!=id)
        }
        else{
            arr.push(id)
        }
        localStorage.setItem('arr', JSON.stringify(arr));
        
       setArr2(arr)
    }
    
    console.log(arr2)
    return (
        post?.map(info => <div className="mx-auto w-[360px] mb-12 md:w-[540px] lg:w-[750px]">

            <div className="w-full flex justify-between">
                <h1 className="text-2xl font-medium">
                    {info.title}</h1>
                <div>
                    <img src={info.author} className="w-[45px] h-[45px] rounded-[50%]"
                        alt="" srcset="" />
                </div>
            </div>
            <div className="w-full mt-2">
                <img src={info.image} className="w-full mb-2 h-[380px]" alt="" srcset="" />
                <p className="text-[17px] mt-3">
                    {info.vlog}
                </p>
            </div>
            <div className="justify-evenly w-full flex items-center px-2 rounded-2xl mt-6 border-black h-[40px]">
                <button className="flex" onClick={() => {
                    handleColor(info._id)
                }
                }><FaThumbsUp className={`text-[22px] ${arr2.includes(info._id) ? 'text-orange-400' : 'text-black'}`} />
                    <span className="text-[17px] font-medium ml-2">{info.react}</span></button>
                <button> <FaRegComment className="text-[20px]" />
                </button>
                <button className="text-[17px] font-medium flex items-center"><FaRegSave className='text-[22px]' />
                    <span className="ml-2 text-orange-400">Save It</span></button>
            </div>
        </div>)
    )
}

export default Read_Vlog