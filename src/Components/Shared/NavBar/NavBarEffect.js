import React, { useState } from "react";
import NavBar from "./NavBar";
import TopNavBar from "./TopNavBar";

const NavBarEffect = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div>
        <div className="hidden lg:flex">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={
              isHovered
                ? "absolute top-0 right- p-3 text-white bg-[#B70909] w-full"
                : "absolute top-0  p-3 text-white  w-full"
            }
          >
            <TopNavBar></TopNavBar>
          </div>
        </div>
        <div className="border-t absolute top-10 w-full hidden lg:flex"></div>
        <div className="hidden lg:flex">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={
              isHovered
                ? "absolute pt-4 pb-3  top-0 lg:top-10 text-black bg-white w-full"
                : "absolute top-2 lg:top-10 pt-4 pb-3 text-white w-full"
            }
          >
            <NavBar></NavBar>
          </div>
        </div>
        <div
          className={
            isOpen
              ? "absolute top-0    bg-white w-full lg:hidden"
              : "absolute  top-0 text-white bg-white  w-full   lg:hidden"
          }
        >
          <NavBar isOpen={isOpen} setIsOpen={setIsOpen}></NavBar>
        </div>
      </div>
    </div>
  );
};

export default NavBarEffect;
