import React, { useState, useEffect } from "react";



const BelowNav = () => {
  const names = [
    "Why Mindray",
    "Our Culture",
    "Growth in Mindray",
    "Employee stories",
    "Join us",
  ];
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const nav = document.getElementById("below-nav");
    // Adjust this value as needed

      if (scrollY > nav.offsetTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div    id="below-nav"
    className={`border-b-2 pb-3 mb-10  ${
      isFixed
        ? "fixed top-0 left-0 right-0 bg-white text-black pt-4 mt-0"
        : "relative mt-4 ease-in-out duration-700" // Initially, the position is relative
    }`}>
        <div className=" gap-x-10 px-5 lg:px-0 lg:w-10/12  mx-auto   flex flex-row items-center justify-end overflow-x-auto">
      {names.map((name, idx) => <div key={idx}>
        <h1 className="cursor-pointer">{name}</h1>
      </div>)}
    </div>
    </div>
  );
};

export default BelowNav;
