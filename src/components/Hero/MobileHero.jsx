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

export default function MobileHero() {
  return (
    <div className="mt-22 py-10 flex flex-col md:flex-row gap-10 items-center md:items-start w-full">
      <div className="px-5">
        <Image
          src="/headshot.jpg"
          alt="Hero Image"
          width={1920}
          height={1080}
          className="w-full h-auto rounded-[10px] max-w-[270px]"
        />
        <div>
          <div className="flex w-full justify-between mt-4 text-4xl text-primary">
            <SocialMediaIcon icon={faSquareLinkedin} url="" />
            <SocialMediaIcon icon={faSquareFigma} url="" />
            <SocialMediaIcon icon={faSquareGithub} url="" />
            <SocialMediaIcon icon={faSquareInstagram} url="" />
            <SocialMediaIcon icon={faSquareFacebook} url="" />
            <SocialMediaIcon icon={faSquareEnvelope} url="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full">
        <div className="w-full">
          <HeroText />
        </div>

        <div className=" bg-popup rounded-[10px] px-5 py-[10px] flex flex-col gap-4 w-full">
          <h6>Main Technologies</h6>
          <div className="w-full flex flex-wrap gap-6 mt-2 items-center justify-center ">
            {techList.map((tech, index) => (
              <TechIcon
                key={index}
                tech={tech}
                width={"w-[28px]"}
                height={"h-[28px]"}
                textSize="text-[12px]!"
                vertical={true}
              />
            ))}
          </div>
        </div>

        <div className="w-full bg-primary rounded-[10px] px-5 py-[10px] flex flex-col gap-4">
          <h6>Brands I have worked with</h6>
          <div className="mt-2 w-full">
            <BrandsCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
