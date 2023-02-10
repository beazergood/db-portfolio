import React from "react";
import { motion } from "framer-motion";

export interface InterestsProps {
  title?: string;
}

export const Interests: React.FC<InterestsProps> = (
  { title } = { title: "A simple Tailiwind template" }
) => {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  return (
    <>
      <motion.div className="my-44 w-full border- border-green-200 container">
        <h3 className="font-semibold font-sans text-gray-2B2B2B  payton-one text-2xl mx-5 mt-10">
          Hobby Projects
        </h3>
        <div className="mx-5">
          <svg height="10" width="100" className="my-2">
            <line
              x1="0"
              y1="0"
              x2="100"
              y2="0"
              stroke="hsl(287, 47%, 67%)"
              strokeWidth="6"
            />
          </svg>
        </div>

        <div className="flex flex-col mx-auto border- border-red-300">
          <div className="flex flex-row border- mt-20 border-red-200">
            <div className="w-1/3 text-center border- border-red-100">
              <p className="text-4xl">📆 🛫</p>
              <p className="font-bold text-lg mt-2">DaysAway.app</p>
            </div>
            <div className="w-1/3 text-center border- border-red-100">
              <p className="text-4xl">🏌🏻💯</p>
              <p className="font-bold text-lg mt-2">🕳️  The Provisional</p>
            </div>
            <div className="w-1/3 text-center border- border-red-100">
              <p className="text-4xl">🏡 🏬</p>
              <p className="font-bold text-lg mt-2">every move</p>
            </div>
          </div>
          <div className="flex flex-row border- mt-20 border-red-200">
            <div className="w-1/3 text-center border- border-red-100">
              <p className="text-4xl">🚗 🏍️</p>
              <p className="font-bold text-lg mt-2">cool whips</p>
            </div>
            <div className="w-1/3 text-center border- border-red-100">
            <p className="text-4xl">🗺️ 📍</p>
              <p className="font-bold text-lg mt-2">Pin It</p>
            </div>
            <div className="w-1/3 text-center border- border-red-100">
            <p className="text-4xl">🪩 ⛳️</p>
              <p className="font-bold text-lg mt-2">Top <span className="text-sm text-red-600">mini </span>
              Golf</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
