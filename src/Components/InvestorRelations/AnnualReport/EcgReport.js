/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import image from "../../../images/relations/mindray-2022-esg-report.pdf.thumb.1280.1280.jpg";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const ECGReport = () => {
  const [showReport, setShowReport] = useState(true);
  return (
    <div className="my-28">
      <h1 className="border-t-8  border-[#B70909] w-32 lg:w-14"></h1>
      <div className="flex justify-between border-b-2 pb-5">
        <h1 className="text-5xl lg:text-[38px] text-gray-800 font-bold mt-2">
        ESG Report
        </h1>
        {showReport ? (
          <SlArrowUp
            className="h-9 w-9 lg:h-8 lg:w-8 cursor-pointer"
            onClick={() => setShowReport(false)}
          ></SlArrowUp>
        ) : (
          <SlArrowDown
            className="h-9 w-9 lg:h-8 lg:w-8 cursor-pointer"
            onClick={() => setShowReport(true)}
          ></SlArrowDown>
        )}
      </div>
      {showReport && (
        <div className="pt-10 lg:flex">
          <div className=" lg:w-1/2 lg:px-10 pt-20 pb-12 hover:bg-[#B70909] hover:text-white">
            <div className="flex items-center">
              <Image src={image} alt="" className="h-60 w-72 hidden lg:flex"></Image>
              <p className="text-5xl leading-tight lg:text-[22px] px-5">Mindray 2022 ESG Report</p>
            </div>
            <div className="flex justify-end mt-5">
              <BsArrowRight></BsArrowRight>
            </div>
          </div>
          <div className=" ">
            <div className=" hover:bg-[#B70909] hover:text-white">
              <div className=" px-6 py-8">
                <h1 className="text-5xl leading-tight lg:text-[22px]">
                  Mindray 2021 ESG Report -English.pdf
                </h1>
                <div className="flex justify-end mt-5">
                  <BsArrowRight></BsArrowRight>
                </div>
              </div>
            </div>
            <div className=" hover:bg-[#B70909] hover:text-white">
              <div className=" px-6 py-8">
                <h1 className="text-5xl leading-tight lg:text-[22px]">
                  2020 - Mindray Bio-medical Electronics Co., Ltd. Socia...
                </h1>
                <div className="flex justify-end mt-5">
                  <BsArrowRight></BsArrowRight>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ECGReport;
