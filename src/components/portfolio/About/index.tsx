import React from "react";
import cx from "classnames";

import useResponsive from "../../../hooks/responsive";

export interface AboutProps {
  title?: string;
}

export const About: React.FC<AboutProps> = () => {
  const { isDesktopOrLaptop } = useResponsive();

  return (
    <>
      <div className={"px-4 container mx-auto flex-col"}>
        <div className="flex flex-col md:flex-row mb-10 mt-10">
          <div className="md:w-1/2">
            <p className="text-xl m-4">
            Creative and versatile software engineer with 10+ years of experience and a strong background in UI/UX designing and building enterprise web applications. Excellent communication skills and track record working with remote and cross-functional teams. 
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="text-xl m-4 md:ml-2 ml-0">
            Proven ability to understand and abstract complex business problems into user-friendly software solutions built for scale.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 border-4 border-melon flex-col rounded-2xl hover:shadow-lg col-span-1">
            <p className="font-bold text-melon">Accessible UI</p>
            <p className="text-4xl py-3 text-">Design &amp; Build 💅🏻</p>
            <p className="text-2xl text-">
              Short feedback loops with designers & UX experts helps to deliver the right end product for all users.
            </p>
          </div>
          <div className="p-5 border-4 border-mintee flex-col rounded-2xl hover:shadow-lg col-span-1">
            <p className="font-bold text-mintee-dark">User-centric UX</p>
            <p className="text-4xl py-3 text-">
              Jobs to be done ✅
            </p>
            <p className="text-2xl text-">
              Always start with the user and work backwards. Understand the problem and the user's goals.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-5 border-4 border-cool-gray  flex-col rounded-2xl hover:shadow-lg col-span-1">
            <p className="font-bold text-cool-gray">KISS</p>
            <p className="text-4xl py-3 text-">Clean Code 🤖</p>
            <p className="text-2xl text-">
              {/* Peer reviewed code is the best way to ensure that the code is fit for purpose and easy to understand and maintain. */}
              Abilitiy to abstract complex business problems into simple solutions that are well tested and built for scale.
            </p>
          </div>
          <div className="p-5 border-4 border-melon flex-col rounded-2xl hover:shadow-lg col-span-1">
            <p className="font-bold text-melon">Growth Mindset</p>
            <p className="text-4xl py-3 text-">
              Every day a schoolday 🧠
            </p>
            <p className="text-2xl text-">
              I have a passion for learning the best new ways to design and build useful web apps. Learning how to learn is a key skill for any developer.
            </p>
          </div>
        </div>

      </div>
    </>
  );
};
