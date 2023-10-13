import React from "react";
import bg from "../images/service-overview/service-kv-1@web.jpg";
import NavBarEffect from "@/Components/Shared/NavBar/NavBarEffect";
import Challenges from "@/Components/ServicesOverview/Challenges";
import Innovative from "@/Components/ServicesOverview/Innovative";
import ServiceSolutions from "@/Components/ServicesOverview/ServiceSolutions";
import SuccessStories from "@/Components/ServicesOverview/SuccessStories";

const Services = () => {
  return (
    <div>
      <div
        className={`bg-[url("https://www.mindray.com/content/dam/xpace/en/site/service/service-kv-1@web.jpg")] bg-cover bg-no-repeat w-full h-[600px] relative`}
      >
        <NavBarEffect></NavBarEffect>
      </div>
      <div className="w-10/12 mx-auto">
        <div className="absolute top-60">
        <h1 className="flex items-center text-[50px] text-white  w-[56%] leading-tight">
          Closer Service Better Healthcare
        </h1>
        <button className="border border-white text-white px-6 py-[10px] hover:bg-[#B70909] hover:border-none text-xs mt-5">Contact Us</button>
        </div>
      </div>
      <Challenges></Challenges>
      <Innovative></Innovative>
      <ServiceSolutions></ServiceSolutions>
      <SuccessStories></SuccessStories>
    </div>
  );
};

export default Services;
