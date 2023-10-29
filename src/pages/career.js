import BelowNav from "@/Components/Career/BelowNav";
import Buttons from "@/Components/Career/Buttons";
import HealthyCareer from "@/Components/Career/HealthyCareer";
import NavBarEffect from "@/Components/Shared/NavBar/NavBarEffect";
import React from "react";

const Career = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage:
            'url("https://th.bing.com/th/id/R.994d5f45d609cbb2159d9c05d09fd608?rik=czvENW99m%2fXcNA&pid=ImgRaw&r=0")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "600px",
        }}
        className="relative"
      >
        <div className="w-10/12 mx-auto h-[650px] flex items-center">
          <div>
            <h1 className="text-4xl lg:text-[50px] lg:leading-tight text-white ">
              Join Us to Bring <br />
              Better Healthcare
            </h1>
            <Buttons></Buttons>
          </div>
        </div>
      </div>
      <NavBarEffect></NavBarEffect>
      <BelowNav></BelowNav>
      <HealthyCareer></HealthyCareer>
    </section>
  );
};

export default Career;
