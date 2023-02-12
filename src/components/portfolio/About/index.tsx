import React from "react";

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
            Creative and versatile Software Engineer with 10+ years of experience and a strong background designing and building enterprise web applications. Excellent communication skills and track record working with remote and cross-functional teams. 
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="text-xl m-4 ml-3">
            Proven ability to understand and abstract complex business problems into user-friendly software solutions built for scale.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 flex-col rounded-2xl col-span-1">
            <p className="font-bold text-cool-gray">Accessible UI</p>
            <p className="text-4xl py-3 text-">Design &amp; Build 💅🏻</p>
            <p className="text-lg text-">
              Short feedback loops with designers & UX experts helps to deliver the right end product to all users and devices.
            </p>
          </div>
          <div className="p-5 flex-col rounded-2xl col-span-1">
            <p className="font-bold text-cool-gray">User-centric UX</p>
            <p className="text-4xl py-3 text-">
              Jobs to be done ✅
            </p>
            <p className="text-lg text-">
              Ensure the end user has a great experience by understanding their needs and building the right solution.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-5 flex-col rounded-2xl col-span-1">
            <p className="font-bold text-cool-gray">Clean Code</p>
            <p className="text-4xl py-3 text-">Peer reviewed 🤖</p>
            <p className="text-lg text-">
              Engaged and collaborative team member always working to ensure code is readable, testable and maintainable.
            </p>
          </div>
          <div className="p-5 flex-col rounded-2xl col-span-1">
            <p className="font-bold text-cool-gray">Growth Mindset</p>
            <p className="text-4xl py-3 text-">
              Always Learning 🧠
            </p>
            <p className="text-lg text-">
              I'm enthusiastic about increasing my understanding of core web tools, technologies, and patterns to elevate the end-user experience.
            </p>
          </div>
        </div>

      </div>
    </>
  );
};
