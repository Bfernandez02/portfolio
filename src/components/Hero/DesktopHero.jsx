import React from "react";
import Image from "next/image";
import {
  faSquareLinkedin,
  faSquareFigma,
  faSquareGithub,
  faSquareInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import SocialMediaIcon from "../SocialMediaIcon.jsx";
import { featuredTechList } from "@/utils/techList.js";
import TechIcon from "../TechIcon.jsx";
import BrandsCarousel from "../BrandsCarousel.jsx";
import HeroText from "./HeroText.jsx";
import HeroStats from "./HeroStats.jsx";
import { motion } from "framer-motion";

export default function DesktopHero() {
  return (
    <div className="lg:mt-44 mt-36 flex flex-col md:flex-row gap-4 lg:gap-14 items-center md:items-start w-full">

      <motion.div 
        className="px-5 w-[50%] h-full flex flex-col justify-between"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroText />
        <div className="mt-8 h-fit w-full">
          <HeroStats />
        </div>
      </motion.div>
      <motion.div 
        className="flex flex-col gap-8 w-[50%]"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
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
          <div className=" bg-popup rounded-[10px] px-5 py-2.5 flex flex-col gap-4 w-[50%] ml-6 max-2xl:max-h-80 overflow-auto">
            <h6>Main Technologies</h6>
            <div className="w-full flex flex-wrap gap-6 mt-2 items-center justify-center ">
              {featuredTechList.map((tech, index) => (
                <TechIcon
                  key={index}
                  tech={tech.name}
                  width={"2xl:w-[40px] w-[25px]"}
                  height={"2xl:h-[40px] h-[25px]"}
                  textSize="text-[12px]! 2xl:text-[14px]!"
                  vertical={true}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex-row xl:gap-6 gap-4 flex">
          <div className="w-[70%] bg-primary rounded-[10px] px-5 py-2.5 flex flex-col gap-4 ">
            <h6 className="text-white!">Brands I have worked with</h6>
            <div className="mt-2 ">
              <BrandsCarousel />
            </div>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 w-[30%] gap-2 text-primary h-full">
            <SocialMediaIcon
              icon={faSquareLinkedin}
              url="Linkedin"
              textSize="text-[40px] xl:text-[52px]"
            />
            <SocialMediaIcon
              icon={faSquareFigma}
              url="Figma"
              textSize="text-[40px] xl:text-[52px]"
            />
            <SocialMediaIcon
              icon={faSquareGithub}
              url="Github"
              textSize="text-[40px] xl:text-[52px]"
            />
            <SocialMediaIcon
              icon={faSquareInstagram}
              url="Instagram"
              textSize="text-[40px] xl:text-[52px]"
            />
            <SocialMediaIcon
              icon={faSquareFacebook}
              url="Facebook"
              textSize="text-[40px] xl:text-[52px]"
            />
            <SocialMediaIcon
              icon={faSquareEnvelope}
              url="Email"
              textSize="text-[40px] xl:text-[52px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
