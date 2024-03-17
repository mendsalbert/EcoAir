import React from "react";
import rectangle from "/public/static/images/shape/rectangle.svg";
import figmaW from "/public/static/images/icon/figmaW.svg";
import dashboard from "/public/static/images/dashboard/dashboard2.jpg";
import Image from "next/image";

function View() {
  return (
    <section
      className="w-full flex flex-wrap justify-center items-center 2xl:mt-[120px] mt-[60px] p-3 xl:p-[5%] 2xl:p-0"
      data-aos="fade-up"
      data-aos-easing="fade-down"
    >
      <div className="w-full max-w-[1320px] bg-gray-900 xl:pl-16 pl-8 pt-10 xl:pt-[73px] rounded-20 flex justify-between flex-col lg:flex-row relative overflow-hidden xl:pb-0">
        {/* <!-- bg --> */}
        <div
          className="xl:w-[651px] h-[651px] rounded-full absolute xl:p-24 w-12 bg-white bg-gradient-to-l bottom-32 left-[-160px]"
          style={{
            background:
              "linear-gradient(to left, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))",
            zIndex: "-0",
          }}
        >
          <div className="w-full h-full rounded-full bg-basicInterface"></div>
        </div>
        <div className="absolute right-0 z-0 xl:top-4 bottom-0">
          <Image
            src={rectangle.src}
            height={rectangle.height}
            width={rectangle.width}
            alt=""
            className="max-w-full"
          />
        </div>
        {/* <!-- bg --> */}
        {/* <!-- Left side start --> */}
        <div className="z-10 pr-5">
          <div className="w-full max-w-[513px] flex flex-col">
            <span className="text-white font-poppins 2xl:text-5xl xl:text-4xl text-xl sm:text-3xl font-bold leading-big-loose">
              Make the coolest Dashboard Designs directly in Template!
            </span>
            <span className="text-white 2xl:text-xl text-lg font-medium leading-160 pb-12 pt-7">
              Customize and stylize your dashboard and all widgets easily with
              the Global Styles for typography & colors!
            </span>
            <div className="flex xl:gap-8 gap-3">
              <a
                href="#"
                className="inline-flex h-[60px] xl:py-2.5 py-1 xl:px-9 px-5 justify-center items-center gap-3 shrink-0 rounded-xl xl:border-[2.333px] border border-primary z-40 transition-all group relative overflow-hidden"
              >
                <div className="w-full h-full bg-primary absolute right-0 bottom-0 group-hover:w-0 group-hover:h-0 z-0 transition-all"></div>
                <span className="text-center xl:text-xl text-lg font-semibold leading-8 text-white z-10 group-hover:text-primary">
                  Live Preview
                </span>
              </a>

              <a
                href="#"
                className="h-[60px] py-2.5 px-9 justify-center items-center gap-3 shrink-0 rounded-xl border-[2.333px] border-white hover:border-primary flex z-50 relative group overflow-hidden transition-all"
              >
                <div className="w-0 h-0 bg-primary absolute right-0 bottom-0 group-hover:w-full group-hover:h-full z-0 transition-all"></div>
                <div className="text-white text-center text-xl font-semibold leading-8 group-hover:text-white z-10 flex gap-2">
                  <Image
                    src={figmaW.src}
                    height={figmaW.height}
                    width={figmaW.width}
                    alt="figma"
                  />{" "}
                  Get Figma
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Left side end  --> */}
        {/* <!-- Right side start  --> */}
        <div className="lg:w-1/2 w-full flex justify-end">
          <div className="pb-12 z-10 w-fit xl:mt-0 mt-10">
            <div className="bg-lightGray xl:pl-12 pl-4 py-4 rounded-l-20">
              <Image
                src={dashboard.src}
                height={dashboard.height}
                width={dashboard.width}
                alt="dashboard"
              />
            </div>
          </div>
        </div>
        {/* <!-- Right side end  --> */}
      </div>
    </section>
  );
}

export default View;
