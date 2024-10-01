import React, { useContext, useState } from "react";

import { motion } from "framer-motion"
import { FaClipboardCheck, FaPlus } from "react-icons/fa6";
import register from '../assets/images/Animation - 1715347349286.json'
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authprovider";
import Swal from "sweetalert2";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../firebase.config";
import reg from '../assets/images/reg.jpg'
const Register = () => {
    
    const [liked,setLiked]=useState([])
    const auth=getAuth(app)
    const {createUser,user}=useContext(AuthContext)
   
   
    const handleSubmit=(e)=>{
       e.preventDefault();
       const Name=e.target.name.value;
       const Email=e.target.email.value;
       const photo=e.target.image.value;
       const pass=e.target.pass.value;
       console.log(Name,Email,photo,pass)
       
       createUser(Email,pass)
       .then(res=>{
          Swal.fire("You Are In Here")
          updateProfile(auth.currentUser,{
            displayName:Name,
            photoURL:photo
        })
        .then(()=>{
            console.log("Yes")
            const uSer={Name,Email,liked}
            fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                },
                body:JSON.stringify(uSer)
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
        })
        .catch((error)=>{
             console.log("no")
        })

       })
       .catch(error=>{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
       })
    }
    const bannerStyle = {
        backgroundImage: `url(${reg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className="w-[97%] mx-auto min-h-[90vh] py-4 rounded-sm mt-8 
        flex items-center justify-center" style={bannerStyle}>
            <div className="w-[96%] md:w-[90%] lg:w-[80%] min-h-[80vh]
            bg-white opacity-90 shadow-2xl rounded-md">
                <motion.div
                    initial={{ opacity: 0, x: 380 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1
                    }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500
                     flex w-full py-3 mx-auto rounded-t-md items-center justify-center">
                    <h1 className="text-3xl text-center mx-auto font-semibold">
                        Register Here</h1>
                    
                </motion.div>

                <div className="flex justify-center md:flex-row flex-col-reverse items-center mt-12 gap-4">
                    <div>
                        <form onSubmit={handleSubmit} action="" className="flex flex-col p-2 py-4 border-2
                        border-black rounded-md">
                             <h1 className="text-[17px] font-medium text-gray-400">Name:</h1>
                             <input className="w-[330px] h-[50px]
                             rounded-md p-1 mt border-2 border-gray-400" placeholder="Your Name" type="text" name="name" id="" />
                             <h1 className="text-[17px] font-medium mt-3 text-gray-400">Email:</h1>
                             <input className="w-[330px] h-[50px]
                             rounded-md p-1 border-2 border-gray-400" placeholder="email" type="text" name="email" />
                             <h1 className="text-[17px] font-medium mt-3 text-gray-400">Image Url:</h1>
                             <input className="w-[330px] h-[50px]
                             rounded-md p-1 border-2 border-gray-400" placeholder="Image Url" type="text" name="image" id="" />
                             <h1 className="text-[17px] font-medium mt-3 text-gray-400">Password:</h1>
                             <input className="w-[330px] h-[50px]
                             rounded-md p-1 border-2 border-gray-400" placeholder="Password" type="password" name="pass" />
                             <button type="submit" className="w-[330px] h-[50px] mt-3
                             rounded-md text-xl font-medium
                             bg-black text-white">Register</button>
                        </form>
                        <Link><p className="text-center font-medium mt-3">Already Have An Account?</p></Link>
                    </div>
                    <div>
                    <Lottie animationData={register} loop={true}
                            className='w-[350px] md:w-[400px] h-[400px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register