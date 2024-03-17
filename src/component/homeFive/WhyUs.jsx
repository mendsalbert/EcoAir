import React from "react";
import check from "/public/static/images/icon/check.svg";
import Image from "next/image";

function WhyUs() {
  return (
    <section className="flex w-full justify-center items-center bg-gray-50 xl:pt-[120px] pt-[60px] xl:pb-[145px] pb-[60px] px-[5%]">
      <div
        className="flex xl:gap-40 gap-10 xl:justify-center xl:items-center flex-wrap xl:flex-nowrap"
        data-aos="fade-right"
        data-aos-easing="fade-left"
      >
        {/* <!-- Right side start  --> */}
        <div className="max-w-[500px]">
          <span className="text-[#090D26] font-poppins 2xl:text-5xl xl:text-4xl text-3xl font-bold leading-big-loose">
            Why you choose BankCo.
          </span>
          <div className="flex flex-col text-[#4f4f4f] xl:text-xl text-sm font-normal xl:leading-[42px] z-10">
            <div className="flex gap-[10px] mt-3">
              <Image
                src={check.src}
                height={check.height}
                width={check.width}
                alt=""
              />
              <span>Responsive layout (desktops, tablets, mobile devices)</span>
            </div>
            <div className="flex gap-[10px] mt-3">
              <Image
                src={check.src}
                height={check.height}
                width={check.width}
                alt=""
              />
              <span>2 Different Dashbaord layout</span>
            </div>
            <div className="flex gap-[10px] mt-3">
              <Image
                src={check.src}
                height={check.height}
                width={check.width}
                alt=""
              />
              <span>5 Different App</span>
            </div>
            <div className="flex gap-[10px] mt-3">
              <Image
                src={check.src}
                height={check.height}
                width={check.width}
                alt=""
              />
              <span>Clean and Flat design & more ...</span>
            </div>
            <a
              href="#"
              className="inline-flex max-w-[200px] mt-12 h-[60px] py-2.5 px-9 justify-center items-center gap-3 shrink-0 rounded-xl border-[2.333px] border-primary z-40 transition-all group relative overflow-hidden"
            >
              <div className="w-full h-full bg-primary absolute right-0 bottom-0 group-hover:w-0 group-hover:h-0 z-0 transition-all"></div>
              <span className="text-center text-xl font-semibold leading-8 text-white z-10 group-hover:text-primary">
                See Details
              </span>
            </a>
          </div>
        </div>
        {/* <!-- Right side end  --> */}
        {/* <!-- Left side start  --> */}
        <div className="flex gap-6 flex-wrap max-w-[649px]">
          <span className="xl:px-[46px] px-[20px] xl:py-[22px] py-[12px] text-gray-700 xl:text-xl text-lg font-medium xl:leading-160 bg-primaryNew rounded-xl">
            Great Interface
          </span>
          <span className="xl:px-[46px] px-[20px] xl:py-[22px] py-[12px] text-gray-700 xl:text-xl text-lg font-medium xl:leading-160 bg-othersTeal rounded-xl">
            Experienced
          </span>
          <span className="xl:px-[46px] px-[20px] xl:py-[22px] py-[12px] text-gray-700 xl:text-xl text-lg font-medium xl:leading-160 bg-othersOrange rounded-xl">
            Low Price
          </span>
          <span className="xl:px-[46px] px-[20px] xl:py-[22px] py-[12px] text-gray-700 xl:text-xl text-lg font-medium xl:leading-160 bg-alertsWarningLight rounded-xl">
            Customizable
          </span>
          <span className="xl:px-[46px] px-[20px] xl:py-[22px] py-[12px] text-gray-700 xl:text-xl text-lg font-medium xl:leading-160 bg-primaryNew rounded-xl">
            Marketing
          </span>
          <span className="xl:px-[46px] px-[20px] xl:py-[22px] py-[12px] text-gray-700 xl:text-xl text-lg font-medium xl:leading-160 bg-alertsWarningLight rounded-xl">
            Great Support
          </span>
          <span className="xl:px-[46px] px-[20px] xl:py-[22px] py-[12px] text-gray-700 xl:text-xl text-lg font-medium xl:leading-160 bg-primaryNew rounded-xl">
            Safe
          </span>
          <span className="text-gray-900 font-poppins xl:text-2xl text-xl font-normal xl:py-[22px] py-[12px] xl:px-[18px] px-[10px]">
            & more…
          </span>
        </div>

        {/* <!-- Left side end  --> */}
      </div>
    </section>
  );
}

export default WhyUs;
