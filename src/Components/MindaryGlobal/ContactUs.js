/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import image from "../../images/contact/contact-us-kv-1.jpg";
import Image from "next/image";
import veri from "../../images/contact/getcaptcha.png"

const ContactUsPart = () => {
  const [isFocused, setIsFocused] = useState("");

  const handleInputFocus = (e) => {
    setIsFocused(e);
  };
  const handleInputBlur = () => {
    // Clear the input value when it loses focus.
    setIsFocused("");
  };
  return (
    <div className="my-20 lg:w-10/12 mx-auto">
      <div className="flex gap-x-7 lg:gap-x-12">
        <div>
          <Image src={image} alt="" className="h-full w-full hidden lg:flex"></Image>
        </div>
        <div className="w-9/12">
          <h1 className="text-5xl">Contact Us</h1>
          <form className="mt-5">
            <div className="lg:flex gap-x-5">
              <input
                className="w-full bg-transparent px-1 outline-none mb-5 lg:mb-0"
                type="text"
                name=""
                id=""
                onClick={() => handleInputFocus("first")}
                onBlur={handleInputBlur}
                placeholder={isFocused === "first" ? "" : "First Name *"}
              />
              <input
                className="w-full bg-transparent px-1 outline-none mb-5 lg:mb-0"
                type="text"
                name=""
                id=""
                onClick={() => handleInputFocus("last")}
                onBlur={handleInputBlur}
                placeholder={isFocused === "last" ? "" : "Last Name *"}
              />
            </div>
            <div className="lg:flex gap-x-5 lg:my-8">
              <input
                className="w-full bg-transparent px-1 outline-none mb-5 lg:mb-0"
                type="text"
                name=""
                id=""
                onClick={() => handleInputFocus("email")}
                onBlur={handleInputBlur}
                placeholder={isFocused === "email" ? "" : "Email*"}
              />
              <input
                className="w-full bg-transparent px-1 outline-none mb-5 lg:mb-0"
                type="text"
                name=""
                id=""
                onClick={() => handleInputFocus("phone")}
                onBlur={handleInputBlur}
                placeholder={isFocused === "phone" ? "" : "Business Phone*"}
              />
            </div>
            <div className="lg:flex gap-x-5 lg:my-8">
              <input
                className="w-full bg-transparent px-1 outline-none mb-5 lg:mb-0"
                type="text"
                name=""
                id=""
                // onClick={() => handleInputFocus("country")}
                // onBlur={handleInputBlur}
                placeholder={isFocused === "country" ? "" : "Country*"}
              />
              <input
                className="w-full bg-transparent px-1 outline-none mb-5 lg:mb-0"
                type="text"
                name=""
                id=""
                onClick={() => handleInputFocus("city")}
                onBlur={handleInputBlur}
                placeholder={isFocused === "city" ? "" : "City"}
              />
            </div>
            <div className="lg:flex gap-x-5 lg:my-8">
              <input
                className="w-full bg-transparent px-1 outline-none mb-5 lg:mb-0"
                type="text"
                name=""
                id=""
                onClick={() => handleInputFocus("company")}
                onBlur={handleInputBlur}
                placeholder={
                  isFocused === "company" ? "" : "Company/Institute*"
                }
              />
              <input
                className="w-full bg-transparent px-1 outline-none mb-5 lg:mb-0"
                type="text"
                name=""
                id=""
                // onClick={() => handleInputFocus("job")}
                // onBlur={handleInputBlur}
                placeholder={isFocused === "job" ? "" : "Job Function"}
              />
            </div>
            <div className="lg:flex gap-x-5 lg:my-8">
              <input
                className="w-full bg-transparent px-1 outline-none mb-5 lg:mb-0"
                type="text"
                name=""
                id=""
                onClick={() => handleInputFocus("job-title")}
                onBlur={handleInputBlur}
                placeholder={isFocused === "job-title" ? "" : "Job Title"}
              />
              <input
                className="w-full bg-transparent px-1 outline-none mb-5 lg:mb-0"
                type="text"
                name=""
                id=""
                // onClick={() => handleInputFocus("specialty")}
                // onBlur={handleInputBlur}
                placeholder={isFocused === "specialty" ? "" : "Specialty"}
              />
            </div>
            <div className="lg:w-1/2">
              <input
                className="w-full bg-transparent px-1 outline-none mb-5 lg:mb-0"
                type="text"
                name=""
                id=""
                // onClick={() => handleInputFocus("interested")}
                // onBlur={handleInputBlur}
                placeholder={isFocused === "interested" ? "" : "Interested in"}
              />
            </div>
            <div className="my-7">
              <textarea
                className="w-full h-20 bg-transparent px-1 outline-none mb-5 lg:mb-0"
                type="text"
                name=""
                id=""
                onClick={() => handleInputFocus("comment")}
                onBlur={handleInputBlur}
                placeholder={isFocused === "comment" ? "" : "Comment"}
              />
            </div>
            <div className="mt-16 flex lg:w-1/2">
              <input
                className="w-full bg-transparent border-b-2 border-gray-400 outline-none  "
                type="text"
                name=""
                id=""
                onClick={() => handleInputFocus("verification")}
                onBlur={handleInputBlur}
                placeholder={
                  isFocused === "verification" ? "" : "Verification Code"
                }
              />
              <Image src={veri} alt="" className="h-7 w-20"></Image>
            </div>
            <div className="lg:my-5 border-b-2 pb-7">
               <div className="flex gap-x-1">
               <input className="bg-transparent" type="checkbox" name="" id="" />
                <h2 className="text-xs text-gray-600">By submitting the information above, I have read and agreed to the <span className="text-[#B70909]">Privacy Policy</span></h2>
               </div>
               <div className="flex gap-x-1 bg-transparent">
               <input className="bg-transparent outline-none"  type="checkbox" name="" id="" />
                <h2 className="text-xs text-gray-600">Please check if agree to subscribe Mindray's Newsletter</h2>
               </div>
            </div>
            <div className="flex justify-end">
                <button className="border border-[#B70909] text-[#B70909] px-5 py-2">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPart;
