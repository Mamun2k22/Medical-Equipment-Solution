import React from "react";
import icon from "../../images/service-overview/service-Challenges-icon2.jpg";
import redIcon from "../../images/service-overview/service-Challenges-icon.png";
import image1 from "../../images/service-overview/service-Challenges-1@web.jpg";
import image2 from "../../images/service-overview/service-Challenges-2@web.jpg";
import image3 from "../../images/service-overview/service-Challenges-3@web.jpg";
import image4 from "../../images/service-overview/service-Challenges-4@web.jpg";
import Image from "next/image";
import style from "../../styles/bgMove.module.css";

const Challenges = () => {
  return (
    <section className="flex">
      <div className="lg:w-10/12 my-36 mx-auto px-5 md:px-0">
        <div className="lg:flex lg:gap-x-16">
          <div className="lg:w-[29%]">
            <h1 className="border-t-8 border-[#B70909] w-14"></h1>
            <h1 className="text-3xl lg:text-[40px] font-bold">
              What Challenges are you Facing?
            </h1>
            <p className="pt-10 text-lg text-gray-800 pb-7">
              We provide comprehensive solutions to fulfill your business goals
            </p>
          </div>
          <div className="lg:flex lg:w-[71%]">
            <div className="hidden lg:block">
              <Image src={icon} alt="" className="h-[310px] w-full"></Image>
              <Image
                src={redIcon}
                alt=""
                className="h-40 w-52 bg-[#72171d]"
              ></Image>
            </div>
            <div className="lg:w-1/2">
              <Image
                src={image1}
                alt=""
                className="h-[310px] w-full lg:w-96 "
              ></Image>
              <div
                className={`${style.hoverBgSlide}  hover:text-white py-7 px-3`}
              >
                <h1 className="text-lg font-semibold">
                  {" "}
                  Providing high quality care with efficiency
                </h1>
                <p className={`  `}>
                  Easy to use, quick and reliable results to assist precise
                  diagnosis
                </p>
              </div>
            </div>
            <div className="lg:mt-52 lg:w-1/2 hidden lg:block">
              <div
                className={`${style.hoverBgSlide}  hover:text-white py-7 px-3`}
              >
                <h1 className="text-lg font-semibold">
                  {" "}
                  Full life cycle assets management
                </h1>
                <p className={`  `}>
                  Management from devices commissioning to end of life, from
                  maintenance to repairs
                </p>
              </div>

              <Image
                src={image2}
                alt=""
                className="h-[280px] w-full"
              ></Image>
              <div
                className={`${style.hoverBgSlide}  hover:text-white py-7 px-3`}
              >
                <h1 className="text-lg font-semibold">
                  {" "}
                  Effective service support from manufacturer
                </h1>
                <p className={`  `}>
                  Fast response and strong platforms to support sustainable
                  business growth
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex  lg:-mt-[310px]">
          <div className="lg:flex   ">
            <Image
              src={image3}
              alt=""
              className="h-[310px] w-full lg:w-[418px]"
            ></Image>
            <div
              className={`${style.hoverBgSlide}  hover:text-white py-7 px-5 lg:w-[164px] h-[310px]`}
            >
              <h1 className="text-lg font-semibold">
                {" "}
                Total cost of ownership
              </h1>
              <p className="pt-3 text-gray-800">
                Cost from all aspects of purchased devices are taken into
                consideration
              </p>
            </div>
          </div>
          <div className="-mt-40 lg:mt-0 lg:w-1/2">
            <Image
              src={image4}
              alt=""
              className="h-[310px] w-full lg:w-[350px]"
            ></Image>
            {/* <div
              className={`${style.hoverBgSlide}  hover:text-white py-7 px-3`}
            >
              <h1 className="text-lg font-semibold">
                {" "}
                Providing high quality care with efficiency
              </h1>
              <p className={`  `}>
                Easy to use, quick and reliable results to assist precise
                diagnosis
              </p>
            </div> */}
          </div>
          <div className="lg:mt-52 lg:w-1/2 lg:hidden ">
            <div
              className={`${style.hoverBgSlide}  hover:text-white py-7 px-3`}
            >
              <h1 className="text-lg font-semibold">
                {" "}
                Effective service support from manufacturer
              </h1>
              <p className={`  `}>
                Fast response and strong platforms to support sustainable
                business growth
              </p>
            </div>
            <Image src={image2} alt="" className="h-[280px] w-full   "></Image>
            <div
              className={`${style.hoverBgSlide}  hover:text-white py-7 px-3`}
            >
              <h1 className="text-lg font-semibold">
                {" "}
                Full life cycle assets management
              </h1>
              <p className={`  `}>
                Management from devices commissioning to end of life, from
                maintenance to repairs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
