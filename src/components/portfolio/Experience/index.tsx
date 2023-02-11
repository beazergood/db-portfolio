import React from "react";
import { useState } from "react";

import { ExperienceCard } from "../../UI/ExperienceCard";
import { experienceCards } from "../../../experience.data";
import { ChevronUp } from "@styled-icons/evaicons-solid/ChevronUp";
import { ChevronDown } from "@styled-icons/evaicons-solid/ChevronDown";

export const Experience: React.FC = () => {
  const [showExperience, setShowExperience] = useState(false);
  const cards = experienceCards;
  
  return (
    <>
      <div className="w-full border-cool-grey border-4 rounded-lg mx-auto px-10 bg-true-blue py-10 my-10 container">
        <div className="flex flex-row justify-between items-center">
          <h3 className="font-semibold font-sans text-white payton-one text-2xl mx-5 mt-0">
            Professional Experience{" "}
          </h3>
          <div className="font-semibold font-sans text-white payton-one text-2xl mx-5 mt-0">
            {showExperience ? (
              <ChevronUp
                width="44"
                height="44"
                className="cursor-pointer "
                data-tip="Hide"
                fill="#fff"
                onClick={() => setShowExperience(false)}
                />
                ) : (
                  <ChevronDown
                  width="44"
                  height="44"
                  className="cursor-pointer "
                  data-tip="Show"
                  fill="#fff"
                  onClick={() => setShowExperience(true)}
              />
            )}
          </div>
        </div>
        {showExperience && (
          <div className="container mt-10">
            <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-cool-gray pointer-events-none">
                    <div className="h-20"></div>
                  </div>
                </div>
              </div>
              {cards.length &&
                cards.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      company={card.company}
                      role={card.role}
                      dates={card.dates}
                      pills={card.pills}
                      img={card.img}
                      side={card.side}
                      description={card.description}
                    />
                  );
                })}
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-cool-gray pointer-events-none">
                    <div className="h-40"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
