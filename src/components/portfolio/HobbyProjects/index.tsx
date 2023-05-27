import React from "react";
import { useState } from "react";

import { motion } from "framer-motion";
import { ChevronUp } from "@styled-icons/evaicons-solid/ChevronUp";
import { ChevronDown } from "@styled-icons/evaicons-solid/ChevronDown";

export const HobbyProjects: React.FC = () => {
  const [showProjects, setShowProjects] = useState(true);

  return (
    <>
      <motion.div className="w-full border-cool-grey border-4 rounded-lg mx-auto px-10 bg-true-blue py-10 my-10 container">
        <div className="flex flex-row justify-between items-center">
          <h3 className="font-semibold font-sans text-white  payton-one text-2xl mx-5">
            Hobby Projects
          </h3>
          <div className="font-semibold font-sans text-white payton-one text-2xl mx-5 mt-0">
            {showProjects ? (
              <ChevronUp
                width="44"
                height="44"
                className="cursor-pointer"
                data-tip="Hide"
                fill="#fff"
                onClick={() => setShowProjects(false)}
              />
            ) : (
              <ChevronDown
                width="44"
                height="44"
                data-tip="Show"
                className="cursor-pointer"
                fill="#fff"
                onClick={() => setShowProjects(true)}
              />
            )}
          </div>
        </div>
        {showProjects && (
          <div className="flex flex-col mx-auto">
            <div className="flex flex-wrap gap-6 mt-20">
              <div className="w-44 rounded-2xl h-44 flex flex-cols items-center mx-auto text-center border-4 border-cool-gray-600 bg-white">
                <div className="flex flex-col items-center text-center mx-auto">
                  <p className="text-4xl">📆 🛫</p>
                  <p className="font-bold text-lg mt-2">DaysAway.app</p>
                </div>
              </div>
              <div className="w-44 rounded-2xl h-44 flex flex-cols items-center mx-auto text-center border-4 border-cool-gray-500 bg-white">
                <div className="flex flex-col items-center text-center mx-auto">
                  <p className="text-4xl">⛳️ 🦌</p>
                  <p className="font-bold text-lg mt-2">Golf Hunter</p>
                </div>
              </div>
              <div className="w-44 rounded-2xl h-44 flex flex-cols items-center mx-auto text-center border-4 border-cool-gray-400 bg-white">
                <div className="flex flex-col items-center text-center mx-auto">
                  <p className="text-4xl">🏡 🏬</p>
                  <p className="font-bold text-lg mt-2">every move</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 mt-20">
              <div className="w-44 rounded-2xl h-44 flex flex-cols items-center mx-auto text-center border-4 border-cool-gray-300 bg-white">
                <div className="flex flex-col items-center text-center mx-auto">
                  <p className="text-4xl">🚗 🏍️</p>
                  <p className="font-bold text-lg mt-2">cool whips</p>
                </div>
              </div>
              <div className="w-44 rounded-2xl h-44 flex flex-cols items-center mx-auto text-center border-4 border-cool-gray-200 bg-white">
                <div className="flex flex-col items-center text-center mx-auto">
                  <p className="text-4xl">🗺️ 📍</p>
                  <p className="font-bold text-lg mt-2">Pin It</p>
                </div>
              </div>
              <div className="w-44 rounded-2xl h-44 flex flex-cols items-center mx-auto text-center border-4 border-cool-gray-100 bg-white">
                <div className="flex flex-col items-center text-center mx-auto">
                  <p className="text-4xl">🪩 ⛳️</p>
                  <p className="font-bold text-lg mt-2">
                    Top <span className="text-sm text-red-600">mini </span>
                    Golf
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};
