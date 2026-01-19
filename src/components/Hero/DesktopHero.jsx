import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareLinkedin,
  faSquareFigma,
  faSquareGithub,
  faSquareInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import SocialMediaIcon from "../SocialMediaIcon.jsx";
import techList from "../../utils/techList.js";
import TechIcon from "../TechIcon.jsx";
import BrandsCarousel from "../BrandsCarousel.jsx";
import HeroText from "./HeroText.jsx";

export default function DesktopHero() {
  return (
    <div className="lg:mt-50 mt-36 flex flex-col md:flex-row gap-4 lg:gap-14 items-center md:items-start w-full">
      <div className="px-5 w-[50%]">
        <HeroText />
      </div>
      <div className="flex flex-col gap-8 w-[50%]">
        <div className="w-full flex">
          <div className="w-[50%]">
            <Image
              src="/headshot.jpg"
              alt="Hero Image"
              width={1920}
              height={1080}
              className="w-full h-full rounded-[10px] object-cover"
            />
          </div>
          <div className=" bg-popup rounded-[10px] px-5 py-[10px] flex flex-col gap-4 w-[50%] ml-6 max-2xl:max-h-[320px] overflow-auto">
            <h6>Main Technologies</h6>
            <div className="w-full flex flex-wrap gap-6 mt-2 items-center justify-center ">
              {techList.map((tech, index) => (
                <TechIcon
                  key={index}
                  tech={tech}
                  width={"2xl:w-[50px] w-[25px]"}
                  height={"2xl:h-[50px] h-[25px]"}
                  textSize="text-[12px]! 2xl:text-[14px]!"
                  vertical={true}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex-row xl:gap-6 gap-4 flex">
          <div className="w-[70%] bg-primary rounded-[10px] px-5 py-[10px] flex flex-col gap-4 ">
            <h6>Brands I have worked with</h6>
            <div className="mt-2 ">
              <BrandsCarousel />
            </div>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 w-[30%] gap-2 text-primary h-full">
            <SocialMediaIcon icon={faSquareLinkedin} url="" textSize="text-[40px] xl:text-[52px]" />
            <SocialMediaIcon icon={faSquareFigma} url="" textSize="text-[40px] xl:text-[52px]" />
            <SocialMediaIcon icon={faSquareGithub} url="" textSize="text-[40px] xl:text-[52px]" />
            <SocialMediaIcon icon={faSquareInstagram} url="" textSize="text-[40px] xl:text-[52px]" />
            <SocialMediaIcon icon={faSquareFacebook} url="" textSize="text-[40px] xl:text-[52px]" />
            <SocialMediaIcon icon={faSquareEnvelope} url="" textSize="text-[40px] xl:text-[52px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
