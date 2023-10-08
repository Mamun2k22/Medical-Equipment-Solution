/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  
} from "@material-tailwind/react";
import image1 from "../../../../images/7.jpg";
import image2 from "../../../../images/apfcb-case-display.jpg";
import image3 from "../../../../images/cardiac-biomarker-assays-launch-display.jpg";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const EventsActivities = () => {
  const cards = [
    {
      id: 1,
      image: image1,
      title: "Inspiring Women’s Healthcare - ISUOG 2023",
      des: "Looking forward to welcoming you in Seoul at the 33rd World Congress of Ultrasound in Obstetrics and Gynecology, and inviting you to",
      date: "Oct 16-19, 2023",
      place: "Seoul, South Korea",
      language: "Language - English",
    },
    {
      id: 2,
      image: image2,
      title:
        "Safeguarding Your Cardiac Health: Mindray hs-cTnl & NT-proBNP Assays...",
      des: "Join the Mindray online launch event on October 19th, 2023, and explore the benefits of hs-cTnI and NT-proBNP assays for safeguarding",
      date: "Oct 19, 2023",
      place: "Online",
      language: "Language - English",
    },
    {
      id: 3,
      image: image3,
      title: "Announcement on 'APFCB Laboratory Medicine Case Contest'",
      des: "Be a part of the APFCB Laboratory Medicine Case Contest and share your clinical insights. Elevate laboratory medicine's role in patient",
      date: "Aug 20-Sep 30",
      place: "Online",
      language: "Language - English",
    },
  ];
  return (
    <div>
      <h1 className="border-t-8  border-[#B70909] w-14"></h1>
      <h1 className="text-4xl lg:text-5xl font-bold">Events & Activities</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-20">
        {cards.map((card) => (
          <Card key={card.id} className="max-w-[24rem] overflow-hidden shadow-none">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <Image src={card.image} alt="" className="w-full h-60"></Image>
            </CardHeader>
            <CardBody>
              <Typography   className="font-bold text-black text-[17px]">
                {card.title}
              </Typography>
              <Typography
                
                className="mt-3 font-normal"
              >
                {card.des}
              </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
              <small>{card.date} </small> <span>|</span>
              <small>{card.place} </small> <span>|</span>
              <small>{card.language}</small>
              
            </CardFooter>
           <div className="flex justify-end">
           <BsArrowRight className="text-black "></BsArrowRight>
           </div>
          </Card>
        ))}
      </div>
     <div className="flex justify-center">
     <button className="border border-[#B70909] text-[#B70909] px-5 py-2 text-sm">View more</button>
     </div>
    </div>
  );
};

export default EventsActivities;
