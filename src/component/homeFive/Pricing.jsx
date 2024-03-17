import React from "react";
import ellipse from "/public/static/images/pricing/ellipse.png";
import shape from "/public/static/images/pricing/shape.png";
import shape2 from "/public/static/images/pricing/shape2.svg";
import frame from "/public/static/images/pricing/frame.svg";
import greenCheck from "/public/static/images/icon/greenCheck.png";
import removeCircle from "/public/static/images/icon/remove-circle.svg";
import shape3 from "/public/static/images/pricing/shape3.png";
import Image from "next/image";

function Pricing() {
  return (
    <section className="w-full flex justify-center items-center bg-[#F8FAFE] 2xl:py-[120px] py-[60px] pb-[100px] relative">
      {/* <!-- bg start  --> */}
      <Image
        src={ellipse.src}
        height={ellipse.height}
        width={ellipse.width}
        alt=""
        className="absolute top-6 left-0 scale-50 xl:scale-100"
      />
      <Image
        src={shape.src}
        height={shape.height}
        width={shape.width}
        alt=""
        className="absolute top-28 left-[7%] xl:left-[4%] z-0 scale-50 xl:scale-90 2xl:scale-100"
      />
      {/* <!-- bg end  --> */}
      <div className="max-w-[1320px] w-full z-10 px-[5%] 2xl:px-0">
        <div className="w-full text-center pb-20 flex justify-center relative">
          <div className="bg-alertsWarningBase xl:w-[190px] xl:h-[14px] h-[10px] w-[120px] absolute xl:top-10 top-5 z-0 left-[40.5%]"></div>
          <span className="w-black text-center font-poppins xl:text-5xl text-3xl font-bold leading-big-loose z-10">
            No hidden charge, Choose <br />
            your plan.
          </span>
        </div>
        <div className="flex justify-center flex-col-reverse xl:flex-row xl:gap-[102px] gap-[50px] relative">
          {/* <!-- bg start--> */}
          <Image
            src={shape2.src}
            height={shape2.height}
            width={shape2.width}
            alt=""
            className="absolute top-0 -left-[7%] z-0"
          />
          {/* <!-- bg end  --> */}
          <div className="flex flex-col items-center pt-[50px] z-10">
            <div className="flex flex-col gap-[34px]">
              <span className="text-gray-900 font-poppins xl:text-5xl sm:text-4xl text-3xl text-center font-bold leading-big-loose">
                Save your <br />
                Money now!
              </span>
              <span className="text-gray-600 xl:text-xl text-lg font-medium leading-160 xl:max-w-[478px]">
                If you're a developer looking for an admin dashboard that is
                developer-friendly, rich with features, and highly customizable
                look no further than BankCo. We offer very simple pricing
                depending on your needs.
              </span>
            </div>
            <Image
              src={frame.src}
              height={frame.height}
              width={frame.width}
              alt=""
              className="max-w-[200px] mt-[72px]"
            />
          </div>

          <div className="flex flex-col items-center justify-center lg:flex-row gap-10 z-10">
            {/* <!-- card start  --> */}
            <div
              className="rounded-[32px] border border-solid boder-[#E7E5EA1A] bg-basicSecondary xl:px-10 px-5 text-center w-full sm:w-7/12 lg:w-[350px]"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
            >
              <div className="flex flex-col pb-6 pt-7">
                <span className="text-white xl:text-5xl text-3xl font-bold tracking-40">
                  Regular
                </span>
                <span className="text-secondary-200 xl:text-lg text-base font-medium leading-150 tracking-40">
                  License
                </span>
              </div>
              <hr className="bg-[#E7E5EA] opacity-10" />
              <div className="flex flex-col pb-6 pt-3">
                <span className="text-white text-center xl:text-5xl text-3xl font-bold leading-[116,667%] tracking-[-2px]">
                  $12.00
                </span>
                <span className="text-secondary-200 xl:text-lg text-base font-medium leading-150 tracking-40">
                  License
                </span>
              </div>
              <hr className="bg-[#E7E5EA] opacity-10" />
              <div className="text-white xl:text-base text-sm font-semibold leading-150 py-[32px] flex flex-col gap-[16px]">
                <div className="flex gap-1">
                  <Image
                    src={greenCheck.src}
                    height={greenCheck.height}
                    width={greenCheck.width}
                    alt=""
                    className=""
                  />
                  <span className="">Quality checked by Envato. </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={greenCheck.src}
                    height={greenCheck.height}
                    width={greenCheck.width}
                    alt=""
                    className=""
                  />
                  <span className="">Lifetime support. </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={greenCheck.src}
                    height={greenCheck.height}
                    width={greenCheck.width}
                    alt=""
                    className=""
                  />
                  <span className="">For Personal Projects only. </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={greenCheck.src}
                    height={greenCheck.height}
                    width={greenCheck.width}
                    alt=""
                    className=""
                  />
                  <span className="line-clamp-1">
                    Permitted for personal use only.{" "}
                  </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={removeCircle.src}
                    height={removeCircle.height}
                    width={removeCircle.width}
                    alt=""
                    className=""
                  />
                  <span className="">Skype support. </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={removeCircle.src}
                    height={removeCircle.height}
                    width={removeCircle.width}
                    alt=""
                    className=""
                  />
                  <span className="">Anydesk/Teamviewer support. </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={removeCircle.src}
                    height={removeCircle.height}
                    width={removeCircle.width}
                    alt=""
                    className=""
                  />
                  <span className="">Free installation. </span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <a
                  href="#"
                  className="rounded-[28px] border border-solid border-secondary-100 border-opacity-50 p-4 w-[170px] text-center mb-10 hover:border-primary z-40 relative group overflow-hidden transition-all"
                >
                  <div className="w-0 h-0 z-0 bg-primary absolute right-0 bottom-0 group-hover:w-full group-hover:h-full transition-all opacity-10"></div>
                  <span className="z-40 text-white text-center text-base font-semibold leading-160 tracking-[-0.36px]">
                    Buy now
                  </span>
                </a>
              </div>
            </div>
            {/* <!-- card end  --> */}
            {/* <!-- card start  --> */}
            <div
              className="rounded-[32px] border border-solid boder-[#E7E5EA1A] bg-white xl:px-10 px-5 text-center w-full sm:w-7/12 lg:w-[350px]"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
            >
              <div className="flex flex-col pb-6 pt-7">
                <span className="text-basicSecondary xl:text-5xl text-3xl font-bold tracking-40">
                  Regular
                </span>
                <span className="text-basicSecondary xl:text-lg text-base font-medium leading-150 tracking-40">
                  License
                </span>
              </div>
              <hr className="bg-secondary-300" />
              <div className="flex flex-col pb-6 pt-3">
                <span className="text-basicSecondary text-center xl:text-5xl text-3xl font-bold leading-[116,667%] tracking-[-2px]">
                  $12.00
                </span>
                <span className="text-basicSecondary xl:text-lg text-base font-medium leading-150 tracking-40">
                  License
                </span>
              </div>
              <hr className="bg-secondary-300" />
              <div className="text-secondary-400 xl:text-base text-sm font-semibold leading-150 py-[32px] flex flex-col gap-[16px]">
                <div className="flex gap-1">
                  <Image
                    src={greenCheck.src}
                    height={greenCheck.height}
                    width={greenCheck.width}
                    alt=""
                    className=""
                  />
                  <span className="">Quality checked by Envato. </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={greenCheck.src}
                    height={greenCheck.height}
                    width={greenCheck.width}
                    alt=""
                    className=""
                  />
                  <span className="">Lifetime support. </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={greenCheck.src}
                    height={greenCheck.height}
                    width={greenCheck.width}
                    alt=""
                    className=""
                  />
                  <span className="line-clamp-1">
                    For Personal Projects only.{" "}
                  </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={greenCheck.src}
                    height={greenCheck.height}
                    width={greenCheck.width}
                    alt=""
                    className=""
                  />
                  <span className="line-clamp-1">
                    Permitted for personal use only.{" "}
                  </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={removeCircle.src}
                    height={removeCircle.height}
                    width={removeCircle.width}
                    alt=""
                    className=""
                  />
                  <span className="">Skype support. </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={removeCircle.src}
                    height={removeCircle.height}
                    width={removeCircle.width}
                    alt=""
                    className=""
                  />
                  <span className="">Anydesk/Teamviewer support. </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={removeCircle.src}
                    height={removeCircle.height}
                    width={removeCircle.width}
                    alt=""
                    className=""
                  />
                  <span className="">Free installation. </span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <a
                  href="#"
                  className="inline-flex h-[60px] py-2.5 px-9 justify-center items-center gap-3 shrink-0 hover:border-2 border-solid border-primary border-opacity-60 z-40 transition-all group w-[170px] relative rounded-[28px] overflow-hidden mb-10"
                >
                  <div className="w-full h-full bg-primary absolute right-0 bottom-0 group-hover:w-0 group-hover:h-0 z-0 transition-all"></div>
                  <span className="text-center text-lg leading-8 text-white group-hover:text-primary z-10">
                    Buy now
                  </span>
                </a>
              </div>
            </div>
            {/* <!-- card end  --> */}
          </div>
          {/* <!-- bg start--> */}
          <Image
            src={shape3.src}
            height={shape3.height}
            width={shape3.width}
            alt=""
            className="absolute -bottom-[88px] -right-[7%] xl:-right-[5%] z-0 scale-75 w-[220px] xl:scale-100"
          />
          {/* <!-- bg end  --> */}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
