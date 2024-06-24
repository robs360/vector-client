import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="mt-6 w-[97%] mx-auto font-medium flex space-x-3 items-center">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "font-medium" : isActive ? "rounded-md bg-gray-300 px-2 py-1" : "text-[16px]"
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/postvlog"
                className={({ isActive, isPending }) =>
                    isPending ? "font-medium" : isActive ? "rounded-md bg-gray-300 px-2 py-1" : "text-[16px]"
                }
            >
                Post Vlog
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
                to="/redvlog"
                className={({ isActive, isPending }) =>
                    isPending ? "font-medium" : isActive ? "rounded-md bg-gray-300 px-2 py-1" : "text-[16px]"
                }
            >
                read Vlog
            </NavLink>
        </div>
    )
}
export default Nav