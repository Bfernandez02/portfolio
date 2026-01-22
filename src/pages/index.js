import Head from "next/head";
import Image from "next/image";
import Hero from "@/components/Hero/DesktopHero";
import DesktopHero from "@/components/Hero/DesktopHero";
import MobileHero from "@/components/Hero/MobileHero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import AboutMe from "@/components/AboutMe";
import { useRef } from "react";
import Experience from "@/components/Experience";

export default function Home() {
  const scrollRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const handleScrollToRef = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Brandon Fernandez - Software Developer & Web Development Specialist</title>
        <meta 
          name="description" 
          content="Portfolio of Brandon Fernandez, a passionate software developer and web development specialist based in Ontario. Explore professional work, AI experiments, and personal projects showcasing expertise in fullstack development and computer science." 
        />
        <meta name="keywords" content="Brandon Fernandez, Software Developer, Web Development, Fullstack Developer, Computer Science, AI Research, Ontario, Portfolio, React, Next.js, JavaScript, TypeScript" />
        <meta name="author" content="Brandon Fernandez" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandonhfernandez.com/" />
        <meta property="og:title" content="Brandon Fernandez - Software Developer & Web Development Specialist" />
        <meta 
          property="og:description" 
          content="Portfolio of Brandon Fernandez, a passionate software developer and web development specialist based in Ontario. Explore professional work, AI experiments, and personal projects." 
        />
        <meta property="og:image" content="https://brandonhfernandez.com/headshot.jpg" />
        <meta property="og:site_name" content="Brandon Fernandez Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://brandonhfernandez.com/" />
        <meta property="twitter:title" content="Brandon Fernandez - Software Developer & Web Development Specialist" />
        <meta 
          property="twitter:description" 
          content="Portfolio of Brandon Fernandez, a passionate software developer and web development specialist based in Ontario. Explore professional work, AI experiments, and personal projects." 
        />
        <meta property="twitter:image" content="https://brandonhfernandez.com/headshot.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://brandonhfernandez.com/" />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Brandon Fernandez",
              "jobTitle": "Software Developer & Web Development Specialist",
              "description": "Passionate software developer with expertise in fullstack development, AI research, and computer science",
              "url": "https://brandonhfernandez.com",
              "image": "https://brandonhfernandez.com/headshot.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Ontario",
                "addressCountry": "CA"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Brock University"
              },
              "knowsAbout": [
                "Web Development",
                "Software Development",
                "Fullstack Development",
                "AI Research",
                "Computer Science",
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript"
              ],
              "sameAs": []
            })
          }}
        />
      </Head>

      <div className=" text-secondary flex items-center justify-center px-7 sm:px-10 md:px-15 lg:px-30 flex-col w-full ">
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
        <div ref={scrollRef} className="w-full pt-20">
          <AboutMe />
        </div>

        {/* Experience Section */}
        <div ref={experienceRef} className="w-full pt-20">
          <Experience />
        </div>

        {/* Projects Section */}
        <div ref={projectsRef} className="w-full pt-20">

        </div>
      </div>
    </>
  );
}
