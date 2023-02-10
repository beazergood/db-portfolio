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
            <p className="text-xl my-4">
            Experienced and versatile software engineer with a strong background in user-interface and user-experience design. I work with
              cross-functional teams to bring best-in-class web applications to
              life.
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="text-xl my-4 md:ml-2 ml-0">
              Comfortable and enthusiastic about working with a variety of tools and technologies that
              span design and development, gradually bridging the
              gap between the two disciplines.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-purp flex-col rounded-2xl hover:shadow-lg col-span-1">
            <p className="font-bold text-purp-dark">UI</p>
            <p className="text-4xl py-3 text-purp-dark">Design &amp; Build 🤖</p>
            <p className="text-2xl text-purp-dark">
              Short feedback loops with designers helps to bring their
              prototypes to life as they intended.
            </p>
          </div>
          <div className="p-5 bg-mintee flex-col rounded-2xl hover:shadow-lg col-span-1">
            <p className="font-bold text-thyme">UX</p>
            <p className="text-4xl py-3 text-thyme">
              Intuitive &amp; Accessible 👓
            </p>
            <p className="text-2xl text-thyme">
              Great apps are the ones that have been carefully thought about
              with the end users in mind from the outset.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
