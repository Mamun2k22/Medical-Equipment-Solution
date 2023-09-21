import { Typography } from "@material-tailwind/react";
import { IoIosCall } from "react-icons/io";
import { BiSolidMessageCheck } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { BsYoutube } from "react-icons/bs";
import { AiFillLinkedin,AiFillFacebook,AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <section className="bg-black py-10">
      <footer className="w-10/12 mx-auto flex   flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  0 py-6 text-center md:justify-between">
        <div>
          <div className="flex gap-2">
            <Typography className="font-normal text-white flex gap-1 text-sm">
              <IoIosCall className="mt-1"></IoIosCall>{" "}
              <span> (86-755) 81888998</span>
            </Typography>
            <Typography className="font-normal text-white flex gap-1 text-sm">
              <BiSolidMessageCheck className="mt-[2px] h-6 w-5 mb-5"></BiSolidMessageCheck>{" "}
              <span> intl-market@mindray.com</span>
            </Typography>
          </div>
          <p className="text-white text-xs mb-5">
            Terms of Use ｜ Site Map ｜ Cookie Notice ｜ Privacy Notice ｜
            Recruitment Privacy Notice ｜ Compliance Hotline
          </p>
          <p className="text-white text-start text-xs">
            {" "}
            © 2023 Shenzhen Mindray Bio-Medical Electronics Co., Ltd. All rights
            reserved.
          </p>
        </div>
        <div>
          <Typography className="text-white text-start text-2xl font-bold mb-5">Mindary</Typography>
          <ul className="grid grid-cols-4 items-center gap-y-2 gap-x-6">
            <li className="text-white">
              <TiMessages className="w-7 h-7"></TiMessages>
            </li>
            <li className="text-white">
              <BsYoutube className="w-7 h-7"></BsYoutube>
            </li>
            <li className="text-white">
              <AiFillLinkedin className="w-7 h-7"></AiFillLinkedin>
            </li>
            <li className="text-white">
              <AiFillFacebook className="w-7 h-7"></AiFillFacebook>
            </li>
            <li className="text-white">
              <FaTwitter className="w-7 h-7"></FaTwitter>
            </li>
            <li className="text-white">
              <AiFillInstagram className="w-7 h-7"></AiFillInstagram>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
}
