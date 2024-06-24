import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="mt-6 w-[97%] mx-auto font-medium flex space-x-2 items-center">
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
            </NavLink><div>

           </div>
        </div>
    )
}
export default Nav