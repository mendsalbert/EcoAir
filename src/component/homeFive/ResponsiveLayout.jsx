import React from "react";
import bg from "/public/static/images/responsive/bg.png";
import bgMain from "/public/static/images/responsive/bg1.png";
import responsive from "/public/static/images/responsive/responsive.png";
import Image from "next/image";

function ResponsiveLayout() {
  return (
    <section
      className="w-full bg-basicInterface flex justify-center xl:py-[120px] py-[60px] relative overflow-hidden"
      style={{ background: `url(${bgMain})` }}
    >
      <div className="px-[5%] 2xl:px-0 max-w-[1320px] w-full flex flex-col xl:flex-row justify-center items-center">
        {/* <!-- Right side start  --> */}
        <div
          className="w-full xl:max-w-[578px] flex justify-center flex-col"
          data-aos="fade-right"
          data-aos-easing="fade-left"
        >
          <span className="text-white font-poppins xl:text-5xl text-3xl font-bold leading-big-loose text-center xl:text-left">
            Responsive Layout for any Device
          </span>
          <br />
          <span className="text-secondary-200 xl:text-xl text-lg font-medium leading-130 tracking-[-0.356] mt-3 text-center xl:text-left xl:max-w-[473px]">
            The layout is responsive and looks gorgeous and professional on any
            major devices and this Theme comes with custom page Themes.
          </span>
          <div className="justify-center items-center w-full xl:w-fit text-white text-lg font-normal leading-7 tracking-[-0.4] xl:gap-10 gap-6 flex mt-10">
            <a
              href="#"
              className="inline-flex h-[60px] py-2.5 px-9 justify-center items-center gap-3 shrink-0 hover:border border-solid border-white border-opacity-60 z-40 transition-all group relative rounded-[28px] overflow-hidden"
            >
              <div className="w-full h-full bg-primary absolute right-0 bottom-0 group-hover:w-0 group-hover:h-0 z-0 transition-all"></div>
              <span
                className="text-center text-lg leading-8 text-white z-10"
                href="#"
              >
                Check Demos
              </span>
            </a>

            <a
              href="#"
              className="flex w-[188px] h-14 justify-center items-center rounded-[28px] border border-solid border-white hover:border-primary border-opacity-60 z-50 relative group overflow-hidden transition-all"
            >
              <div className="w-0 h-0 bg-primary absolute right-0 bottom-0 group-hover:w-full group-hover:h-full z-0 transition-all"></div>
              <span className="z-10" href="#">
                Purchase now!
              </span>
            </a>
          </div>
        </div>
        {/* <!-- Right side end  --> */}
        {/* <!-- Left side start  --> */}
        <div
          className="flex xl:justify-start justify-center items-center mt-8 xl:mt-0"
          data-aos="fade-left"
          data-aos-easing="fade-right"
        >
          <Image
            src={bg.src}
            height={bg.height}
            width={bg.width}
            alt=""
            className="absolute w-full sm:w-auto sm:h-[60%] xl:-top-[37px] xl:h-full xl:right-[130px]"
          />
          <Image
            src={responsive.src}
            height={responsive.height}
            width={responsive.width}
            alt=""
            className="relative w-full max-w-[948px] mt-16 xl:mt-0 -ml-20 xl:ml-0"
          />
        </div>

        {/* <!-- Left side end  --> */}
      </div>
    </section>
  );
}

export default ResponsiveLayout;
