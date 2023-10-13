import React from "react";
import image1 from "../../images/service-overview/customer-care.thumb.1280.1280.png";
import image2 from "../../images/service-overview/technical-services.thumb.1280.1280.png";
import image3 from "../../images/service-overview/spare-parts-support.thumb.1280.1280.jpg";
import image4 from "../../images/service-overview/training-and-education.thumb.1280.1280.jpg";
import image5 from "../../images/service-overview/m-cloud-platform.thumb.1280.1280.jpg";
import image6 from "../../images/service-overview/quality.thumb.1280.1280.png";
import Image from "next/image";

const ServiceSolutions = () => {
  return (
    <div className="lg:w-10/12 lg:mx-auto mx-6 mt-32 lg:mb-20">
      <div className="lg:mb-20 mb-10">
        <h1 className="border-t-4 border-[#B70909] w-14"></h1>
        <h1 className="text-4xl lg:text-5xl text-gray-800 mt-2">Service Solutions</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-5 lg:gap-y-20">
        <div>
          <Image src={image1} alt="" className="h-80 w-full"></Image>
          <div className="hover:text-[#B70909] py-5">
            <h1 className="text-xl font-semibold pb-3">Customer care center</h1>
            <p className="text-[17px] text-gray-800">
              Our specialists help you solve the problem with our global call
              center network whenever and wherever...
            </p>
          </div>
        </div>
        <div>
          <Image src={image2} alt="" className="h-80 w-full"></Image>
          <div className="hover:text-[#B70909] py-5">
            <h1 className="text-xl font-semibold pb-3">
              Technical support center
            </h1>
            <p className="text-[17px] text-gray-800">
              Fast response to your technical inquiry and access to our
              technical documents
            </p>
          </div>
        </div>
        <div>
          <Image src={image3} alt="" className="h-80 w-full"></Image>
          <div className="hover:text-[#B70909] py-5">
            <h1 className="text-xl font-semibold pb-3">Spare parts center</h1>
            <p className="text-[17px] text-gray-800">
              Warehouses are set up in different regions and countries to
              support fast services
            </p>
          </div>
        </div>
        <div>
          <Image src={image4} alt="" className="h-80 w-full"></Image>
          <div className="hover:text-[#B70909] py-5">
            <h1 className="text-xl font-semibold pb-3">Training center</h1>
            <p className="text-[17px] text-gray-800">
            Established in different regions and countries to empower certificated technical staffs
            </p>
          </div>
        </div>
        <div>
          <Image src={image5} alt="" className="h-80 w-full"></Image>
          <div className="hover:text-[#B70909] py-5">
            <h1 className="text-xl font-semibold pb-3">CRM platform</h1>
            <p className="text-[17px] text-gray-800">
            Free to Mindray distributors and make all customer calls visible and traceable
            </p>
          </div>
        </div>
        <div>
          <Image src={image6} alt="" className="h-80 w-full"></Image>
          <div className="hover:text-[#B70909] py-5">
            <h1 className="text-xl font-semibold pb-3">Quality</h1>
            <p className="text-[17px] text-gray-800">
            Quality is the lifeblood of Mindray and our products, which runs throughout our design, supply...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSolutions;
