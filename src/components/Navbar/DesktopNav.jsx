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
          scrolled ? "p-0" : "p-8"
        } transition-all`}
      >
        <div
          className={` flex lex-row transition-all justify-between border-y-2 border-border px-5 py-6 ${
            scrolled
              ? `${theme == "dark" ? "bg-popup border-popup" : "bg-primary border-primary"} border-b  px-20`
              : "mx-20"
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
                      className="flex w-fit gap-2 align-middle items-center transition-all hover:border-b border-secondary duration-200"
                      href={item.route}
                    >
                      <h5
                        className={scrolled ? "text-white" : "text-secondary"}
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
            <button
              className={`btn ${theme !== "dark" && scrolled ? "bg-accent!" : ""} `}
            >
              Contact
            </button>
            <ThemeButton textColor={scrolled ? "white" : null} />
          </div>
        </div>
      </div>
    </>
  );
}
