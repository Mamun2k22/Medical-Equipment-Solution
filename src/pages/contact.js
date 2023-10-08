import ContactUsPart from "@/Components/MindaryGlobal/ContactUs";
import MindaryGlobal from "@/Components/MindaryGlobal/MindaryGlobal";
import NavBar from "@/Components/Shared/NavBar/NavBar";
import TopNavBar from "@/Components/Shared/NavBar/TopNavBar";
import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const ContactUs = () => {
  const [showGlobal, setShowGlobal] = useState(false);
  const [showDefault, setShowDefault] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleGlobal=()=>{
    setShowGlobal(!showGlobal)
    setShowDefault(false)
  }
  const handleDefault=()=>{
    setShowDefault(!showDefault)
    setShowGlobal(false)
  }
  return (
    <div>
      <div className="pt-2 pb-3 text-white bg-[#B70909] hidden lg:block">
        <TopNavBar></TopNavBar>
      </div>
      <div className="lg:pt-3 lg:border-b-2 lg:pb-3">
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen}></NavBar>
      </div>
      <div className="w-10/12 mx-auto my-20 lg:my-10">
        <div>
        <h1 className="border-t-8 border-[#B70909] w-16"> </h1>
        <h1 className="text-4xl lg:text-[44px] font-bold mt-3">Contact Mindray</h1>
        </div>
        <div className="lg:flex gap-x-10 my-10">
          <div>
            <div className="flex justify-between border-b border-gray-800 pb-3 lg:w-80 relative">
              <h1 className="  text-gray-800 font-bold">Global</h1>
              {showGlobal ? (
                <SlArrowUp
                  className="cursor-pointer"
                  onClick={handleGlobal}
                ></SlArrowUp>
              ) : (
                <SlArrowDown
                  className="cursor-pointer"
                  onClick={handleGlobal}
                ></SlArrowDown>
              )}
            </div>
            {showGlobal && (
              <div className="w-10/12 lg:w-80 h-52 overflow-scroll absolute shadow-2xl z-10 bg-white bg-opacity-100 p-4">
                <ul>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Global
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Argentina
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Australia
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Brazil
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Canada
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Chile
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    China
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Colombia
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Egypt
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    France
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Germany
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    India
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Indonesia
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Italy
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Korea
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Malaysia
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Mexico
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Morocco
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Netherlands
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Peru
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Philippines
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Poland
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Russia
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Saudi Arabia
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    South Africa
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Spain
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Thailand
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Turkey
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    United Arab Emirates
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    United Kingdom
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    United States
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Uzbekistan
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer">
                    Vietnam{" "}
                  </li>
                  <li className="pt-5 font-medium hover:text-[#B70909] cursor-pointer"></li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div className="flex justify-between border-b border-gray-800 pb-3 lg:w-80 mt-8 lg:mt-0 relative">
              <h1 className="  text-gray-800 font-bold">Default</h1>
              {showDefault ? (
                <SlArrowUp
                  className=" cursor-pointer"
                  onClick={handleDefault}
                ></SlArrowUp>
              ) : (
                <SlArrowDown
                  className=" cursor-pointer"
                  onClick={handleDefault}
                ></SlArrowDown>
              )}
            </div>
            {showDefault && (
              <div className="overflow-scroll absolute shadow-2xl z-10 bg-white bg-opacity-100 w-10/12 lg:w-80 p-4">
                <ul>
                  <li className="pt-5 hover:text-[#B70909] cursor-pointer">Default</li>
                  <li className="pt-5 hover:text-[#B70909] cursor-pointer">Office</li>
                  <li className="pt-5 hover:text-[#B70909] cursor-pointer">Service</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* <div className="my-10">
          <h1 className="text-[32px] font-medium">Mindray Global</h1>
        </div> */}
      </div>
      <MindaryGlobal></MindaryGlobal>
      <ContactUsPart></ContactUsPart>
    </div>
  );
};

export default ContactUs;
