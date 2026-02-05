import { useRef, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./ThemeProvider";
import { motion, useAnimation, useInView } from "framer-motion";

export default function AboutMe() {
  const { theme } = useTheme();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);
  return (
    <div
      className="w-fit flex flex-col md:flex-row justify-between lg:py-10 py-5 max-md:items-center gap-10 md:gap-20 lg:gap-30 items-center"
      ref={ref}
    >
      <motion.div
        className="w-fit"
        controls={controls}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        }}
      >
        <Image
          src={`/Brandon_${theme}.png`}
          alt="About Me Image"
          width={600}
          height={600}
          className="w-full h-auto rounded-[10px] md:max-w-[450px] max-w-[200px]"
        />
      </motion.div>

      <motion.div
        className="flex flex-col gap-8 w-full"
        initial={{ opacity: 0, y: 60 }}
        animate={controls}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        variants={{ visible: { opacity: 1, y: 0 } }}
      >
        <div className="flex gap-4 xl:gap-12 sm:flex-row flex-col w-full justify-center">
          <div className="w-full border-border rounded-[10px] flex flex-col items-center  p-4 border-2">
            <FontAwesomeIcon
              icon={faAward}
              className="text-2xl md:text-4xl text-primary mb-4"
            />
            <h6 className="text-center max-lg:text-[16px]!">
              3+ Years of fullstack experience
            </h6>
            <h6 className="text-center max-lg:text-[16px]!">
              1+ Year of AI research
            </h6>
          </div>

          <div className="w-full border-border rounded-[10px] flex flex-col items-center  p-4 border-2">
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="text-2xl md:text-4xl text-primary mb-4"
            />
            <h6 className="text-center max-lg:text-[16px]!">
              BSc (Honours) in Computer Science Co-op
            </h6>
            <h6 className="text-center max-lg:text-[16px]!">
              MSc in Computer Science (in progress)
            </h6>
          </div>
        </div>

        <motion.p
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 1 }}
          className="max-xl:text-[14px]!"
          controls={controls}
        >
          Hello! I&apos;m Brandon, a passionate software developer with a knack
          for creating dynamic and user-friendly web applications. With a strong
          foundation in both front-end and back-end technologies, I thrive on
          transforming ideas into functional digital experiences.
        </motion.p>
      </motion.div>
    </div>
  );
}
