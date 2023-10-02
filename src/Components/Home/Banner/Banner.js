/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import smallImage from "../../../images/banner/s4-bg-2@web.png";
import Image from "next/image";
import NavBarEffect from "@/Components/Shared/NavBar/NavBarEffect";

const Banner = () => {
  const [activeColor, setActiveColor] = useState(0);
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (currentSlide) => {
      const stringValues = [
        "String Value 1",
        "String Value 2",
        "String Value 3",
        "String Value 4",
      ];
      setActiveColor(stringValues[currentSlide]); // Update activeIndex when a slide changes
    },
  };

  const handleButtonClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
    setActiveColor(index); // Update activeIndex when a button is clicked
  };
  // console.log(activeIndex)
  return (
    <div className="relative mb-20">
      <div className="overflow-hidden">
        <Slider {...settings} ref={sliderRef}>
          <div className="relative w-10/12 mx-auto">
            <>
              <img
                className="h-screen lg:h-full"
                src="https://www.mindray.com/content/dam/xpace/en/innovation/love-for-more-smiles-for-all/homepage-banner-pc.png"
                alt=""
              />
            </>
            <div className="absolute top-52 md:top-56 lg:top-52 left-auto md:left-12 px-5 md:px-auto lg:px-0 lg:left-32 text-white md:w-11/12 mx-auto">
              <h1 className="text-4xl md:text-[70px] lg:text-[50px] leading-tight">
                Love for More, Smiles fro All
              </h1>
              <p className="mt-5 font-medium text-xl lg:text-base">
                Mindray is partnering with Operation Smile to fulfill a 10-year
                commitment to sowing seeds <br className="hidden lg:flex" /> of
                hope.
              </p>
              <button className="btn mt-9 border  px-5 py-[10px] text-xs">
                Learn more
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-screen lg:h-full"
              src="https://www.mindray.com/content/dam/xpace/zh/homepage/banner/mindray-a9-anaesthsia-workstation-will-train-the-next-generation-of-healthcare-engineers-pc.png"
              alt=""
            />
            <div className="absolute top-52 md:top-56 lg:top-52 left-auto md:left-12 px-5 md:px-auto lg:px-0 lg:left-32 text-white md:w-11/12 mx-auto">
              <h1 className="text-4xl md:text-[70px] lg:text-[50px] leading-tight">
                Leading the Way: Mindray <br className="hidden lg:flex" />{" "}
                Supports Top Training Center <br className="hidden lg:flex" />{" "}
                in the UK
              </h1>
              <p className="mt-5 font-medium text-xl lg:text-base">
                With its intuitive design and easy to use software, the A9
                Anesthesia system was seen as the{" "}
                <br className="hidden lg:flex" /> optimal solution for Eastwood
                Park Training Center.
              </p>
              <button className="btn mt-9 border px-5 py-[10px] text-xs">
                Explore More
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-screen lg:h-full"
              src="https://www.mindray.com/content/dam/xpace/en/site/home/banner/cairns-hospital-home-pc.jpg"
              alt=""
            />
            <div className="absolute top-52 md:top-56 lg:top-52 left-auto md:left-12 px-5 md:px-auto lg:px-0 lg:left-32 text-white md:w-11/12 mx-auto">
              <h1 className="text-4xl md:text-[70px] lg:text-[50px] leading-tight">
                Emergency Care Reimagined
              </h1>
              <p className="mt-5 font-medium text-xl lg:text-base">
                In Australia, the adoption of the latest high-end POC ultrasound
                - Mindray TEX20 at Cairns <br className="hidden lg:flex" />{" "}
                Hospital, Queensland, empowers clinicians to cope with
                challenges in the Emergency <br className="hidden lg:flex" />{" "}
                department.
              </p>
              <button className="btn mt-9 border  px-5 py-[10px] text-xs">
                Explore more
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              className="h-screen lg:h-full"
              src="https://www.mindray.com/content/dam/xpace/zh/homepage/banner/cutting-edge-hematology-technology-solves-world-problems-pc.jpg"
              alt=""
            />
            <div className="absolute top-52 md:top-56 lg:top-52 left-auto md:left-12 px-5 md:px-auto lg:px-0 lg:left-32 text-white md:w-11/12 mx-auto">
              <h1 className="text-4xl md:text-[70px] lg:text-[50px] lg:w-7/12 leading-tight">
                Solving Laboratory Testing Challenges with Advanced Hematology
                Technology
              </h1>
              <p className="mt-5 font-medium text-xl lg:text-base">
                Mindray has presented its cutting-edge scientific posters at the
                36th ISLH International <br className="hidden lg:flex" />{" "}
                Society for Laboratory Hematology Congress.
              </p>
              <button className="btn mt-9 border  px-5 py-[10px] text-xs">
                Explore more
              </button>
            </div>
          </div>
        </Slider>
        <div className="absolute bottom-[6px]">
          <Image
            src={smallImage}
            alt=""
            className="h-[64px] md:h-24 w-5/12 md:w-11/12"
          ></Image>
        </div>
        <div>
          <div className="flex gap-5 absolute bottom-20 md:bottom-32 lg:bottom-[70px] left-16 md:left-32  lg:left-[550px]">
            <div
              onClick={() => handleButtonClick(0)}
              className={
                activeColor === 0 || activeColor === "String Value 1"
                  ? "border-b-2 border-[#B70909] w-20 md:w-40 ease-in-out duration-700"
                  : "border-b-2 border-white w-10 md:w-20 ease-in-out duration-700 cursor-pointer"
              }
            ></div>
            <div
              onClick={() => handleButtonClick(1)}
              className={
                activeColor === "String Value 2"
                  ? "border-b-2 border-[#B70909] w-20 md:w-40 ease-in-out duration-700"
                  : "border-b-2 border-white w-10 md:w-20 ease-in-out duration-700 cursor-pointer"
              }
            ></div>
            <div
              onClick={() => handleButtonClick(2)}
              className={
                activeColor === "String Value 3"
                  ? "border-b-2 border-[#B70909] w-20 md:w-40 ease-in-out duration-700"
                  : "border-b-2 border-white w-10 md:w-20 ease-in-out duration-700 cursor-pointer"
              }
            ></div>
            <div
              onClick={() => handleButtonClick(3)}
              className={
                activeColor === "String Value 4"
                  ? "border-b-2 border-[#B70909] w-20 md:w-40 ease-in-out duration-700"
                  : "border-b-2 border-white w-10 md:w-20 ease-in-out duration-700 cursor-pointer"
              }
            ></div>
          </div>
        </div>
      </div>
      {/* <div className="hidden lg:flex">
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
      </div> */}

      {/* <div className="hidden lg:flex">
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
      </div> */}

      {/* <div
        className={
          isOpen
            ? "absolute top-0    bg-white w-full lg:hidden"
            : "absolute  top-0 text-white bg-white  w-full   lg:hidden"
        }
      >
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen}></NavBar>
      </div> */}
      {/* <div className="divider absolute top-6 hidden lg:flex"></div> */}

      <NavBarEffect></NavBarEffect>
    </div>
  );
};

export default Banner;
