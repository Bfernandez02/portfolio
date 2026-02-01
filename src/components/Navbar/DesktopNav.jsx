import React from "react";
import Logo from "./Logo";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeButton } from "../ThemeButton";
import { useTheme } from "../ThemeProvider";

export default function DesktopNav({ menuItems }) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <div
        className={`z-900 w-full max-lg:hidden  ${
          scrolled ? "p-0" : "p-7"
        } transition-all`}
      >
        <div
          className={` flex flex-row transition-all justify-between border-y-2 border-border px-5 py-6 ${
            scrolled
              ? `${theme == "dark" ? "bg-border border-border" : "bg-primary border-primary border-t-primary border-b-black"} border-b  px-10`
              : "mx-10"
          }`}
        >
          <div className="w-55">
            <Logo version={scrolled ? "dark" : "light"} />
          </div>
          <div className="flex items-center justify-between w-fit">
            <div className="flex xl:gap-8 gap-6 w-full justify-center items-center">
              {menuItems.map((item, index) => {
                return (
                  <div className="flex w-fit" key={index}>
                    <Link
                      className="flex w-fit gap-2 align-middle items-center "
                      href={item.route}
                    >
                      <h5
                        className={`transition-all hover:border-b duration-200 ${scrolled ? "text-white border-white" : "text-secondary border-secondary"}`}
                      >
                        {item.label}
                      </h5>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-between w-fit gap-4">
            <Link
              href="#contact"
              className={` ${theme !== "dark" && scrolled ? "btn-accent" : "btn"} `}
            >
              Contact
            </Link>
            <ThemeButton textColor={scrolled ? "white" : null} />
          </div>
        </div>
      </div>
    </>
  );
}
