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
        className={`fixed top-0 z-[900] w-full max-lg:hidden  ${
          scrolled ? "p-0" : "p-8"
        } transition-all`}
      >
        <div
          className={` flex lex-row transition-all justify-between border-y-2 border-border px-[20px] ${
            scrolled
              ? `${theme == "dark" ? "bg-popup border-popup" : "bg-primary border-primary"} border-b-[1px]  px-[80px]`
              : "mx-[80px]"
          }`}
        >
          <div className="w-[220px]">
            <Logo version={scrolled ? "dark" : "light"} />
          </div>
          <div className="flex items-center justify-between w-fit">
            <div className="flex gap-10 w-full justify-center items-center">
              {menuItems.map((item, index) => {
                return (
                  <div className="flex w-fit" key={index}>
                    <Link
                      className="flex w-fit gap-2 align-middle items-center text-[20px] transition-all hover:border-b-[1px] border-secondary duration-200"
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
