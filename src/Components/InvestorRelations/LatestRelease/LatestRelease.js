/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import Releases from "./Releases";

const LatestRelease = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="lg:flex justify-between">
        <div>
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold">Mindray 300760</h1>
          <h3 className="text-xl mt-5">2023-09-28 16:14:21 CST</h3>
        </div>
        <div className="mt-20">
          <h4 className="text-[10px]">
            Share price is just for reference, not for transaction purpose.
            Mindray doesn't privde any related service.
          </h4>
          <h5 className="text-lg mt-6">*Share price may have 15 minutes delay</h5>
        </div>
        </div>

        <div className="mt-14 lg:mt-0">
          <h1 className="text-3xl font-bold">
            RMB <span className="text-5xl lg:text-6xl">269.81</span>
          </h1>
         <h5 className="mt-4 text-green-400 text-xl font-semibold flex lg:justify-end gap-x-6"> <h6 className="flex gap-x-2"><BiSolidDownArrow className="mt-1"></BiSolidDownArrow> <span>-0.87 </span></h6> <span>-0.32%</span></h5>
        </div>
      </div>
      <Releases></Releases>
    </div>
  );
};

export default LatestRelease;
