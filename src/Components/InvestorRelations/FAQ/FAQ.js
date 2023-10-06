/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FAQ = () => {
  const [showFAQFirst, setShowFAQFirst] = useState(true);
  const [showFAQSecond, setShowFAQSecond] = useState(false);
  const [showFAQThird, setShowFAQThird] = useState(false);
  const [showFAQFour, setShowFAQFour] = useState(false);
  const [showFAQFive, setShowFAQFive] = useState(false);
  const [showFAQSix, setShowFAQSix] = useState(false);
  const [showFAQSeven, setShowFAQSeven] = useState(false);
  const handleFirst = () => {
    setShowFAQFirst(!showFAQFirst);
    setShowFAQSecond(false);
    setShowFAQThird(false);
    setShowFAQFour(false);
    setShowFAQFive(false);
    setShowFAQSix(false);
    setShowFAQSeven(false);
  };
  const handleSecond = () => {
    setShowFAQFirst(false);
    setShowFAQSecond(!showFAQSecond);
    setShowFAQThird(false);
    setShowFAQFour(false);
    setShowFAQFive(false);
    setShowFAQSix(false);
    setShowFAQSeven(false);
  };
  const handleThird = () => {
    setShowFAQFirst(false);
    setShowFAQSecond(false);
    setShowFAQThird(!showFAQThird);
    setShowFAQFour(false);
    setShowFAQFive(false);
    setShowFAQSix(false);
    setShowFAQSeven(false);
  };
  const handleFour = () => {
    setShowFAQFirst(false);
    setShowFAQSecond(false);
    setShowFAQThird(false);
    setShowFAQFour(!showFAQFour);
    setShowFAQFive(false);
    setShowFAQSix(false);
    setShowFAQSeven(false);
  };
  const handleFive = () => {
    setShowFAQFirst(false);
    setShowFAQSecond(false);
    setShowFAQThird(false);
    setShowFAQFour(false);
    setShowFAQFive(!showFAQFive);
    setShowFAQSix(false);
    setShowFAQSeven(false);
  };
  const handleSix = () => {
    setShowFAQFirst(false);
    setShowFAQSecond(false);
    setShowFAQThird(false);
    setShowFAQFour(false);
    setShowFAQFive(false);
    setShowFAQSix(!showFAQSix);
    setShowFAQSeven(false);
  };
  const handleSeven = () => {
    setShowFAQFirst(false);
    setShowFAQSecond(false);
    setShowFAQThird(false);
    setShowFAQFour(false);
    setShowFAQFive(false);
    setShowFAQSix(false);
    setShowFAQSeven(!showFAQSeven);
  };

  return (
    <div className="w-10/12 mx-auto my-20">
      <h1 className="border-t-8  border-[#B70909] w-14"></h1>
      <h1 className="text-[38px] text-gray-800 font-bold mt-2 mb-10">FAQ</h1>
      {/* first  */}
      <div className="flex justify-between border-b-2 pb-5">
        <h1 className="text-xl text-gray-800 font-bold mt-2">
          1. What's the main businesses of Mindray?
        </h1>
        {showFAQFirst ? (
          <AiOutlineMinus
            className="h-9 w-9 lg:h-8 lg:w-8 cursor-pointer"
            onClick={handleFirst}
          ></AiOutlineMinus>
        ) : (
          <AiOutlinePlus
            className="h-9 w-9 lg:h-8 lg:w-8 cursor-pointer"
            onClick={handleFirst}
          ></AiOutlinePlus>
        )}
      </div>
      {showFAQFirst && (
        <div className="pt-5 border-b-2 pb-5">
          Mindray is the world's leading supplier of medical devices and
          solutions, mainly engaged in the R&D, manufacturing, marketing and
          service of medical devices. Mindray’s products mainly cover three
          areas, which are patient monitoring and life support, in-vitro
          diagnostics and medical imaging. Mindray has the most complete product
          lines in the medical devices industry in China and provides safe,
          efficient and easy-to-use "one-stop" integrated solution to meet
          clinical demands. The Company consistently delivers high-standard
          products and services tailored to customer demands, and integrates
          innovation closely with clinical scenarios to support global medical
          institutions to provide high-quality medical services, help improve
          medical conditions, and reduce medical costs. Mindray’s products and
          solutions have been applied to more than 190 countries and regions
          around the world.
        </div>
      )}
      {/* two  */}
      <div className="flex justify-between border-b-2 pb-5">
        <h1 className="text-xl text-gray-800 font-bold mt-2">
          2. Where is Mindray's headquarters? Are there other branches?
        </h1>
        {showFAQSecond ? (
          <AiOutlineMinus
            className="h-9 w-9 lg:h-8 lg:w-8 cursor-pointer"
            onClick={handleSecond}
          ></AiOutlineMinus>
        ) : (
          <AiOutlinePlus
            className="h-9 w-9 lg:h-8 lg:w-8 cursor-pointer"
            onClick={handleSecond}
          ></AiOutlinePlus>
        )}
      </div>
      {showFAQSecond && (
        <div className="pt-5 border-b-2 pb-5">
          Mindray is headquartered in Shenzhen, China, and has more than 40
          overseas subsidiaries in North America, Europe, Asia, Africa, Latin
          America and other regions; and the Company has branch offices in more
          than 30 provinces, municipalities and autonomous regions in China,
          forming a huge global R&D, marketing and service network.
        </div>
      )}
      {/* three  */}
      <div className="flex justify-between border-b-2 pb-5">
        <h1 className="text-xl text-gray-800 font-bold mt-2">
          3. How to check Mindray's financial announcements and sustainability
          reports?
        </h1>
        {showFAQThird ? (
          <AiOutlineMinus
            className="h-9 w-9 lg:h-8 lg:w-8 cursor-pointer"
            onClick={handleThird}
          ></AiOutlineMinus>
        ) : (
          <AiOutlinePlus
            className="h-9 w-9 lg:h-8 lg:w-8 cursor-pointer"
            onClick={handleThird}
          ></AiOutlinePlus>
        )}
      </div>
      {showFAQThird && (
        <div className="pt-5 border-b-2 pb-5">
          The electronic version of Mindray's financial reports and ESG reports
          can be viewed on the official website of Shenzhen Stock Exchange (
          <span className="text-red-800 cursor-pointer">
            http://www.szse.cn/
          </span>
          ), cninfo.com.cn (
          <span className="text-red-800 cursor-pointer">
            http://www.cninfo.com.cn/new/index
          </span>
          ) or the Company's "Investor Relations" website.
        </div>
      )}
      {/* four  */}
      <div className="flex justify-between border-b-2 pb-5">
        <h1 className="text-xl text-gray-800 font-bold mt-2">
          4. How to participate in the Company's investor events?
        </h1>
        {showFAQFour ? (
          <AiOutlineMinus
            className="h-9 w-9 lg:h-8 lg:w-8 cursor-pointer"
            onClick={handleFour}
          ></AiOutlineMinus>
        ) : (
          <AiOutlinePlus
            className="h-9 w-9 lg:h-8 lg:w-8 cursor-pointer"
            onClick={handleFour}
          ></AiOutlinePlus>
        )}
      </div>
      {showFAQFour && (
        <div className="pt-5 border-b-2 pb-5">
          Investors can refer to the Company's publicly disclosed information
          through official website, the Shenzhen Stock Exchange website and
          statutory information disclosure media to participate investor
          activities held by the Company.
        </div>
      )}
      {/* five  */}
      <div className="flex justify-between border-b-2 pb-5">
        <h1 className="text-xl text-gray-800 font-bold mt-2">
          5. Where to check the Company's investor past exchange records?
        </h1>
        {showFAQFive ? (
          <AiOutlineMinus
            className="h-9 w-9 lg:h-8 lg:w-8 cursor-pointer"
            onClick={handleFive}
          ></AiOutlineMinus>
        ) : (
          <AiOutlinePlus
            className="h-9 w-9 lg:h-8 lg:w-8 cursor-pointer"
            onClick={handleFive}
          ></AiOutlinePlus>
        )}
      </div>
      {showFAQFive && (
        <div className="pt-5 border-b-2 pb-5">
          The Company's past investor activities records can be viewed on
          www.cninfo.com.cn, or on "Mindray Official Website-Investor
          Relations-Latest Announcements-Research".
        </div>
      )}
      {/* six  */}
      <div className="flex justify-between border-b-2 pb-5">
        <h1 className="text-xl text-gray-800 font-bold mt-2">
          6. What are the ways for investors to acquire knowledge and protect
          their rights and interests?
        </h1>
        {showFAQSix ? (
          <AiOutlineMinus
            className="h-9 w-9 lg:h-8 lg:w-8 cursor-pointer"
            onClick={handleSix}
          ></AiOutlineMinus>
        ) : (
          <AiOutlinePlus
            className="h-9 w-9 lg:h-8 lg:w-8 cursor-pointer"
            onClick={handleSix}
          ></AiOutlinePlus>
        )}
      </div>
      {showFAQSix && (
        <div className="pt-5 border-b-2 pb-5">
          Investors can obtain investor knowledge and rights protection services
          through China Investor Network (
          <span className="text-red-800">https://www.investor.org.cn</span>).
        </div>
      )}
      {/* seven  */}
      <div className="flex justify-between   border-b-2 pb-5">
        <h1 className="text-xl text-gray-800 font-bold mt-2">
          7. How can investors contact the company?
        </h1>
        {showFAQSeven ? (
          <AiOutlineMinus
            className="h-9 w-9 lg:h-8 lg:w-8 cursor-pointer"
            onClick={handleSeven}
          ></AiOutlineMinus>
        ) : (
          <AiOutlinePlus
            className="h-9 w-9 lg:h-8 lg:w-8 cursor-pointer"
            onClick={handleSeven}
          ></AiOutlinePlus>
        )}
      </div>
      {showFAQSeven && (
        <div className="pt-5  ">
          <p className="pb-8">Mindray IR Tel: +86-755-81888398</p>
          <span className="text-red-800 pt-8">Email: ir@mindray.com</span>
        </div>
      )}
    </div>
  );
};

export default FAQ;
