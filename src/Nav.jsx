import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Authprovider";
import './App.css'
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import Swal from "sweetalert2";
const Nav = () => {
    const { user,logOut } = useContext(AuthContext)
    const [visible, setVisible] = useState(false);
    const [visit,setVisit]=useState(false)
    const yarnClicked=()=>{
        logOut()
        .then(res=>{
            Swal.fire("You Have Logout")
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="flex items-center justify-between border-b-[3px] mt-4 w-[96%] mx-auto">
            <div className="hidden mt-6 w-[97%] py-2 mx-auto font-medium lg:flex space-x-4 items-center">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "font-medium" : isActive ? "rounded-md bg-gray-300 px-2 py-1" : "text-[16px]"
                    }
                >
                    Home
                </NavLink>
             
                <NavLink
                    to="/quiz"
                    className={({ isActive, isPending }) =>
                        isPending ? "font-medium" : isActive ? "rounded-md bg-gray-300 px-2 py-1" : "text-[16px]"
                    }
                >
                    Quiz Test
                </NavLink>
                <NavLink
                    to="/read_vlog"
                    className={({ isActive, isPending }) =>
                        isPending ? "font-medium" : isActive ? "rounded-md bg-gray-300 px-2 py-1" : "text-[16px]"
                    }
                >
                    Vlog
                </NavLink>
                <NavLink
                    to="/reg"
                    className={({ isActive, isPending }) =>
                        isPending ? "font-medium" : isActive ? "rounded-md bg-gray-300 px-2 py-1" : "text-[16px]"
                    }
                >
                    Register
                </NavLink>
                <NavLink
                    to="/log"
                    className={({ isActive, isPending }) =>
                        isPending ? "font-medium" : isActive ? "rounded-md bg-gray-300 px-2 py-1" : "text-[16px]"
                    }
                >
                    Login
                </NavLink>
            </div>
            <div className="lg:hidden relative">
                <button className="block" onClick={()=>{
                    if(visit){
                        setVisit(false)
                    }
                    else{
                        setVisit(true)
                    }
                }}><FaBars className="text-3xl text-black mt-2"></FaBars></button>
                 {
                    visit?(<div className="flex flex-col space-y-2 menu top-14 z-50">
                        <NavLink onClick={()=>{
                            setVisit(false)
                        }}
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "font-medium" : isActive ? "rounded-md bg-gray-300 px-2 py-1 text-[16px]" : "text-[16px] font-medium" 
                    }
                >
                    Home
                </NavLink>
                
                <NavLink onClick={()=>{
                            setVisit(false)
                        }}
                    to="/quiz"
                    className={({ isActive, isPending }) =>
                        isPending ? "font-medium" : isActive ? "rounded-md bg-gray-300 px-2 py-1 font-medium text-[16px]" : "text-[16px]  font-medium"
                    }
                >
                    Quiz Test
                </NavLink>
                <NavLink onClick={()=>{
                            setVisit(false)
                        }}
                    to="/read_vlog"
                    className={({ isActive, isPending }) =>
                        isPending ? "font-medium" : isActive ? "rounded-md bg-gray-300 px-2 py-1 font-medium text-[16px]" : "text-[16px]  font-medium"
                    }
                >
                    Vlog
                </NavLink>
                <NavLink onClick={()=>{
                            setVisit(false)
                        }}
                    to="/reg"
                    className={({ isActive, isPending }) =>
                        isPending ? "font-medium" : isActive ? "rounded-md bg-gray-300 px-2 py-1 font-medium text-[16px]" : "text-[16px]  font-medium"
                    }
                >
                    Register
                </NavLink>
                <NavLink onClick={()=>{
                            setVisit(false)
                        }}
                    to="/log"
                    className={({ isActive, isPending }) =>
                        isPending ? "font-medium" : isActive ? "rounded-md bg-gray-300 px-2 py-1 font-medium text-[16px]" : " text-[16px] font-medium"
                    }
                >
                    Login
                </NavLink>
                    </div>):(<></>)
                 }
            </div>
            <div className="mt-5 relative">
                 {
                    user?(<button onClick={()=>{
                        if (visible) {
                         setVisible(false)
                     }
                     else {
                         setVisible(true)
                     }
                  }}>
                      <img src={user?.photoURL} 
                      className="w-[50px] h-[50px] rounded-[50%]" alt="" srcset="" />
                  </button>):<></>
                 }
                {
                    visible?(  <div>
                        <ul className="drp z-50">
                          <button onClick={()=>{
                            setVisible(false)
                          }}> <Link to={'/dash'}><p className="text-orange-400 text-[18px]
                           font-medium">Dashbosard</p></Link></button>
                           <button onClick={()=>{
                            setVisible(false)
                            yarnClicked();
                           }} className="flex items-center space-x-2 mt-2"><p className="text-orange-400 text-[18px]
                           font-medium">Logout</p>
                           <FaSignOutAlt className="mt-[2px] text-orange-400"></FaSignOutAlt>
                           </button>
                        </ul>
                    </div>):<div></div>
                }
            </div>
        </div>
    )
}
export default Nav