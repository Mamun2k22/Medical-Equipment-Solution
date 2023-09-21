import React from "react";
import { PhoneCategory } from "./PhoneCategory";

const Categories = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="w-10/12 mx-auto hidden lg:flex justify-between pt-10 pb-20 text-[13px]">
        <ul >
          <li className="pb-5 font-bold">Products</li>
          <li className="pb-5">Patient Monitoring</li>
          <li className="pb-5">Ultrasound</li>
          <li className="pb-5">Radiology</li>
          <li className="pb-5">AED</li>
          <li className="pb-5">Defibrillation System</li>
          <li className="pb-5">Anesthesia</li>
          <li className="pb-5">Hematology</li>
          <li className="pb-5">Chemistry</li>
          <li className="pb-5">Chemiluminescence Immunoassay</li>
        </ul>
        <ul>
          <li className="pb-5 font-bold">Solutions</li>
          <li className="pb-5">Hospitalwide Solution</li>
          <li className="pb-5">Emergency Care</li>
          <li className="pb-5">Critical Care</li>
          <li className="pb-5">Perioperative Care</li>
          <li className="pb-5">Medical Imaging</li>
          <li className="pb-5">Laboratory Diagnostics</li>
          <li className="pb-5">Minimally Invasive Surgery</li>
          <li className="pb-5">Resource Center</li>
        </ul>
        <ul>
          <li className="pb-5 font-bold">Services</li>
          <li className="pb-5">Training and Education</li>
          <li className="pb-5">Patient Monitoring Accessories</li>
        </ul>
        <ul>
          <li className="pb-5 font-bold">Media Center</li>
          <li className="pb-5">Events & Activities</li>
          <li className="pb-5">Events & Activities</li>
          <li className="pb-5">News</li>
          <li className="pb-5">Blog</li>
          <li className="pb-5">Press</li>
          <li className="pb-5">Career</li>
          <li className="pb-5">Join Us</li>
        </ul>
        <ul>
          <li className="pb-5 font-bold">About Us</li>
          <li className="pb-5">Purpose</li>
          <li className="pb-5">Perspective</li>
          <li className="pb-5">Our Business</li>
          <li className="pb-5">History</li>
          <li className="pb-5">Our Culture</li>
          <li className="pb-5">ESG</li>
          <li className="pb-5">Investor Relations</li>
          <li className="pb-5">Virtual Tour with Mindray</li>
          <li className="pb-5">Covid-19 Response</li>
          <li className="pb-5">Contact Information</li>
          <li className="pb-5">Contact Us</li>
        </ul>
      </div>
      <div>
      <PhoneCategory></PhoneCategory>
      </div>
    </div>
  );
};

export default Categories;
