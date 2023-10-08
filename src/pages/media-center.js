import DetailsPart from "@/Components/MediaCenter/DestailsPart/DetailsPart";
import EventsActivities from "@/Components/MediaCenter/EventsActivities/EventsActivities";
import MediaCenterCard from "@/Components/MediaCenter/MediaCenter/MediaCenter";
import NavBar from "@/Components/Shared/NavBar/NavBar";
import TopNavBar from "@/Components/Shared/NavBar/TopNavBar";
import React, { useState } from "react";

const MediaCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <div className="pt-2 pb-3 text-white bg-[#B70909] hidden lg:block">
        <TopNavBar></TopNavBar>
      </div>
      <div className="lg:pt-3 lg:border-b-2 lg:pb-3">
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen}></NavBar>
      </div>
      <div className="w-10/12 mx-auto mt-24 mb-10">
        
        <EventsActivities></EventsActivities>
        <MediaCenterCard></MediaCenterCard>
        <DetailsPart></DetailsPart>
      </div>
    </section>
  );
};

export default MediaCenter;
