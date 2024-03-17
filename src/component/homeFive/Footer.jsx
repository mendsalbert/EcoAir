import React from "react";
import bg from "/public/static/images/footer/bg.png";
import location from "/public/static/images/icon/location.svg";
import call from "/public/static/images/icon/call.svg";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <section className="w-full bg-basicInterface relative flex justify-center items-center flex-col px-[5%] 2xl:px-0 xl:mt-0">
      <Image src={bg.src} height={bg.height} width={bg.width} alt="" className="absolute right-0 top-0 z-0" />
      <div className="w-full max-w-[1320px] flex xl:justify-center flex-col xl:flex-row gap-5 2xl:gap-[123px] 2xl:py-[120px] py-[60px] z-10">
        {/* <!-- fast col  --> */}
        <div className="max-w-[270px] w-full">
          <div className="flex items-center gap-[6.88px] pb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="45"
              viewBox="0 0 32 45"
              fill="none"
            >
              <path
                d="M0 10.861C0 4.86259 4.92485 0 11 0C17.0752 0 22 4.86259 22 10.861V13.7998C20.1579 13.0719 18.1471 12.6711 16.0417 12.6711C7.18205 12.6711 0 19.7624 0 28.51V10.861Z"
                fill="#22C55E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 44.5088C24.8366 44.5088 32 37.3453 32 28.5088C32 19.6722 24.8366 12.5088 16 12.5088C7.16344 12.5088 0 19.6722 0 28.5088C0 37.3453 7.16344 44.5088 16 44.5088ZM16 36.7374C20.5445 36.7374 24.2286 33.0533 24.2286 28.5088C24.2286 23.9643 20.5445 20.2802 16 20.2802C11.4555 20.2802 7.77143 23.9643 7.77143 28.5088C7.77143 33.0533 11.4555 36.7374 16 36.7374Z"
                fill="white"
              />
            </svg>
            <span className="text-white xl:text-4xl text-3xl font-extrabold leading-big-loose">
              Bank<span className="text-primary">Co</span>
            </span>
          </div>
          <span className="text-white xl:text-lg text-base font-normal leading-180">
            We work with a passion of taking challenges and creating new ones in
            advertising sector.
          </span>
          <div className="flex gap-[10px] pt-5">
            <div className="h-10 w-10 rounded-full flex justify-center items-center relative group transition-all">
              <div className="bg-white opacity-10 h-full w-full rounded-full absolute group-hover:bg-primary group-hover:opacity-100 z-0 transition-all"></div>
              <div className="z-10">
                {/* <!-- facebook svg  --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="20"
                  viewBox="0 0 10 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_570_11628)">
                    <path
                      d="M2.55277 20V10.6154H0V7.23652H2.55277V4.3505C2.55277 2.08264 4.0607 0 7.53529 0C8.9421 0 9.98237 0.1311 9.98237 0.1311L9.9004 3.28642C9.9004 3.28642 8.83949 3.27638 7.68178 3.27638C6.42879 3.27638 6.22804 3.83768 6.22804 4.7693V7.23652H10L9.83588 10.6154H6.22804V20H2.55277Z"
                      className="group-hover:fill-white fill-[#747681] transition-all"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_570_11628">
                      <rect width="10" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="h-10 w-10 rounded-full flex justify-center items-center relative group transition-all">
              <div className="bg-white opacity-10 h-full w-full rounded-full absolute group-hover:bg-primary group-hover:opacity-100 z-0 transition-all"></div>
              <div className="z-10">
                {/* <!--twitter svg  --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M19.7029 4.11366C19.0071 4.42199 18.2596 4.63033 17.4738 4.72449C18.2846 4.23932 18.8912 3.47572 19.1804 2.57616C18.4186 3.02865 17.5849 3.34716 16.7154 3.51783C16.1307 2.89355 15.3563 2.47977 14.5124 2.34072C13.6684 2.20168 12.8022 2.34515 12.0481 2.74887C11.2941 3.15259 10.6944 3.79396 10.3422 4.57341C9.99003 5.35287 9.90503 6.22679 10.1004 7.05949C8.55682 6.98199 7.04677 6.58079 5.66827 5.88192C4.28977 5.18304 3.07362 4.20213 2.09875 3.00283C1.76542 3.57783 1.57375 4.24449 1.57375 4.95449C1.57338 5.59366 1.73078 6.22303 2.03198 6.78677C2.33319 7.35051 2.76888 7.83119 3.30042 8.18616C2.68398 8.16655 2.08114 7.99998 1.54208 7.70033V7.75033C1.54202 8.64678 1.85211 9.51564 2.41974 10.2095C2.98736 10.9033 3.77756 11.3794 4.65625 11.557C4.0844 11.7118 3.48486 11.7346 2.90292 11.6237C3.15083 12.395 3.63375 13.0695 4.28406 13.5528C4.93437 14.036 5.71951 14.3038 6.52958 14.3187C5.15444 15.3982 3.45616 15.9837 1.70792 15.9812C1.39823 15.9812 1.08881 15.9632 0.78125 15.927C2.55581 17.068 4.62153 17.6735 6.73125 17.6712C13.8729 17.6712 17.7771 11.7562 17.7771 6.62616C17.7771 6.45949 17.7729 6.29116 17.7654 6.12449C18.5248 5.57531 19.1803 4.89524 19.7013 4.11616L19.7029 4.11366Z"
                    className="group-hover:fill-white fill-[#747681] transition-all"
                  />
                </svg>
              </div>
            </div>
            <div className="h-10 w-10 rounded-full flex justify-center items-center relative group transition-all">
              <div className="bg-white opacity-10 h-full w-full rounded-full absolute group-hover:bg-primary group-hover:opacity-100 z-0 transition-all"></div>
              <div className="z-10">
                {/* <!-- instagram svg  --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.0006 7.39511C8.56699 7.39511 7.39706 8.56503 7.39706 9.99863C7.39706 11.4322 8.56699 12.6021 10.0006 12.6021C11.4342 12.6021 12.6041 11.4322 12.6041 9.99863C12.6041 8.56503 11.4342 7.39511 10.0006 7.39511ZM17.8092 9.99863C17.8092 8.9205 17.8189 7.85214 17.7584 6.77597C17.6978 5.52597 17.4127 4.4166 16.4986 3.50253C15.5826 2.58652 14.4752 2.30332 13.2252 2.24277C12.1471 2.18222 11.0787 2.19199 10.0025 2.19199C8.92441 2.19199 7.85605 2.18222 6.77988 2.24277C5.52988 2.30332 4.4205 2.58847 3.50644 3.50253C2.59042 4.41855 2.30722 5.52597 2.24667 6.77597C2.18613 7.8541 2.19589 8.92246 2.19589 9.99863C2.19589 11.0748 2.18613 12.1451 2.24667 13.2213C2.30722 14.4713 2.59238 15.5807 3.50644 16.4947C4.42246 17.4107 5.52988 17.6939 6.77988 17.7545C7.858 17.815 8.92636 17.8053 10.0025 17.8053C11.0807 17.8053 12.149 17.815 13.2252 17.7545C14.4752 17.6939 15.5846 17.4088 16.4986 16.4947C17.4146 15.5787 17.6978 14.4713 17.7584 13.2213C17.8209 12.1451 17.8092 11.0768 17.8092 9.99863ZM10.0006 14.0045C7.78378 14.0045 5.99472 12.2154 5.99472 9.99863C5.99472 7.78183 7.78378 5.99277 10.0006 5.99277C12.2174 5.99277 14.0064 7.78183 14.0064 9.99863C14.0064 12.2154 12.2174 14.0045 10.0006 14.0045ZM14.1705 6.76425C13.6529 6.76425 13.235 6.34628 13.235 5.82871C13.235 5.31113 13.6529 4.89316 14.1705 4.89316C14.6881 4.89316 15.106 5.31113 15.106 5.82871C15.1062 5.95161 15.0821 6.07333 15.0351 6.18691C14.9882 6.30048 14.9193 6.40368 14.8324 6.49058C14.7455 6.57749 14.6423 6.64639 14.5287 6.69335C14.4151 6.74031 14.2934 6.76441 14.1705 6.76425Z"
                    className="group-hover:fill-white fill-[#747681] transition-all"
                  />
                </svg>
              </div>
            </div>
            <div className="h-10 w-10 rounded-full flex justify-center items-center relative group transition-all">
              <div className="bg-white opacity-10 h-full w-full rounded-full absolute group-hover:bg-primary group-hover:opacity-100 z-0 transition-all"></div>
              <div className="z-10">
                {/* <!-- youtube svg  --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.0048 15.8446H9.98817C9.93651 15.8446 4.76734 15.8346 3.46317 15.4805C3.11079 15.3855 2.78952 15.1997 2.53154 14.9416C2.27356 14.6834 2.08791 14.3621 1.99317 14.0096C1.75866 12.6866 1.64541 11.3449 1.65484 10.0013C1.64879 8.65548 1.7651 7.3119 2.00234 5.98714C2.09975 5.63411 2.28626 5.31205 2.54397 5.05186C2.80168 4.79167 3.12193 4.60209 3.47401 4.5013C4.74234 4.16797 9.76901 4.16797 9.98234 4.16797H9.99984C10.0523 4.16797 15.2348 4.17797 16.5257 4.53214C17.2415 4.7263 17.8007 5.28547 17.994 6.0013C18.2357 7.32964 18.3498 8.67714 18.3332 10.0271C18.339 11.3713 18.2224 12.7133 17.9848 14.0363C17.8889 14.3884 17.7025 14.7092 17.4442 14.9669C17.1859 15.2246 16.8646 15.4103 16.5123 15.5055C15.2457 15.8413 10.2182 15.8446 10.0048 15.8446ZM8.33817 7.50547L8.33401 12.5055L12.6773 10.0055L8.33817 7.50547Z"
                    className="group-hover:fill-white fill-[#747681] transition-all"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row xl:gap-[74px] gap-6">
          {/* <!-- links  --> */}
          <div className="flex xl:justify-center mt-7 xl:mt-0">
            <div className="w-[1px] h-[198px] bg-basicWhite opacity-20 hidden xl:block"></div>

            <div className="flex flex-col gap-4 xl:gap-7 xl:pl-[22px] pr-[71px]">
              <span className="text-white xl:text-2xl text-xl font-semibold leading-150">
                Links
              </span>
              <div className="flex flex-col gap-[14px]">
                <Link
                  href="#"
                  className="text-basicInterface2 xl:text-lg text-base font-medium leading-180"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-basicInterface2 xl:text-lg text-base font-medium leading-180"
                >
                  Service
                </Link>
                <Link
                  href="#"
                  className="text-basicInterface2 xl:text-lg text-base font-medium leading-180"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="text-basicInterface2 xl:text-lg text-base font-medium leading-180"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="w-[1px] h-[198px] bg-basicWhite opacity-20 hidden xl:block"></div>
          </div>
          {/* <!-- links end  --> */}
          {/* <!-- service start  --> */}
          <div className="flex xl:justify-center">
            <div className="flex flex-col gap-4 xl:gap-7 pr-12">
              <span className="text-white xl:text-2xl text-xl font-semibold leading-150">
                Services
              </span>
              <div className="flex flex-col gap-[14px]">
                <a
                  href="#"
                  className="text-basicInterface2 xl:text-lg text-base font-medium leading-180"
                >
                  Contact & Faq
                </a>
                <a
                  href="#"
                  className="text-basicInterface2 xl:text-lg text-base font-medium leading-180"
                >
                  Track Your Order
                </a>
                <a
                  href="#"
                  className="text-basicInterface2 xl:text-lg text-base font-medium leading-180"
                >
                  Shipping
                </a>
                <a
                  href="#"
                  className="text-basicInterface2 xl:text-lg text-base font-medium leading-180"
                >
                  Trade Program
                </a>
              </div>
            </div>
            <div className="w-[1px] h-[198px] bg-basicWhite opacity-20 hidden xl:block"></div>
          </div>
          {/* <!-- service end  --> */}
        </div>
        {/* <!-- contact info start  --> */}
        <div className="flex flex-col gap-4">
          <span className="text-white xl:text-2xl text-xl font-semibold leading-150 pb-3">
            Official info:
          </span>
          <div className="flex items-start gap-2">
            <Image src={location.src} height={location.height} width={location.width} alt="" className="" />
            <span className="text-basicInterface2 xl:text-lg text-base font-medium">
              30 Commercial Road <br />
              Fratton, Australia
            </span>
          </div>
          <div className="flex items-start gap-2">
            <Image src={call.src} height={call.height} width={call.width} alt="" className="" />
            <span className="text-basicInterface2 xl:text-lg text-base font-medium">
              1-888-452-1505
            </span>
          </div>
          <div className="flex">
            <span className="text-white font-sans xl:text-xl text-lg font-medium leading-160">
              Subscribe Newsletter
            </span>
          </div>
          <div>
            <form className="box-border">
              <input
                className="max-w-[223px] xl:w-full w-2/3 p-[14px] xl:p-[10px] 2xl:p-[14px] bg-white bg-opacity-20 text-lg text-basicInterface3 rounded-l-xl font-normal leading-8 mt-1"
                placeholder="Email address"
              />
              <button
                type="submit"
                className="max-w-[128px] p-[14px] xl:p-[10px] 2xl:p-[14px] bg-primary text-white rounded-r-xl text-lg font-normal leading-8 -ml-1 inline-flex shrink-0 transition-all overflow-hidden cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
          {/* <!-- Subscribe end  --> */}
        </div>
        {/* <!-- contact info end  --> */}
        {/* <!-- Subscribe start  --> */}
      </div>

      <hr className="w-full bg-[#7476813B] opacity-25" />

      <span className="text-white text-center xl:text-xl text-sm font-medium leading-160 p-[22px]">
        Copyright © 2023 – All Rights Reserved. Made by BankCo
      </span>
    </section>
  );
}

export default Footer;
