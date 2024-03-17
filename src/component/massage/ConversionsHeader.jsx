"use client";
import ProtoTypes from "prop-types";
import authorImg from "/public/static/images/message/user-t.png";
import Image from "next/image";

function ConversionsHeader({ toggleSetting }) {
  return (
    <header className="bg-white dark:bg-darkblack-600 p-5 lg:pr-24 flex justify-between items-center border-t border-bgray-300 dark:border-darkblack-400">
      <div className="flex space-x-3">
        <div className="relative">
          <Image
            priority={true}
            height={authorImg.height}
            width={authorImg.width}
            src={authorImg.src}
            className="w-12 h-12 rounded-full"
            alt=""
          />
          <span className="bg-success-300 dark:border-bgray-900 border-2 border-white block w-[14px] h-[14px] rounded-full absolute bottom-1 right-0"></span>
        </div>
        <div>
          <h4 className="text-base font-bold text-bgray-900 dark:text-white">
            Ajoy Sarkar
          </h4>
          <span className="text-sm text-bgray-600">Online</span>
        </div>
      </div>
      <button
        aria-label="none"
        type="button"
        className="dark:bg-darkblack-500 w-12 h-12 rounded-full grid place-items-center"
        onClick={toggleSetting}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
            stroke="#A0AEC0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
            stroke="#A0AEC0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
            stroke="#A0AEC0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </header>
  );
}

ConversionsHeader.propTypes = {
  toggleSetting: ProtoTypes.func,
};

export default ConversionsHeader;
