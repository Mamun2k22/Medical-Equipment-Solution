import Image from "next/image";
import React from "react";
import image from "../../images/contact/Global (1).png";
import { AiFillWechat, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";

const MindaryGlobal = () => {
  return (
    <div className="w-10/12 lg:w-9/12 mx-auto mb-10">
      <h1 className="text-2xl font-medium">Mindray Global</h1>
      <div className="lg:flex lg:justify-between">
        <div>
          <div className="lg:w-[90%] my-14">
            <div className="flex gap-x-9">
              <h1 className="whitespace-nowrap">Office Address:</h1>
              <h2>
                Mindray Building, Keji 12th Road South, High-tech Industrial
                Park, Nanshan, Shenzhen 518057, P. R. China.
              </h2>
            </div>
            <div className="flex gap-x-[114px] my-5">
              <h1 className="whitespace-nowrap">Tel:</h1>
              <h2>(86-755) 81888997</h2>
            </div>
            <div className="flex gap-x-[108px]">
              <h1 className="whitespace-nowrap">Fax:</h1>
              <h2>(86-755) 26582500, 26582501, 26582680</h2>
            </div>
            <div className="flex gap-x-24 my-5">
              <h1 className="whitespace-nowrap">Email:</h1>
              <h2>intl-market@mindray.com</h2>
            </div>
            <div className="flex gap-x-[72px]">
              <h1 className="whitespace-nowrap">Web Site:</h1>
              <h2>www.mindray.com/en</h2>
            </div>
            <div className="flex gap-x-[90px] my-5">
              <h1 className="whitespace-nowrap">Social:</h1>
              <div className="lg:flex">
                <div className="flex">
                <AiFillYoutube className="border-2 border-gray-300 p-[7px] h-9 w-9"></AiFillYoutube>{" "}
                <BsLinkedin className="border-2 border-gray-300 p-[7px] h-9 w-9"></BsLinkedin>{" "}
                <BsFacebook className="border-2 border-gray-300 p-[7px] h-9 w-9"></BsFacebook>{" "}
                </div>
                 
               <div className="flex">
               <AiOutlineTwitter className="border-2 border-gray-300 p-[7px] h-9 w-9"></AiOutlineTwitter>
                <AiFillWechat className="border-2 border-gray-300 p-[7px] h-9 w-9"></AiFillWechat>
               </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[90%] my-14">
            <div className="flex gap-x-5">
              <h1 className="whitespace-nowrap">Service Address:</h1>
              <h2>
                Mindray Building, Keji 12th Road South, High-tech Industrial
                Park, Nanshan, Shenzhen 518057, P. R. China.
              </h2>
            </div>
            <div className="flex gap-x-[114px] my-5">
              <h1 className="whitespace-nowrap">Tel:</h1>
              <h2>(86-755) 81888997</h2>
            </div>
            <div className="flex gap-x-[108px]">
              <h1 className="whitespace-nowrap">Fax:</h1>
              <h2>(86-755) 26582500, 26582501, 26582680</h2>
            </div>
            <div className="flex gap-x-24 my-5">
              <h1 className="whitespace-nowrap">Email:</h1>
              <h2>service@mindray.com</h2>
            </div>
            <div className="flex gap-x-[72px]">
              <h1 className="whitespace-nowrap">Web Site:</h1>
              <h2>www.mindray.com/en</h2>
            </div>
            <div className="flex gap-x-[90px] my-5">
              <h1 className="whitespace-nowrap">Social:</h1>
              <div className="lg:flex">
                <div className="flex">
                <AiFillYoutube className="border-2 border-gray-300 p-[7px] h-9 w-9"></AiFillYoutube>{" "}
                <BsLinkedin className="border-2 border-gray-300 p-[7px] h-9 w-9"></BsLinkedin>{" "}
                <BsFacebook className="border-2 border-gray-300 p-[7px] h-9 w-9"></BsFacebook>{" "}
                </div>
                 
               <div className="flex">
               <AiOutlineTwitter className="border-2 border-gray-300 p-[7px] h-9 w-9"></AiOutlineTwitter>
                <AiFillWechat className="border-2 border-gray-300 p-[7px] h-9 w-9"></AiFillWechat>
               </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image src={image} alt="" className="w-full lg:w-[370px] h-64"></Image>
        </div>
      </div>
    </div>
  );
};

export default MindaryGlobal;
