import React from "react";
import icon from "../../images/service-overview/service-Challenges-icon2.jpg";
import Image from "next/image";
import image1 from "../../images/service-overview/service-Innovative-1@web.jpg";
import image2 from "../../images/service-overview/service-Innovative-4@web.jpg";
import image3 from "../../images/service-overview/service-Innovative-2@web.jpg";
import style from "../../styles/bgMove.module.css";
const Innovative = () => {
  return (
    <section className="mx-6 lg:mx-0">
      <div className="lg:w-10/12 mx-auto my-5 lg:my-20">
        <h1 className="border-t-8 border-[#B70909] w-14"></h1>
        <h1 className="text-3xl lg:text-[42px] font-bold">
          We Offer <br className="hidden lg:flex"/> Innovative Service
        </h1>
      </div>
      <div className="relative">
        <div className="lg:w-10/12 mx-auto ">
          <div className="lg:flex">
            <div className="flex flex-col-reverse  lg:flex-row">
              <div
                className={`${style.hoverBgSlide} bg-white hover:bg-transparent  lg:pl-14 lg:pr-5 flex items-center lg:h-96 p-5 lg:p-0`}
              >
                <div>
                  <h2 className="text-xl font-semibold pb-6">M-Connect</h2>
                  <p>
                    {" "}
                    To connect your devices inside hospital IT networks and
                    accelerate the development of smart hospitals
                  </p>
                </div>
              </div>
              <Image src={image1} alt="" className="h-96"></Image>
            </div>
            <div className="flex flex-col-reverse lg:flex-col">
              <div
                className={`${style.hoverBgSlide} bg-white hover:bg-transparent lg:px-5 lg:py-2 flex  items-center p-5 lg:p-0`}
              >
                <div>
                  <h2 className="text-xl font-semibold pb-6">
                    {" "}
                    Standardized Laboratory
                  </h2>
                  <p>
                    {" "}
                    Build up smooth lab management workflow to improve sample
                    volume and diagnostic quality
                  </p>
                </div>
              </div>
              <Image src={image2} alt="" className="h-80  "></Image>
            </div>
          </div>
          <div className="lg:flex lg:w-[65.3%] lg:-mt-[52px]">
            <Image src={image3} alt="" className="h-80 lg:w-[81%]"></Image>
            <div
              className={`${style.hoverBgSlide} bg-white hover:bg-transparent px-5  flex items-center lg:w-[19%] p-5 lg:p-0`}
            >
              <div >
                <h2 className="text-xl font-semibold pb-6"> IoT</h2>
                <p>
                  {" "}
                  Integrate your devices into Mindray remote diagnostic network
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={icon}
            alt=""
            className="h-[900px] w-1/2 absolute top-0 -z-50"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Innovative;
