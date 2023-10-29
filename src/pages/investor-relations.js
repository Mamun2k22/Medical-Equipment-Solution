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
            'url("https://th.bing.com/th/id/R.994d5f45d609cbb2159d9c05d09fd608?rik=czvENW99m%2fXcNA&pid=ImgRaw&r=0")',
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
