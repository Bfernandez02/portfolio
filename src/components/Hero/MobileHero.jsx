import { useState, useRef, useEffect } from "react";
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
import { motion, useAnimation, useInView } from "framer-motion";

export default function MobileHero() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const isInView2 = useInView(ref2, {
    once: true,
    margin: "0px 0px -200px 0px",
  });
  const controls = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);
  useEffect(() => {
    if (isInView2) controls2.start("visible");
  }, [isInView2, controls2]);
  return (
    <div className="mt-22 py-10 flex flex-col md:flex-row gap-10 items-center md:items-start w-full">
      <motion.div
        ref={ref}
        className="px-5"
        initial={{ opacity: 0, y: 60 }}
        animate={controls}
        transition={{ duration: 0.8 }}
        variants={{ visible: { opacity: 1, y: 0 } }}
      >
        <Image
          src="/headshot.jpg"
          alt="Hero Image"
          width={1920}
          height={1080}
          className="w-full h-auto rounded-[10px] max-w-[270px]"
        />
        <div>
          <div className="flex w-full justify-between mt-4 text-4xl text-primary">
            <SocialMediaIcon icon={faSquareLinkedin} url="Linkedin" />
            <SocialMediaIcon icon={faSquareFigma} url="Figma" />
            <SocialMediaIcon icon={faSquareGithub} url="Github" />
            <SocialMediaIcon icon={faSquareInstagram} url="Instagram" />
            <SocialMediaIcon icon={faSquareFacebook} url="Facebook" />
            <SocialMediaIcon icon={faSquareEnvelope} url="Email" />
          </div>
        </div>
      </motion.div>
      <div className="flex flex-col gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          variants={{ visible: { opacity: 1, y: 0 } }}
          className="w-full"
        >
          <HeroText />
        </motion.div>

        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 60 }}
          animate={controls2}
          transition={{ duration: 0.8 }}
          variants={{ visible: { opacity: 1, y: 0 } }}
          className=" bg-popup rounded-[10px] px-5 py-[10px] flex flex-col gap-4 w-full"
        >
          <h6>Main Technologies</h6>
          <div className="w-full flex flex-wrap gap-6 mt-2 items-center justify-center ">
            {featuredTechList.map((tech, index) => (
              <TechIcon
                key={index}
                tech={tech.name}
                width={"w-[28px]"}
                height={"h-[28px]"}
                textSize="text-[12px]!"
                vertical={true}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={controls2}
          transition={{ duration: 0.8 }}
          variants={{ visible: { opacity: 1, y: 0 } }}
          className="w-full bg-primary rounded-[10px] px-5 py-[10px] flex flex-col gap-4"
        >
          <h6>Brands I have worked with</h6>
          <div className="mt-2 w-full">
            <BrandsCarousel />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
