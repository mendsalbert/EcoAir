import React from "react";
import cardBg from "/public/static/images/cards/cardBg.png";
import Image from "next/image";

function FeaturesCard({ title, category, desc, imgHover, img, categoryClass }) {
  return (
    <div
      className="pt-4 overflow-hidden"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
    >
      <div className="ease-in-out duration-500 w-[306px] flex justify-center items-center flex-col rounded-20 current:bg-primary hover:bg-primary drop-shadow-[10px_10px_40px_0px_rgba(39,218,104,0.10)] p-6 relative group border-gray-200 border-solid border">
        <Image
          src={cardBg.src}
          height={cardBg.height}
          width={cardBg.width}
          alt=""
          className="absolute -right-[58px] -bottom-[55px]"
        />
        <div className="max-w-[120px] flex flex-col items-center justify-start relative">
          {category ? (
            <div
              className={`px-4 py-[2px] gap-4 inline-flex rounded-[100px] bg-portage ${categoryClass} absolute`}
            >
              <span className="text-white text-center text-sm font-normal leading-180">
                {category}
              </span>
            </div>
          ) : (
            ""
          )}
          <Image
            className="hidden group-hover:block current:block"
            src={img.src}
            height={img.height}
            width={img.width}
            alt="friendlyW"
          />
          <Image
            className="current:hidden group-hover:hidden block"
            src={imgHover.src}
            height={imgHover.height}
            width={imgHover.width}
            alt="friendly"
          />
        </div>

        <div className="text-center font-urbanist z-10">
          <span className="text-3xl font-bold leading-150 current:text-white group-hover:text-white text-gray-900">
            {title}{" "}
          </span>
          <br />
          <span className="current:text-gray-300 group-hover:text-gray-300 text-base font-medium px-2 z-10 text-gray-600">
            {desc}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FeaturesCard;
