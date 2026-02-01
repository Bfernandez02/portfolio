import React from "react";
import { useTheme } from "./ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapPin } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <div
      className={`${theme === "dark" ? "bg-border" : "bg-primary"} w-full py-6 border-t-2 border-border flex justify-center items-center`}
    >
      {/* Left Content */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 w-fit">
          <h5>Brandon Fernandez</h5>
          <p className="w-[80%]">
            Full stack developer with a passion for artificial intelligence and
            web development
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-secondary bg-background px-[6px] py-[6px] rounded-[10px]">
            <div className="rounded-[10px] bg-primary py-2 px-2 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-white text-[20px] md:text-[22px]"
              />
            </div>

            <p className="font-semibold text-white! text-ellipsis overflow-hidden whitespace-nowrap px-2">
              bfernandezling@gmail.com
            </p>
          </div>

          <div className="flex items-center gap-2 text-secondary bg-background px-[6px] py-[6px] rounded-[10px]">
            <div className="rounded-[10px] bg-primary py-2 px-2 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faMapPin}
                className="text-white text-[20px] md:text-[22px]"
              />
            </div>

            <p className="font-semibold text-white! text-ellipsis overflow-hidden whitespace-nowrap px-2">
              St. Catharines, Ontario, Canada
            </p>
          </div>
        </div>
      </div>

      {/* Middle Content */}
      <div></div>

      {/* Right Content */}
      <div className="flex flex-col gap-4 text-right">
        <h3 className="font-semibold">© 2024 Brandon Fernandez</h3>
        <p className="text-sm text-secondary">Designed & Built by Me</p>
      </div>


    </div>
  );
}
