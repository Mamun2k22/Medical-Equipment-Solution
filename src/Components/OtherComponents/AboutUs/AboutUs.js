/* eslint-disable @next/next/no-img-element */

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export function AboutUs() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://www.mindray.com/content/dam/xpace/en/site/home/s4-2-2@web.jpg",
    "https://www.mindray.com/content/dam/xpace/en/site/home/s4-2-3@web.jpg",
    "https://www.mindray.com/content/dam/xpace/en/site/home/s4-2-1@web.jpg",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      // Calculate the index of the next image, looping back to the first image if necessary
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, 2000); // Change the image every 1000 milliseconds (1 second)

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, [currentImageIndex, images]);

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
    <div className="mt-[1050px] md:mt-[1100px] lg:mt-[550px] px-5 md:px-10 lg:w-10/12 mx-auto lg:flex gap-10 md:mb-96">
      <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" className="basis-1/5">
      <h1 className="border-t-8  border-[#B70909] w-14"></h1>
        <h1 className="text-4xl font-bold mb-5">About Us</h1>

        <p className="mb-10 text-gray-700 font-medium">
          Mindray is a innovative global provider of medical devices and
          solutions. Discover our voyage of healthcare from China to the world.
        </p>
        <button className="border border-[#B70909] text-[#B70909] font-semibold px-6 py-[11px]   text-xs hover:bg-[#B70909] hover:text-white mb-10 lg:mb-0">
          Explore More
        </button>
      </div>
      <div className="basis-4/5 relative">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className=" "
        >
          <img
            className="h-full w-[750px] lg:ml-[100px]"
            src={images[currentImageIndex]}
            alt=""
          />
        </div>
        <img
          src="https://www.mindray.com/static/img/home/s4-bg@web.png"
          alt=""
          className="absolute top-0 lg:-top-[79px] -z-50 hidden lg:flex"
        />

        <img
          className="absolute bottom-0 w-1/2 lg:full"
          src="https://www.mindray.com/static/img/home/s4-bg-2@web.png"
          alt=""
        />
        <img
          data-aos="fade-up"
          className="absolute -left-[284px] -bottom-24 lg:-bottom-[74px] w-96 h-[270px] hidden lg:flex"
          src="https://www.mindray.com/content/dam/xpace/en/site/home/s4-1@web.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
