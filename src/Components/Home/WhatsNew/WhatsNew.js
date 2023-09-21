/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import style from "../../../styles/whatsnew.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Events, animateScroll as scroll } from "react-scroll";

const WhatsNew = () => {
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
    <section className="relative mx-5 md:mx-10 lg:mx-0">
      <div className="lg:w-8/12 mx-auto flex lg:justify-between ">
        <div
          className={
            "bg-gray-200 h-96  rounded-r-full transform ease-in-out duration-700 hidden lg:inline"
          }
        >
          <h1 className="invisible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt x{" "}
          </h1>
        </div>
        <div>
          <h1 className="text-3xl font-bold">What’s New</h1>
          <h3>Explore our latest trends and activities.</h3>
        </div>
      </div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="lg:flex lg:w-10/12 mx-auto absolute top-28 lg:right-20"
      >
        <div className="basis-3/4 relative">
          <img
            className="lg:h-[550px] w-full"
            src="https://www.mindray.com/content/xpace/en/events/hs-ctnl-nt-probnp-assays-launch-event.thumb.1280.1280.png"
            alt=""
          />
          {/* <img
            className="h-[550px] w-full"
            src="https://www.mindray.com/content/xpace/en/media-center/press/a-series-anesthesia-system-upgrades-enhance-safety-efficiency.thumb.1280.1280.png"
            alt=""
          /> */}

          <div
            className={`${style.hoverBgSlide}  absolute bottom-0 w-2/3 p-8 pt-5 border-b border-r border-gray-300 hover:border-none hidden lg:flex`}
          >
            <div className="relative">
              <small>
                <span
                  className={
                    isHovered
                      ? " hover:text-white pl-16"
                      : "text-[#B70909] pl-16"
                  }
                >
                  Press
                </span>{" "}
                | 2023-08-13
              </small>
              <h1 className="text-[16px] font-semibold flex justify-end pl-16 mt-5">
                Mindray Introduces Innovative Upgrades to A Series Anesthesia
                Systems for Enhanced Patient Safety and Efficiency
              </h1>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="h-1/2 lg:h-[169px] w-56 bg-[#B70909] absolute -z-50 lg:z-50 -left-[150px] -bottom-5 lg:bottom-0   lg:rounded-r-none lg:rounded-b-none lg:rounded-full"
          ></div>
          <div className="h-1/2 w-1/2 bg-[#B70909] absolute -bottom-5 -z-50 flex lg:hidden"></div>
        </div>
        <div className="mt-10 lg:mt-0 lg:basis-2/4 lg:h-[545px] overflow-y-scroll">
          <img
            className="h-52 w-10/12 mb-5 hidden lg:flex"
            src="https://www.mindray.com/content/xpace/en/media-center/blogs/hs-ctni-empowering-heart-risk-assessment.thumb.1280.1280.png"
            alt=""
          />
          {/* <img
            className="h-52 w-10/12 mb-5"
            src="https://www.mindray.com/content/xpace/en/events/lab-case-contest-apfcb.thumb.1280.1280.png"
            alt=""
          /> */}
          <div className="lg:pl-5 lg:pr-10 lg:mr-10">
            <div>
              <small>
                <span className="text-[#B70909]">Academic</span> | 2023-08-13
              </small>
              <h1 className="text-[16.5px] font-semibold lg:flex lg:justify-end mt-5">
                Announcement on "APECB Laboratory Medicine Case Contest"
              </h1>
              <div className="divider"></div>
            </div>

            <div>
              <small>
                <span className="text-[#B70909]">Blog</span> | 2023-08-13
              </small>
              <h1 className="text-[16.5px] font-semibold lg:flex lg:justify-end mt-5">
                Unleashing the Potential of Multi-Parametric Imaging
              </h1>
              <div className="divider"></div>
            </div>

            <div>
              <small>
                <span className="text-[#B70909]">Academic</span> | 2023-08-13
              </small>
              <h1 className="text-[16.5px] font-semibold mt-5">WICC 2023</h1>
            </div>
            <div>
              <small>
                <span className="text-[#B70909]">Blog</span> | 2023-08-13
              </small>
              <h1 className="text-[16.5px] font-semibold lg:flex lg:justify-end mt-5">
                Unleashing the Potential of Multi-Parametric Imaging
              </h1>
              <div className="divider"></div>
            </div>
            <div>
              <small>
                <span className="text-[#B70909]">Press</span> | 2023-08-13
              </small>
              <h1 className="text-[16.5px] font-semibold mt-5">
                Mindray Adds BeneFusion MRI Station to Its Infusion Management
                System to Enhance Full...
              </h1>
              <div className="divider"></div>
            </div>
            <div className="flex gap-10 mb-10">
              <button className="text-xs text-[#B70909] border border-[#B70909] px-6 py-2">
                More News
              </button>
              <button className="text-xs text-[#B70909] border border-[#B70909] px-6 py-2">
                More Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
