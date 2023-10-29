import React from "react";
import image1 from "../../images/career/s2-1.svg";
import image2 from "../../images/career/s2-2.svg";
import image3 from "../../images/career/s2-3.svg";
import Image from "next/image";

const HealthyCareer = () => {
  return (
    <section className="px-5 lg:px-0 mx-auto lg:w-10/12 lg:mt-80 lg:mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-10">
        <div>
          <Image src={image1} alt="" className="h-[20%] md:h-[30%] w-full"></Image>
          <h1 className="text-4xl text-center mt-10 mb-5">Healthy Career</h1>
          <p className="text-[17.5px] text-gray-700">We create every innovation to meet the needs of the medical staff and deliver value to patients, what you are joining is a career concerning human health.</p>
        </div>
        <div className="-mt-48 md:-mt-96 lg:mt-0">
          <Image src={image2} alt="" className="h-[20%] md:h-[30%] w-full"></Image>
          <h1 className="text-4xl text-center mt-10 mb-5">Global Arena</h1>
          <p className="text-[17.5px] text-gray-700"> We provide products and solutions to customers in more than 190 countries to meet global medical challenges, you can always find a stage to showcase your talent.</p>
        </div>
        <div className="-mt-48 md:-mt-96 lg:mt-0">
          <Image src={image3} alt="" className="h-[20%] md:h-[30%] w-full"></Image>
          <h1 className="text-4xl text-center mt-10 mb-5">Solid Footsteps</h1>
          <p className="text-[17.5px] text-gray-700"> Through sound management and development strategies, we have always maintained steady progress, you can look forward to sustained growth and ample reward.</p>
        </div>
      </div>
    </section>
  );
};

export default HealthyCareer;
