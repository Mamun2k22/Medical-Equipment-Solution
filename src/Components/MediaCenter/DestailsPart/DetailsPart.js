import React from "react";
import { BsArrowRight } from "react-icons/bs";

const DetailsPart = () => {
  const cards = [
    {
      id: 1,
      title: "Illuminating ISUOG Ambassador Summit in Türkiye",
      des: "Explore the highlights of the ISUOG Ambassador Summit in Türkiye, where experts and professionals gathered for an academic exchange on ultrasound advancements in women’s healthcare. Discover Mindray Medical Imaging’s...",
      date: "2023-09-19",
      type: "Ultrasound | Women health | Academic | OB GYN ",
    },
    {
      id: 2,

      title: "hs-cTnI: Empowering Heart Risk Assessment",
      des: "Revolutionize heart risk assessment with hs-cTnI - Mindray’s cutting-edge immunoassay solution for cardiac disease management. Learn more about our strategic acquisition of HyTest and how it’s empowering better patient outcomes.",
      date: "2023-09-18",
      type: "Reagent | New product launch | Chemiluminescence immunoassay",
    },
    {
      id: 3,

      title:
        "Getting Tech Right: ‘High acuity nurses should only need to do things once’",
      des: "North Tees and Hartlepool NHS Foundation Trust is leading the way in digital transformation within the NHS. Find out how their partnership with Mindray is helping them customize two-way data flows, reduce manual administrative...",
      date: "2023-09-15",
      type: "Patient monitoring | Hospitalwide Solution | Partnerships | Optimal workflow | Digitalization | Customer Stories ",
    },
    {
      id: 4,

      title:
        "Mindray Launches High-Sensitivity and High-Specificity HSV Assays",
      des: "Mindray introduces HSV assays with high levels of sensitivity and specificity, providing accurate results for type-specific HSV IgG antibody testing. Safeguard patients with our reliable diagnostics.",
      date: " 2023-09-06",
      type: "Reagent | Chemiluminescence immunoassay | Smart Labs",
    },
    {
      id: 5,

      title:
        "Exploring the Future of Medical Development: Highlights from the 2023 Guangzhou International Forum for Hospital Cooperation and Development",
      des: "Shaping the future of healthcare, together. The 2023 Guangzhou International Forum for Hospital Cooperation and Development brings together diverse perspectives and expertise to tackle pressing public health issues and drive global healthcare development.",
      date: " 2023-09-01",
      type: "Hospitalwide Solution | Department management | Smart applications | Critical care | Academic | Digitalization",
    },
    {
      id: 6,

      title:
        "Mindray Introduces Innovative Upgrades to A Series Anesthesia Systems for Enhanced Patient Safety and Efficiency",
      des: "Mindray has unveiled exciting upgrades to its A7 and A5 anesthesia systems under the A Series Anesthesia. The brand-new enhancements incorporate innovative technologies that empower anesthesiologists to deliver precise anesthesia, leading to greater patient safety and efficiency throughout the perioperative period.",
      date: "2023-08-30",
      type: "Patient safety | Perioperative care | Anesthesiology | Optimal workflow | Digitalization",
    },
    {
      id: 6,

      title: "Unleashing the Potential of Multi-Parametric Imaging",
      des: "Unlock accurate medical diagnostics with multi-parametric ultrasound. Discover how combining ultrasound modes and parameters improves patient experience while providing detailed and real-time insights.",
      date: "2023-08-24",
      type: "Ultrasound | Smart applications ",
    },
  ];
  return (
   <section>
     <div className="flex">
      <div className="lg:basis-3/12">

      </div>
      <div className="lg:basis-10/12">
      {cards.map((card) => (
        <div key={card.id} className="mt-16"> 
          <h1 className="font-bold text-lg">{card.title}</h1>
          <p className="text-lg my-5">{card.des}</p>
        <div className="flex justify-between">
        <div className="flex gap-5">
         <h3>{card.type}</h3>
          <h4>{card.date}</h4>
         </div>
         <BsArrowRight className="text-black "></BsArrowRight>
        </div>
        </div>
      ))}
      </div>
    </div>
   <div className="flex justify-center">
   <h1 className="text-center my-20 border-b border-black w-20 pb-2">Load more</h1>
   </div>
   </section>
  );
};

export default DetailsPart;
