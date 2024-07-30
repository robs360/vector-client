import React, { useContext } from "react";
import { AuthContext } from "../Authprovider";

const PostVlog = () => {
    const {user}= useContext(AuthContext)
    return (
        <div className="flex mt-4 w-[97%] mx-auto gap-3">
            
            <div className="min-h-[80vh] w-[500px] flex-grow bg-[#fff5ee98] p-2">
                <form action="" className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div>
                        <span className="text-xl font-medium mr-1">Title:</span>
                        <input type="text" className="
                         text-[17px] font-medium md:w-[320px] p-1 h-[45px] rounded-md
                         border-2 border-gray-400" name="title" id="" />
                    </div>
                    <div>
                        <span className="text-xl font-medium mr-1">Name:</span>
                        <input type="email" value={user?.displayName} className="
                         text-[17px] font-medium md:w-[320px] p-1 h-[45px] rounded-md
                         border-2 border-gray-400" name="email" id="" />
                    </div>
                    <div>
                        <span className="text-xl font-medium mr-1">Email:</span>
                        <input type="email" value={user?.email} className="
                          text-[17px] font-medium md:w-[320px] p-1 h-[45px] rounded-md
                         border-2 border-gray-400" name="email" id="" />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default PostVlog