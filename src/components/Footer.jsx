import React from "react";
import { useTheme } from "./ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapPin } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import menuItems from "./Navbar/menuItems";
import SocialMediaIcon from "./SocialMediaIcon";
import {
  faSquareGithub,
  faSquareInstagram,
  faSquareLinkedin,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <div
      className={`${theme === "dark" ? "bg-border" : "bg-primary"} text-white! py-6 border-t-2 border-border flex justify-center flex-col w-full px-7 sm:px-10 md:px-15 lg:px-30 items-start gap-4`}
    >
      <div className="w-full flex flex-col md:flex-row py-6 gap-8 md:gap-4">
        {/* Left Content */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <div className="flex flex-col gap-2 w-fit">
            <h5>Brandon Fernandez</h5>
            <p className="text-white!">
              Full stack developer with a passion for artificial intelligence
              and web development
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div
              className={`flex items-center gap-2 text-secondary px-[6px] py-[6px] rounded-[10px] ${theme === "dark" ? "bg-background" : "bg-[#244459]"} `}
            >
              <div
                className={`rounded-[10px]  py-2 px-2 flex items-center justify-center ${theme === "dark" ? "bg-primary" : "bg-accent"}`}
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-white text-[18px] md:text-[22px]"
                />
              </div>

              <p className="font-semibold text-white! text-[14px]! md:text-[16px]! text-ellipsis overflow-hidden whitespace-nowrap md:px-2">
                bfernandezling@gmail.com
              </p>
            </div>

            <div
              className={`flex items-center gap-2 text-secondary px-[6px] py-[6px] rounded-[10px] ${theme === "dark" ? "bg-background" : "bg-[#244459]"} `}
            >
              <div
                className={`rounded-[10px]  py-2 px-2 flex items-center justify-center ${theme === "dark" ? "bg-primary" : "bg-accent"}`}
              >
                <FontAwesomeIcon
                  icon={faMapPin}
                  className="text-white text-[18px] md:text-[22px]"
                />
              </div>

              <p className="font-semibold text-white! text-[14px]! md:text-[16px]! text-ellipsis overflow-hidden whitespace-nowrap md:px-2">
                St. Catharines, ON, Canada
              </p>
            </div>
          </div>
        </div>

        {/* Middle Content */}
        <div className="w-full md:w-1/3 flex flex-col md:items-center">
          <div className="flex flex-col gap-2 w-fit">
            <h5>Quick Links</h5>
            {menuItems.map((item, index) => {
              return (
                <div className="flex w-fit" key={index}>
                  <Link
                    className="flex w-fit gap-2 align-middle items-center "
                    href={item.route}
                  >
                    <p
                      className={`transition-all border-b border-transparent hover:border-white duration-200 text-white! `}
                    >
                      {item.label}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col w-full md:w-1/3 items-start h-full justify-start ">
          <div className="flex flex-col gap-2 h-full">
            <h5>Connect With Me</h5>
            <p className="w-full h-fit text-white!">
              Let&apos;s connect and create something amazing together
            </p>
          </div>
          <div className="w-full flex flex-row gap-1 md:gap-2 mt-2 lg:mt-4 h-full ml-[-6px] lg:ml-[-8px]">
            <SocialMediaIcon
              icon={faSquareLinkedin}
              url=""
              textSize={`text-[34px] lg:text-[38px] xl:text-[42px] ${theme === "dark" ? "text-primary!" : "text-accent!"}`}
            />
            <SocialMediaIcon
              icon={faSquareGithub}
              url=""
              textSize={`text-[34px] lg:text-[38px] xl:text-[42px] ${theme === "dark" ? "text-primary!" : "text-accent!"}`}
            />
            <SocialMediaIcon
              icon={faSquareInstagram}
              url=""
              textSize={`text-[34px] lg:text-[38px] xl:text-[42px] ${theme === "dark" ? "text-primary!" : "text-accent!"}`}
            />
            <SocialMediaIcon
              icon={faSquareFacebook}
              url=""
              textSize={`text-[34px] lg:text-[38px] xl:text-[42px] ${theme === "dark" ? "text-primary!" : "text-accent!"}`}
            />
          </div>
        </div>
      </div>

      <div className="w-full border-t-2 border-white/5 pt-4 flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-0">
        <p className="text-white! text-sm! ">
          &copy; {new Date().getFullYear()} Brandon Fernandez. All rights
          reserved.
        </p>

        <p className="text-sm! text-white!">
          Built in Next.js with React, Javascript and tailwind css
        </p>
      </div>
    </div>
  );
}
