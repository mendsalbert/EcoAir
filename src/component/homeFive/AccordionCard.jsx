import React from "react";

function AccordionCard({
  activeAccordion,
  setActiveAccordion,
  id,
  title,
  desc,
}) {
  return (
    <div className="bg-[#F6F9FB] px-6 py-6 flex flex-col gap-8 transition-all">
      <div
        className="flex justify-between accordion-header cursor-pointer"
        onClick={() => setActiveAccordion(activeAccordion === id ? false : id)}
      >
        <span className="text-gray-900 xl:text-2xl text-lg font-normal leading-150">
          {title}
        </span>

        <span
          className={`accordion-icon ${
            activeAccordion === id ? "rotate-0" : "rotate-180"
          } transition-all`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.46839 17.0306C2.53806 17.1005 2.62082 17.1559 2.71194 17.1937C2.80305 17.2315 2.90074 17.251 2.99939 17.251C3.09804 17.251 3.19572 17.2315 3.28684 17.1937C3.37796 17.1559 3.46072 17.1005 3.53039 17.0306L11.9994 8.56014L20.4684 17.0306C20.5381 17.1004 20.6209 17.1557 20.712 17.1934C20.8031 17.2312 20.9008 17.2506 20.9994 17.2506C21.098 17.2506 21.1957 17.2312 21.2868 17.1934C21.3779 17.1557 21.4607 17.1004 21.5304 17.0306C21.6001 16.9609 21.6554 16.8781 21.6932 16.787C21.7309 16.6959 21.7503 16.5983 21.7503 16.4996C21.7503 16.401 21.7309 16.3034 21.6932 16.2123C21.6554 16.1212 21.6001 16.0384 21.5304 15.9686L12.5304 6.96864C12.4607 6.89879 12.378 6.84338 12.2868 6.80557C12.1957 6.76776 12.098 6.7483 11.9994 6.7483C11.9007 6.7483 11.8031 6.76776 11.7119 6.80557C11.6208 6.84338 11.5381 6.89879 11.4684 6.96864L2.46839 15.9686C2.39854 16.0383 2.34313 16.1211 2.30532 16.2122C2.26751 16.3033 2.24805 16.401 2.24805 16.4996C2.24805 16.5983 2.26751 16.696 2.30532 16.7871C2.34313 16.8782 2.39854 16.961 2.46839 17.0306Z"
              fill="#2A313C"
            />
          </svg>
        </span>
      </div>
      <div
        className={`accordion-body transition-all origin-top ${
          activeAccordion === id ? "introAnimation" : "hidden"
        }`}
      >
        <span className="text-gray-600 xl:text-base text-sm leading-175">
          {desc}
        </span>
      </div>
    </div>
  );
}

export default AccordionCard;
