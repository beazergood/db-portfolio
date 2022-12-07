import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ReactTooltip from "react-tooltip";
import useResponsive from "../../../hooks/responsive";
import cx from "classnames";

export interface AboutProps {
  title?: string;
}

const WavingHand = () => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
    delay: 300,
  });

  const wave = {
    visible: { rotate: 20 },
    hidden: {
      rotate: -20,
    },
  };
  return (
    <motion.div
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      variants={wave}
      style={{
        marginBottom: "-20px",
        marginRight: "-45px",
        paddingBottom: "20px",
        paddingRight: "45px",
        display: "inline-block",
      }}
      transition={{
        duration: 0.3,
        repeat: 3,
        ease: "easeInOut",
        type: "tween",
        from: 0,
      }}
    >
      👋
    </motion.div>
  );
};

export const About: React.FC<AboutProps> = () => {
  const { isDesktopOrLaptop } = useResponsive();

  return (
    <>
      <div
        className={cx(
          "px-4 container mx-auto flex-col",
          isDesktopOrLaptop ? "-mt-20" : "mt-20"
        )}
      >
        {isDesktopOrLaptop && (
          <div className="flex flex-col md:flex-row my-10">
            <img
              src={"/images/me.jpg"}
              width="90px"
              height="90px"
              className="rounded-full"
            />
          </div>
        )}
        <div className="flex flex-col md:flex-row mb-10 mt-10">
          <div className="md:w-1/2">
            <ReactTooltip />
            <p className="text-xl">
              👋🏻 I'm Dave, a front-end software engineer from the UK
            </p>
            <p className="text-xl my-4">
              I work with teams of software engineers and designers to build
              best-in-class web applications.
              {/* I enjoy working with front end web technologies and design systems.
              take specific interest in crafting high quality user interface
              (UI) components and enjoyable end user experiences (UX) */}
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="text-xl my-4 md:ml-2 -mt-1">
              I enjoy working with front end web technologies and design
              systems. I take specific interest in crafting high quality user
              interface (UI) components and enjoyable end user experiences (UX)
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            className="p-5 bg-purp flex-col rounded-2xl hover:shadow-lg col-span-1"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
          >
            <p className="font-bold text-purp-dark">UI</p>
            <p className="text-4xl py-3 text-purp-dark">Design &amp; Build</p>
            <p className="text-2xl text-purp-dark">
              Short feedback loops with designers helps to bring their prototypes to
              life as they intended.
            </p>
          </motion.div>
          <motion.div
            className="p-5 bg-mintee flex-col rounded-2xl hover:shadow-lg col-span-1"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
          >
            <p className="font-bold text-thyme">UX</p>
            <p className="text-4xl py-3 text-thyme">
              Intuitive &amp; Accessible
            </p>
            <p className="text-2xl text-thyme">
              Great apps are the ones that have been carefully thought about with the end users in mind from the outset.
            </p>
          </motion.div>
        </div>{" "}
      </div>
    </>
  );
};
