/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import img1 from "../../../images/solutions/image1.jpg";
import img2 from "../../../images/solutions/image2.jpg";
import Image from "next/image";
import style from "../../../styles/bgMove.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Events, animateScroll as scroll } from "react-scroll";

const ProductsSolutions = () => {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "linear",
    });

    // Listen for scroll events using react-scroll
    Events.scrollEvent.register("begin", function () {
      AOS.refresh(); // Reset AOS animations on scroll
    });

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);
  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="lg:w-10/12 mx-auto mt-40 pb-40 relative px-5 md:px-10"
    >
      <div className="lg:flex gap-10">
        <div className="lg:basis-1/5">
          <h1 className="border-t-8  border-[#B70909] w-14"></h1>
          <h1 className="text-3xl lg:text-4xl font-bold lg:w-72">
            Products & Solutions
          </h1>
          <p className="lg:w-72 my-10 text-gray-800">
            Dive deeper into our portfolio which is releasing the potential of
            healthcare industry.
          </p>
          <button className="border border-[#B70909] text-[#B70909] font-semibold px-6 py-[11px]   text-xs hover:bg-[#B70909] hover:text-white hidden lg:flex">
            Explore More
          </button>
        </div>
        <div className="lg:basis-1/2">
          <div>
            <div className="lg:basis-1/2">
              <div className="card lg:card-side">
                <figure>
                  <img
                    src="https://www.mindray.com/content/dam/xpace/en/site/home/product-&-solution/m1000-home-pc.jpg"
                    alt=""
                    className="lg:h-[300px] lg:w-[440px] hover:scale-105 ease-in-out duration-700"
                  />
                </figure>
                <div
                  className={`${style.hoverBgSlide} ease-in-out duration-700`}
                >
                  <div className="lg:w-32 lg:ml-5 pt-10 p-5 ">
                    <h2 className="lg:-ml-5 text-lg font-semibold mb-5">
                      M1000
                    </h2>
                    <p className="lg:-ml-5">
                      High-performance Chemistry and Immunoassay Integrated
                      Solution
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:basis-1/2">
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="card lg:card-side cursor-pointer flex flex-col-reverse"
              >
                <div
                  className={`${style.hoverBgSlide} ${
                    isHovered ? style.hoverBgSlide : ""
                  }`}
                >
                  <div className="lg:w-[150px] ease-in-out duration-700 p-5 lg:pt-10 ">
                    <h2 className="text-lg font-semibold mb-5 lg:px-2">
                      Resona R9 Platinum Edition
                    </h2>
                    <p className="lg:px-2 ">
                      Multi-parametric Ultrasound Solution
                    </p>
                  </div>
                </div>
                <figure>
                  <img
                    src="https://www.mindray.com/content/dam/xpace/en/site/home/product-&-solution/resona-r9-platinum-home-pc.jpg"
                    alt=""
                    className="lg:h-[300px] hover:scale-105 ease-in-out duration-700"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:basis-1/2 lg:flex">
          <div className="lg:basis-1/2">
            <div className=" ">
              <figure className=" ">
                <img
                  src="https://www.mindray.com/content/dam/xpace/en/site/home/product-&-solution/new-a7-home-pc.jpg"
                  alt=""
                  className="lg:h-[300px] w-full  "
                />
              </figure>
              <div
                // onMouseEnter={() => setIsHovered(true)}
                // onMouseLeave={() => setIsHovered(false)}
                className={`${style.hoverBgSlide} lg:w-72 lg:h-40 lg:pl-5 p-5 lg:pr-0 pt-10 lg:-ml-10`}
              >
                <h2 className={"text-xl font-semibold"}>A7</h2>
                <p className={"mt-5"}>
                  An integrated solution for precise anesthesia and lean
                  management.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:basis-1/2">
            <div className="flex flex-col-reverse lg:block">
              <div
                className={`${style.hoverBgSlide} lg:h-[300px] lg:w-48 lg:-mr-28 px-5 pt-10 `}
              >
                <h2 className="text-lg font-semibold">M-Connect IT Solution</h2>
                <p>
                  Universal central monitoring platform which integrates bedside
                  medical devices together.
                </p>
              </div>

              <figure className="lg:-mr-24">
                <img
                  src="https://www.mindray.com/content/dam/xpace/en/site/home/product-&-solution/s2-5-large@web@2x.jpg"
                  alt=""
                  className="h-[300px] md:h-full lg:h-[300px]  w-full"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <button className="border border-[#B70909] text-[#B70909] font-semibold px-6 py-[11px]   text-xs hover:bg-[#B70909] hover:text-white mt-10 flex lg:hidden">
        Explore More
      </button>
    </section>
  );
};

export default ProductsSolutions;
