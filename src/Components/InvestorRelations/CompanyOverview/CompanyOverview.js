import React, { useEffect, useRef, useState } from "react";
import Paragraph from "./Paragraph";
import Card from "./Card";
import Profile from "./Profile";

const CompanyOverview = () => {
  const videoRef = useRef(null);
  const [storedTime, setStoredTime] = useState(null);

  useEffect(() => {
    // Retrieve the stored time from localStorage
    const storedVideoTime = localStorage.getItem("videoTime");
    if (storedVideoTime) {
      setStoredTime(parseFloat(storedVideoTime));
    }

    // Listen for the "beforeunload" event to save the video's current time
    const handleBeforeUnload = () => {
      if (videoRef.current) {
        localStorage.setItem(
          "videoTime",
          videoRef.current.currentTime.toString()
        );
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    // Set the video's current time to the stored time when it's loaded
    if (videoRef.current && storedTime !== null) {
      videoRef.current.currentTime = storedTime;
    }
  }, [storedTime]);
  
  useEffect(() => {
    // Mute the video by setting the "muted" attribute
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, []);
  return (
    <section className="px-5 lg:px-0">
      <div className="lg:w-10/12 mx-auto">
        <h1 className="border-t-8  border-[#B70909] w-14"></h1>
        <h1 className="text-[38px] text-gray-800 font-bold mt-2 mb-10">
          Company Overview
        </h1>
      </div>
      <div className="mt-10 mb-20">
        <video
          ref={videoRef}
          controls
          autoPlay
          src="https://www.mindray.com/content/dam/xpace/en/investor-relations/mindray-promotional-video-2023-en.mp4"
          type="video/mp4"
          className="lg:w-8/12 h-full mx-auto"
        ></video>
      </div>
      <Paragraph></Paragraph>
      <Card></Card>
      <Profile></Profile>
    </section>
  );
};

export default CompanyOverview;
