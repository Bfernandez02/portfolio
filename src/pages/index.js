import DesktopHero from "@/components/Hero/DesktopHero";
import MobileHero from "@/components/Hero/MobileHero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import AboutMe from "@/components/AboutMe";
import { useRef, useEffect } from "react";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects/Projects";
import { getAllProjects } from "@/utils/projectLoader";
import SkillsAndTech from "@/components/Skills/SkillsAndTech";
import SEOHead from "@/components/SEOHead";
import ContactForm from "@/components/ContactForm";

export default function Home({ projects }) {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const overviewRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollToRef = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const refs = {
    overview: overviewRef,
    about: aboutRef,
    experience: experienceRef,
    projects: projectsRef,
    skills: skillsRef,
    contact: contactRef,
  };

  const hash = window.location.hash.slice(1);

  useEffect(() => {
    if (hash && refs[hash]) {
      refs[hash].current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <>
      <SEOHead />
      <div className=" text-secondary flex items-center justify-center px-7 sm:px-10 md:px-15 lg:px-30 flex-col w-full ">
        {/* Hero Section */}
        <div
          ref={overviewRef}
          className=" min-h-screen flex flex-col items-center justify-between w-full"
        >
          <div className="hidden md:block w-full">
            <DesktopHero />
          </div>
          <div className="md:hidden w-full">
            <MobileHero />
          </div>

          <button
            onClick={handleScrollToRef}
            className="w-fit flex flex-col items-center justify-between gap-3 mb-6 mt-2"
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
        <div ref={aboutRef} className="w-full pt-20">
          <AboutMe />
        </div>

        {/* Skills and Tech Section */}
        <div ref={skillsRef} className="w-full pt-20">
          <SkillsAndTech />
        </div>

        {/* Experience Section */}
        <div ref={experienceRef} className="w-full pt-20">
          <Experience />
        </div>

        {/* Projects Section */}
        <div ref={projectsRef} className="w-full pt-20">
          <Projects projects={projects} />
        </div>

        <div ref={contactRef} className="w-full pt-20">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const projects = getAllProjects();

  return {
    props: {
      projects,
    },
  };
}
