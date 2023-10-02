import React, { useState } from "react";
import Slider from "react-slick";

const TypeNav = () => {
  const [colorChange, setColorChange] = useState("");
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="w-10/12 mx-auto my-20">
      <Slider {...settings} className="border-b-2">
        <h2
          onClick={() => setColorChange("overview")}
          className={
            colorChange === "" || colorChange === "overview"
              ? "text-lg font-semibold  text-[#B70909] cursor-pointer border-b-2 border-[#B70909] pb-8"
              : "text-lg text-gray-800 font-semibold hover:text-[#B70909] cursor-pointer"
          }
        >
          Company Overview
        </h2>
        <h2
          onClick={() => setColorChange("releases")}
          className={
            colorChange === "releases"
              ? "text-lg  font-semibold  text-[#B70909] cursor-pointer border-b-2 border-[#B70909] pb-8"
              : "text-lg text-gray-800 font-semibold hover:text-[#B70909] cursor-pointer"
          }
        >
          Latest Releases
        </h2>
        <h2
          onClick={() => setColorChange("report")}
          className={
            colorChange === "report"
              ? "text-lg   font-semibold  text-[#B70909] cursor-pointer border-b-2 border-[#B70909] pb-8"
              : "text-lg text-gray-800 font-semibold hover:text-[#B70909] cursor-pointer"
          }
        >
          Annual Report
        </h2>
        <li
          onClick={() => setColorChange("governance")}
          className={
            colorChange === "governance"
              ? "text-lg   font-semibold  text-[#B70909] cursor-pointer border-b-2 border-[#B70909] pb-8"
              : "text-lg text-gray-800 font-semibold hover:text-[#B70909] cursor-pointer"
          }
        >
          Governance
        </li>
        <h2
          onClick={() => setColorChange("FAQ")}
          className={
            colorChange === "FAQ"
              ? "text-lg  font-semibold text-[#B70909] cursor-pointer border-b-2 border-[#B70909] pb-8 w-20"
              : "text-lg text-gray-800 font-semibold hover:text-[#B70909] cursor-pointer"
          }
        >
          FAQ
        </h2>
      </Slider>
    </div>
  );
};

export default TypeNav;
