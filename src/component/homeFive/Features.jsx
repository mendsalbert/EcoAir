import React from "react";
import FeaturesCard from "./FeaturesCard";

import friendlyW from "/public/static/images/features/friendlyW.svg";
import friendly from "/public/static/images/features/friendly.svg";
import reactW from "/public/static/images/features/reactW.svg";
import react from "/public/static/images/features/react.svg";
import appsRectangleW from "/public/static/images/features/appsRectangleW.svg";
import appsRectangle from "/public/static/images/features/appsRectangle.svg";
import customerServiceW from "/public/static/images/features/customerServiceW.svg";
import customerService from "/public/static/images/features/customerService.svg";
import scienceW from "/public/static/images/features/scienceW.svg";
import science from "/public/static/images/features/science.svg";
import friendly2W from "/public/static/images/features/friendly2W.svg";
import friendly2 from "/public/static/images/features/friendly2.svg";
import darkModeW from "/public/static/images/features/darkModeW.svg";
import darkMode from "/public/static/images/features/darkMode.svg";
import fontW from "/public/static/images/features/fontW.svg";
import font from "/public/static/images/features/font.svg";

function Features() {
  return (
    <section
      className="flex justify-center items-center flex-col 2xl:pt-28 px-[5%] w-full"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      {/* <!-- heading  --> */}
      <div className="w-full max-w-[614px] text-center">
        <span className="leading-big-loose font-bold text-3xl sm:text-4xl 2xl:text-5xl xl:text-4xl font-poppins text-center text-gray-800">
          All features included in a single Design Tool
        </span>
      </div>
      <div className="w-full max-w-[527px] text-center pt-3">
        <span className="text-gray-800 font-urbanist 2xl:text-xl text-lg font-normal leading-160">
          Venus main features. Most important and useful features of Template in
          a single design system tool.
        </span>
      </div>
      <div className="w-full max-w-[1320px] flex justify-center items-center flex-wrap pt-20 gap-x-7 gap-y-3">
        <FeaturesCard
          title="Fully Responsive"
          desc="Components / assets are fully responsive"
          img={friendlyW}
          imgHover={friendly}
        />
        <FeaturesCard
          title="Atomic Design"
          desc="Themeforest is based on Atomic Design Methodology"
          img={reactW}
          imgHover={react}
        />
        <FeaturesCard
          title="Variants & Auto Layout"
          desc="All compontents states are made as variants"
          img={appsRectangleW}
          imgHover={appsRectangle}
        />
        <FeaturesCard
          title="Free Support"
          desc=" You receive Free Support for Pro, Team & Company License"
          img={customerServiceW}
          imgHover={customerService}
        />
        <FeaturesCard
          category="Upcoming"
          categoryClass="top-10"
          title="React Library"
          desc=" Bankco come with a specific library based on React"
          img={scienceW}
          imgHover={science}
        />
        <FeaturesCard
          category="Upcoming"
          categoryClass="top-10"
          title=" Native Ready"
          desc="All elements are Android & IOS Native Ready"
          img={friendly2W}
          imgHover={friendly2}
        />
        <FeaturesCard
          category="Upcoming"
          categoryClass="-top-10"
          title="Light & Dark Mode"
          desc="BankCo is available in two modes: Light & Dark Mode"
          img={darkModeW}
          imgHover={darkMode}
        />
        <FeaturesCard
          title="Global Styles"
          desc=" More than 250+ Global Styles for typography & colors."
          img={fontW}
          imgHover={font}
        />
      </div>
    </section>
  );
}

export default Features;
