import Image from "next/image";
import Hero from "@/components/Hero/DesktopHero";
import DesktopHero from "@/components/Hero/DesktopHero";
import MobileHero from "@/components/Hero/MobileHero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import AboutMe from "@/components/AboutMe";
import { useRef } from "react";
export default function Home() {
  const scrollRef = useRef(null);
  const handleScrollToRef = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" text-secondary flex items-center justify-center px-10 lg:px-30 flex-col w-full ">
      {/* Hero Section */}
      <div className=" min-h-screen flex flex-col items-center justify-between w-full">
        <div className="hidden md:block w-full">
          <DesktopHero />
        </div>
        <div className="md:hidden w-full">
          <MobileHero />
        </div>

        <button
          onClick={handleScrollToRef}
          className="w-fit flex flex-col items-center justify-between gap-3 mb-6"
        >
          <h6 className="text-primary">About me</h6>
          <div className="flex justify-center w-fit">
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-primary text-2xl animate-bounce"
            />
          </div>
        </button>
      </div>

      {/* About Me Section */}
      <div ref={scrollRef} className="w-full py-20">
        <AboutMe />
      </div>
    </div>
  );
}
