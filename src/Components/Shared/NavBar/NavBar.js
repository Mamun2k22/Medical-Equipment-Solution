import Link from "next/link";
import React, { useState } from "react";
import { FiSearch, FiUser, FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { TfiWorld } from "react-icons/tfi";

const NavBar = ({ isOpen, setIsOpen }) => {
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex justify-between w-10/12 mx-auto">
        <div className="flex justify-evenly gap-32">
         <Link href={"/"}> <h1 className="text-3xl mt-4 lg:-mt-2 font-semibold">Mindary</h1></Link>
          <ul className="hidden  lg:flex gap-10">
            <li className="hover:border-b-2 border-[#B70909] cursor-pointer">Products and solution</li>
            <li className="hover:border-b-2 border-[#B70909] cursor-pointer">Innovation</li>
            <li className="hover:border-b-2 border-[#B70909] cursor-pointer">Services</li>
            <li className="hover:border-b-2 border-[#B70909] cursor-pointer">ESG</li>
            <Link href={"/career"}><li className="hover:border-b-2 border-[#B70909] cursor-pointer">Career</li></Link>
            <li className="hover:border-b-2 border-[#B70909] cursor-pointer">About us</li>
          </ul>
        </div>
        <ul className="flex gap-5 lg:gap-10">
          {isOpen ? (
            <li className="pt-5 h-10 w-10 flex lg:hidden">
              <RxCross2 onClick={handleOpen}></RxCross2>
            </li>
          ) : (
            <>
              <li className="pt-2 mt-5 lg:mt-0">
                <FiSearch></FiSearch>
              </li>
              <li className="pt-2 h-8 w-8 mt-5 lg:mt-0">
                <FiUser></FiUser>
              </li>
              <li className="pt-2 h-10 w-10 flex lg:hidden mt-5">
                <FiMenu onClick={handleOpen}></FiMenu>
              </li>
            </>
          )}
        </ul>
      </div>

      <ul
        className={
          isOpen
            ? "block lg:hidden  ease-in-out duration-500 pt-5"
            : "block lg:hidden pt-5 ease-in-out duration-500 -mt-[700px]"
        }
      >
        <li className="border-t border-gray-400 py-3 px-8 md:px-[70px]">
          Products and solution
        </li>
        <li className="border-t border-gray-400 py-3 px-8 md:px-[70px]">Innovation</li>
        <li className="border-t border-gray-400 py-3 px-8 md:px-[70px]">Services</li>
        <li className="border-t border-gray-400 py-3 px-8 md:px-[70px]">ESG</li>
       <Link href={"/career"}> <li className="border-t border-gray-400 py-3 px-8 md:px-[70px]">Career</li></Link>
        <li className="border-t border-b border-gray-400 py-3 px-8 md:px-[70px]">
          About us
        </li>
        <li className='flex gap-5 text-xs border-t border-gray-400 py-3 px-8 md:px-[70px]'><Link href={"/media-center"}>Media Center</Link> <span></span></li>
       <li className='flex gap-5 text-xs border-t border-gray-400 py-3 px-8 md:px-[70px]'><Link href={"/investor-relations"}>Investors Relations</Link> <span></span></li>
       <li className='flex gap-5 text-xs border-t border-gray-400 py-3 px-8 md:px-[70px]'><Link href={"/contact"}>Contact Us</Link> <span></span></li>
       <li className='text-xs flex gap-2 border-t border-b border-gray-400 py-3 px-8 md:px-[70px]'> <TfiWorld className='pt-[2px]'></TfiWorld> Select Region / Language</li>
      </ul>
    </div>
  );
};

export default NavBar;
