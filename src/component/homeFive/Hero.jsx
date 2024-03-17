import React from "react";

import path from "/public/static/images/shape/path.svg";
import path0 from "/public/static/images/shape/path0.svg";
import path1 from "/public/static/images/shape/path1.svg";
import group5 from "/public/static/images/shape/group5.svg";
import path38 from "/public/static/images/shape/path38.svg";
import path2 from "/public/static/images/shape/path2.svg";
import path3 from "/public/static/images/shape/path3.svg";
import path4 from "/public/static/images/shape/path4.svg";
import path5 from "/public/static/images/shape/path5.svg";
import path7 from "/public/static/images/shape/path7.svg";
import path40 from "/public/static/images/shape/path40.svg";
import path9 from "/public/static/images/shape/path9.svg";
import path8 from "/public/static/images/shape/path8.svg";
import path11 from "/public/static/images/shape/path11.svg";
import path10 from "/public/static/images/shape/path10.svg";

import fill3 from "/public/static/images/shape/fill3.svg";
import shape from "/public/static/images/shape/Shape 2.svg";
import dashboard from "/public/static/images/dashboard/dashboard.jpg";
import Image from "next/image";

function Hero() {
  return (
    <section
      className="w-full flex justify-center items-center xl:px-[5%] 2xl:px-0 pt-[120px] "
      data-aos="fade-up"
    >
      <div className="max-w-[1320px] w-full  flex flex-col justify-center items-center pt-28 pb-36 relative p-10 transition-all duration-1000">
        <div className="absolute overFlowHidden w-full h-full xl:block moving-element">
          <Image
            className="absolute top-[6%] right-[2%] 2xl:right-[1%] z-10"
            src={path.src}
            height={path.height} width={path.width}
            alt=""
          />
          <Image
            className="absolute top-[6%] left-[3%] z-10"
            src={path0.src}
            height={path0.height} width={path0.width}
            alt=""
          />

          <Image
            className="absolute top-[16%] 2xl:left-[-2%] left-[-1%] z-10"
            src={path1.src}
            height={path1.height} width={path1.width}
            alt=""
          />
          <Image
            className="absolute top-[16.5%] left-[7%] z-10"
            src={group5.src}
            height={group5.height} width={group5.width}
            alt=""
          />
          <Image
            className="absolute top-[17.5%] xl:right-[5%] z-10"
            src={path38.src}
            height={path38.height} width={path38.width}
            alt=""
          />
          <Image
            className="absolute top-[18.5%] right-[-5%] z-10 hidden xl:block"
            src={path2.src}
            height={path2.height} width={path2.width}
            alt=""
          />
          <Image
            className="absolute top-[26.5%] xl:left-[0%] left-10 z-10"
            src={path3.src}
            height={path3.height} width={path3.width}
            alt=""
          />
          <Image
            className="absolute top-[31.5%] right-[16%] z-10"
            src={path4.src}
            height={path4.height} width={path4.width}
            alt=""
          />
          <Image
            className="absolute top-[43.5%] right-[-5%] z-10"
            src={path5.src}
            height={path5.height} width={path5.width}
            alt=""
          />
          <Image
            className="absolute top-[49.7%] right-[-1.2%] z-10"
            src={path7.src}
            height={path7.height} width={path7.width}
            alt=""
          />
          <Image
            className="absolute top-[50.5%] right-[-0.8%] z-10"
            src={path40.src}
            height={path40.height} width={path40.width}
            alt=""
          />
          <Image
            className="absolute top-[55.2%] xl:top-[54.2%] xl:right-[2%] right-[7%] z-10"
            src={path3.src}
            height={path3.height} width={path3.width}
            alt=""
          />
          <Image
            className="absolute top-[51.5%] right-[12%] z-10"
            src={path9.src}
            height={path9.height} width={path9.width}
            alt=""
          />
          <Image
            className="absolute top-[58%] right-[-8%] z-10"
            src={group5.src}
            height={group5.height} width={group5.width}
            alt=""
          />
          <Image
            className="absolute top-[64%] right-[-5%] z-10"
            src={path8.src}
            height={path8.height} width={path8.width}
            alt=""
          />
          <Image
            className="absolute bottom-[13.5%] left-[5%] xl:left-[-6%] z-10"
            src={path11.src}
            height={path11.height} width={path11.width}
            alt=""
          />
          <Image
            className="absolute bottom-[23.2%] left-[3%] z-10"
            src={path7.src}
            height={path7.height} width={path7.width}
            alt=""
          />
          <Image
            className="absolute bottom-[20.2%] left-[-9%] z-10"
            src={group5.src}
            height={group5.height} width={group5.width}
            alt=""
          />
          <Image
            className="absolute bottom-[23.6%] left-[-0.5%] -rotate-[80deg] z-10"
            src={path40.src}
            height={path40.height} width={path40.width}
            alt=""
          />
          <Image
            className="absolute xl:bottom-[27%] bottom-[27%] -left-[1.8%] z-10"
            src={path10.src}
            height={path10.height} width={path10.width}
            alt=""
          />
          <Image
            className="absolute bottom-[33.5%] left-[-5%] z-10"
            src={path10.src}
            height={path10.height} width={path10.width}
            alt=""
          />
        </div>
        {/* <!-- heading start  --> */}
        <div className="w-full max-w-[1193px] text-center">
          <span className="text-center font-poppins text-3xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-big-loose decoration-[#090F32]">
            <span className="relative">
              <Image
                className="absolute bottom-3 left-0 w-[150px] max-w-full xl:w-auto"
                src={fill3.src}
                height={fill3.height} width={fill3.width}
                alt=""
              />
              Create
            </span>
            <span className="leading-big-loose"> Awesome </span>
            <span className="bg-primary-new px-2 leading-big-loose">
              Dashboards
            </span>{" "}
            Designs in less than a minute
          </span>
        </div>
        <div className="w-full max-w-[784px] text-center mt-5">
          <span className="decoration-[#48494E] xl:text-xl text-lg font-medium leading-160 text-[#48494E]">
            Create & Design awesome dashboards directly in Html & Figma in just
            a few moments with the First Dashboard Builder for HTML!
          </span>
        </div>
        {/* <!-- Heading end  --> */}
        {/* <!-- Buttons  --> */}
        <div className="mt-10 flex justify-center items-center gap-9 relative">
          <a
            href="#"
            className="inline-flex h-[60px] justify-center items-center gap-3 shrink-0 rounded-xl border-[2.333px] border-primary z-40 transition-all group relative overflow-hidden"
          >
            <div className="w-full h-full bg-primary absolute right-0 bottom-0 group-hover:w-0 group-hover:h-0 z-0 transition-all"></div>
            <div
              className="text-center text-xl font-semibold leading-8 text-white z-10 group-hover:text-primary w-full h-full py-2.5 px-9"
              href="#"
            >
              Live Preview
            </div>
          </a>
          <a
            href="#"
            className="inline-flex h-[60px] justify-center items-center gap-3 shrink-0 rounded-xl border-[2.333px] border-primary z-50 relative group overflow-hidden transition-all"
          >
            <div className="w-0 h-0 bg-primary absolute right-0 bottom-0 group-hover:w-full group-hover:h-full z-0 transition-all"></div>
            <span className="text-primary text-center text-xl font-semibold leading-8 group-hover:text-white z-10 w-full h-full py-2.5 px-9">
              Login
            </span>
          </a>
        </div>
        {/* <!-- image start  --> */}
        <div className="relative z-0 flex justify-center items-center">
          <div className="absolute -left-6 xl:left-[-110px] top-[50px] xl:top-[-20px] w-[50px] sm:w-[80px] xl:w-[175px]">
            <Image src={shape.src} height={shape.height} width={shape.width} alt="shape" />
          </div>
          <div className="w-full max-w-[1320px] flex justify-center items-center rounded-20 bg-[#F3F7F8] mt-[70px] xl:p-14 sm:p-7 box-border border-[#F3F7F8] border-[15px]">
            <Image
              className="w-full h-full rounded-20 z-50"
              src={dashboard.src}
              height={dashboard.height} width={dashboard.width}
              alt="dashboard"
            />
          </div>
          <div className="xl:w-[300px] xl:h-[300px] 2xl:w-[400px] 2xl:h-[400px] sm:w-52 sm:h-52 w-[80px] h-[80px] -rotate-90 rounded-tr-[205px] rounded-tl-[205px] rounded-bl-[205px] bg-[#22c55e] absolute right-[-2%] bottom-[-10%] sm:bottom-[-13%] sm:right-[-4%] xl:right-[-90px] xl:bottom-[-90px] 2xl:right-[-140px] 2xl:bottom-[-140px] z-[-1]" />
        </div>
        {/* <!-- image end  --> */}
      </div>
    </section>
  );
}

export default Hero;
