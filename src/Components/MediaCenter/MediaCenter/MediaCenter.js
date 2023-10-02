import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import image1 from "../../../images/media-center/ivdr-class-d-certificates-anti-hcv.thumb.319.319.png";
import image2 from "../../../images/media-center/mindray-innovatoin-empowers-asian-games-host-city-hangzhou-and-beyond.thumb.319.319.png";
import image3 from "../../../images/media-center/multiparametric-approach-ultrasound-diagnosis-mafl-disease.thumb.319.319.png";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const MediaCenterCard = () => {
  const cards = [
    {
      id: 1,
      image: image1,
      title: "Mindray Receives IVDR Class D Certificate for Anti-HCV",
      des: "Reagent | In-Vitro Diagnostics | Awards & Recognitions",
      date: "2023-09-29",
    },
    {
      id: 2,
      image: image2,
      title:
        "Innovation for Asia: Mindray Innovation Empowers Asian Games Host City Hangzhou and Beyond",
      des: "Critical care | AED | Resuscitation | Interconnectivity",
      date: "2023-09-25",
    },
    {
      id: 3,
      image: image3,
      title:
        "Ultrasound Journal 18 - Multiparametric Approach in Ultrasound Diagnosis of Metabolically Associated Fatty Liver Disease",
      des: "Ultrasound Cases | Ultrasound | Women health",
      date: "2023-09-29",
    },
  ];
  return (
    <div className="my-20">
      <h1 className="border-t-8  border-[#B70909] w-14"></h1>
      <h1 className="text-5xl font-bold">Media Center</h1>
      <div className="flex lg:gap-x-20 mt-16">
        <div className="basis-2/12 hidden lg:flex">
          <div>
          <h1>Filter</h1>
          <ul className="mt-5">
            <li className="flex justify-between border-b-2 pb-2">
              {" "}
              <span>All</span> <span>(472)</span>{" "}
            </li>
            <li className="flex justify-between border-b-2 pb-2 pt-2">
              {" "}
              <span>News</span> <span>(138)</span>{" "}
            </li>
            <li className="flex justify-between border-b-2 pb-2 pt-2">
              {" "}
              <span>Blog</span> <span>(234)</span>{" "}
            </li>
            <li className="flex justify-between border-b-2 pb-2 pt-2">
              {" "}
              <span>Press</span> <span>(68)</span>{" "}
            </li>
            <li className="flex justify-between border-b-2 pb-2 pt-2">
              {" "}
              <span>Customer Story</span> <span>(32)</span>{" "}
            </li>
          </ul>
          </div>
        </div>
        <div className="lg:basis-10/12">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {cards.map((card) => (
              <Card
                key={card.id}
                className="max-w-[20rem] overflow-hidden shadow-none rounded-none"
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 rounded-none"
                >
                  <Image
                    src={card.image}
                    alt=""
                    className="w-full h-48 "
                  ></Image>
                </CardHeader>
                <div className="w-full mt-5">
                  <h1 className="font-bold text-gray-800 text-[20px]">
                    {card.title}
                  </h1>
                  <p className="mt-3 font-normal">{card.des}</p>
                </div>

                <h2 className="mt-5">{card.date} </h2>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCenterCard;
