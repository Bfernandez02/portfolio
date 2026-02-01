import React from "react";
import Logo from "./Logo";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeButton } from "../ThemeButton";
import { useTheme } from "../ThemeProvider";
import Hamburger from "hamburger-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MobileNav({ menuItems }) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  let hamburgerColor =
    theme === "dark"
      ? "#FFFFFF"
      : scrolled && !isMenuOpen
        ? "white"
        : "#284b63";

  return (
    <div className="relative z-[1000] overflow-hidden text-center flex justify-end ">
      <div
        className={`absolute z-[1200]  h-fit w-fit transition-all ${
          scrolled && !isMenuOpen ? "top-2 right-3" : " top-[28px] right-6"
        } `}
      >
        <Hamburger
          toggled={isMenuOpen}
          toggle={setIsMenuOpen}
          size={29}
          color={hamburgerColor}
        />
      </div>

      <div
        className={`flex lex-row transition-all justify-between border-y-2 border-border py-4 px-3 w-full ${
          scrolled
            ? `${theme == "dark" ? "bg-border border-border" : "bg-primary border-primary"} border-b  px-5 `
            : "mx-5 my-5"
        }`}
      >
        <div className="w-fit h-fit">
          <Logo
            version={scrolled ? "dark" : "light"}
            width={124}
            height={100}
          />
        </div>
      </div>

      <div
        className={`fixed z-20 bg-popup h-screen shadow-lg pl-3 pr-8 overflow-auto justify-between transform transition-transform duration-300 text-primary  ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          borderRadius: "20px 0px 0px 20px",
        }}
      >
        <div
          className="flex h-25 justify-between px-8 pt-6 max-[400px]:p-1"
          onClick={() => setIsMenuOpen(false)}
        >
          <Logo version={"horizontal"} width={180} height={80} />
        </div>

        <div className="flex flex-col justify-between max-[400px]:p-1 overflow-y-auto overflow-x-hidden p-5 pt-[50px] ml-12">
          <div className={`flex w-full max-w-125 list-none flex-col gap-y-8`}>
            {menuItems.map((menuLink) => {
              return (
                <Link
                  key={menuLink.label}
                  href={menuLink.route}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex text-center w-fit text-secondary h-fit  transition-all items-center hover:text-accent duration-200`}
                >
                  <FontAwesomeIcon icon={menuLink.icon} className="mr-4" />
                  <h5 className=" w-fit">{menuLink.label}</h5>
                </Link>
              );
            })}
          </div>
          <div>
            <div className="flex items-center justify-between w-fit gap-4 mt-10">
              <Link href="#contact" className={`btn `} onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <ThemeButton />
            </div>
          </div>
          <p className="text-[14px] text-left text-secondary mt-[40vh]">
            @ 2026 - Designed & Developed by Brandon Fernandez
          </p>
        </div>
      </div>
    </div>
  );
}
