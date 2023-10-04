import AnnualReport from "@/Components/InvestorRelations/AnnualReport/AnnualReport";
import CompanyOverview from "@/Components/InvestorRelations/CompanyOverview/CompanyOverview";
import FAQ from "@/Components/InvestorRelations/FAQ/FAQ";
import Governance from "@/Components/InvestorRelations/Governance/Governance";
import LatestRelease from "@/Components/InvestorRelations/LatestRelease/LatestRelease";
import TypeNav from "@/Components/InvestorRelations/TypeNav/TypeNav";
import NavBarEffect from "@/Components/Shared/NavBar/NavBarEffect";
import React, { useState } from "react";

const InvestorRelations = () => {
  const [colorChange, setColorChange] = useState("");
  console.log(colorChange);
  return (
    <section className="">
      <div
        style={{
          backgroundImage:
            'url("https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e10616-s-c12-eyeglasses_w_6355_1.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "600px",
        }}
        className="relative"
      >
        <div className="w-10/12 mx-auto h-[650px] flex items-center">
          <h1 className="text-6xl text-white ">Investor Relations</h1>
        </div>
      </div>
      <TypeNav
        colorChange={colorChange}
        setColorChange={setColorChange}
      ></TypeNav>
      {(colorChange === "" || colorChange === "overview") && <CompanyOverview></CompanyOverview>}
        {
          colorChange ==="releases" && <LatestRelease></LatestRelease>
        }
        {
          colorChange === "report" && <AnnualReport></AnnualReport>
        }
        {
          colorChange === "governance" && <Governance></Governance>
        }
        {
          colorChange === "FAQ" && <FAQ></FAQ>
        }
      <NavBarEffect></NavBarEffect>
    </section>
  );
};

export default InvestorRelations;
