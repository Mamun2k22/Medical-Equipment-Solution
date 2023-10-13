import React from "react";
import image1 from "../../images/service-overview/university-joint-course-training-new-cheapter-for-russian-medical-engineering.thumb.1280.1280.png.thumb.jpg";
import Image from "next/image";

const SuccessStories = () => {
  return (
    <div className="lg:w-10/12 lg:mx-auto mt-10 lg:mt-40 mb-20 mx-6">
      <div className="my-14">
        <h1 className="border-t-8 border-[#B70909] w-14"></h1>
        <h1 className="text-[42px] font-medium">Success Stories</h1>
      </div>
      <div className="lg:flex gap-x-10">
        <Image src={image1} alt="" className="h-80 w-full"></Image>
        <div className="flex items-center p-5 lg:p-0">
          <div>
            <h1 className="text-xl font-semibold">
              University Joint Course Training, New chapter for Russian Medical
              Engineering
            </h1>
            <p className="pt-5 text-gray-800">
              With the continuous breakthrough of Mindray products in high-end
              hospitals in Russia, Mindray brand has gradually gained customer
              recognition in high-end hospitals of Russia, more and more
              equipment has entered the hospital.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
