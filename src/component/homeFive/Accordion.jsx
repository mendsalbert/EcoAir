"use client"
import React, { useState } from "react";
import AccordionCard from "./AccordionCard";

function Accordion() {
  const [activeAccordion, setActiveAccordion] = useState(1);

  return (
    <section className="flex justify-center items-center w-full 2xl:py-[120px] py-[60px] px-[5%] 2xl:px-0">
      <div className="max-w-[1320px] w-full">
        {/* <!-- heading  --> */}
        <div className="text-gray-900 text-center font-poppins xl:text-5xl text-3xl font-bold leading-big-loose pb-14">
          <span>Frequently asked question</span>
        </div>

        {/* <!-- heading  --> */}

        <div className="flex gap-16 flex-col xl:flex-row px-[5%] xl:px-0">
          <div className="w-full xl:max-w-[630px] flex flex-col gap-[30px]">
            <AccordionCard
              title="Enhance workflow consistency"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={1}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
            <AccordionCard
              title="Build professional & performance projects"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={2}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
            <AccordionCard
              title="Work together with your team"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={3}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
            <AccordionCard
              title="Easy-to-use for both designers & developers"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={4}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
            <AccordionCard
              title="Access to modern UI components"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={5}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
          </div>
          <div className="w-full xl:max-w-[630px] flex flex-col gap-[30px]">
            <AccordionCard
              title="leveraged methods of empowerment"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={6}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
            <AccordionCard
              title=" leveraged methods of empowerment"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={7}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
            <AccordionCard
              title="leveraged methods of empowerment"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={8}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
            <AccordionCard
              title="leveraged methods of empowerment"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={9}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
            <AccordionCard
              title="leveraged methods of empowerment"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={10}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
            <AccordionCard
              title="leveraged methods of empowerment"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={11}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accordion;
