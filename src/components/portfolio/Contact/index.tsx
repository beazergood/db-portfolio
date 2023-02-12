import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "@styled-icons/bootstrap/Linkedin";
import { Email } from "@styled-icons/entypo/Email";
import * as packageInfo from "../../../../package.json";

export const Contact: React.FC = () => {
  return (
    <>
      <div className="w-full border- mt-44 mx-auto px-10  border-grey-200 relative">
        <motion.div className="mt-10 container relative ">
          <h1 className="text-xl text-true-blue payton-one text-left pb-8 ">
            ways to get in touch
          </h1>
          <div className="grid gap-3 grid-cols-2">
            <Linkedin
              onClick={() => {
                document.location.href =
                  "https://www.linkedin.com/in/dave-beazer";
              }}
              width="44"
              className="cursor-pointer hover:shadow-lg z-10 relative"
              height="44"
              data-tip="See my profile 👉"
              fill="#576CA1ff"
            />

            <Email
              onClick={() => {
                document.location.href = "mailto:hi@davebeazer.dev";
              }}
              width="44"
              height="44"
              className="cursor-pointer hover:shadow-lg z-10 relative"
              data-tip="Send me an email 👉"
              fill="#576CA1ff"
            />
          </div>
        </motion.div>
      </div>
      <div className="absolute right-0 h-100 w-screen">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
          width="1440px"
          height="300px"
          preserveAspectRatio="none"
          className="border- border-purp-dark "
          style={{ right: 0, position: "absolute", zIndex: -2 }}
        >
          <motion.path
            id="myPath"
            d="M 0.249 291.84 L 26.944 291.84 C 53.54 291.84 107.23 291.84 160.221 264.784 C 213.512 238.133 267.203 183.413 320.194 172.976 C 373.484 162.133 427.175 194.56 480.166 194.56 C 533.457 194.56 587.147 162.133 640.138 178.347 C 693.429 194.56 747.12 259.413 800.111 237.829 C 853.401 215.84 907.092 108.427 960.083 81.067 C 1013.374 53.707 1067.065 108.427 1120.055 145.92 C 1173.346 183.413 1227.037 205.707 1280.028 178.347 C 1333.319 150.987 1387.009 76 1413.005 37.797 L 1440 0 L 1440 292 L 0 292 Z"
            fill="#576CA1"
          ></motion.path>

          <motion.text x="200">
            <textPath href="#myPath" fill="#576CA1">
              v {packageInfo.version}
            </textPath>
          </motion.text>
          <motion.text x="270">
            <textPath href="#myPath" fill="#576CA1" fontSize="14">
              site built with Next, Storybook &amp; Tailwind
            </textPath>
          </motion.text>
        </motion.svg>
      </div>
    </>
  );
};
