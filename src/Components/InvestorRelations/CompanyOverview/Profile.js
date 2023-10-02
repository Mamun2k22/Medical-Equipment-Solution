import React, { useState } from "react";
import { RxArrowRight } from "react-icons/rx";
import { SlArrowUp,SlArrowDown } from "react-icons/sl";

const Profile = () => {
const [getProfile, setGetProfile] = useState(true)
  return (
    <div className="lg:w-10/12 mx-auto my-20">
      <h1 className="border-t-8  border-[#B70909] w-14"></h1>
      <div className="flex justify-between border-b-2 pb-5">
      <h1 className="text-3xl lg:text-[38px] text-gray-800 font-bold mt-2">
        Company Profile
      </h1>
     {
        getProfile ?  <SlArrowUp className="h-6 w-6 lg:h-8 lg:w-8 cursor-pointer" onClick={()=>setGetProfile(false)}></SlArrowUp> :
      <SlArrowDown className="h-6 w-6 lg:h-8 lg:w-8 cursor-pointer" onClick={()=>setGetProfile(true)}></SlArrowDown>
     }
      </div>
     {
        getProfile && <div className="hover:bg-[#B70909] hover:text-white text-[22px] px-2 lg:px-10 py-8 lg:w-1/2 mt-10">
        <h1>Mindray Company Presentation (2023)</h1>
         <div className="flex justify-end">
         <RxArrowRight className="h-6 w-8"></RxArrowRight>
         </div>
        </div>
     }
    </div>
  );
};

export default Profile;
