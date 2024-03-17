"use client";
import React, { useState } from "react";
import logoBlack from "/public/static/images/logo/logoBlack.svg";
import barIcon from "/public/static/images/icon/bars-solid.svg";
import xmark from "/public/static/images/icon/xmark-solid.svg";
import chvronDown from "/public/static/images/icon//chevron-down.svg";
import Link from "next/link";
import Image from "next/image";

function MobileMenu() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <section className="bg-white border-b b-gray-300 flex justify-between items-center gap-9 relative xl:hidden z-50 transition-all w-full">
      <div
        className={`${
          menuActive ? "w-full" : "w-0"
        } h-[90000px] bg-black fixed opacity-20 z-30 overlay transition-all duration-500`}
      ></div>
      <div className="flex justify-between w-full p-6 z-40 bg-white fixed top-0">
        <Link href="/" className="flex gap-1.5 h-fit">
          <Image
            src={logoBlack.src}
            height={logoBlack.height}
            width={logoBlack.width}
            alt="logo"
            className="w-5 sm:w-7 lg:w-10 xl:w-fit"
          />
          <span className="lg:text-4xl text-xl font-extrabold leading-extra-loose tracking-tight text-primary h-full flex justify-center items-center pr-16">
            <span className="text-gray-900">Bank</span> Co.
          </span>
        </Link>
        <div
          className="`flex lg:w-10 w-6 m-menu-btn"
          onClick={() => setMenuActive(!menuActive)}
        >
          <Image
            src={barIcon.src}
            height={barIcon.height}
            width={barIcon.width}
            alt=""
            className={`bars ${menuActive ? "hidden" : "block"} transition-all`}
          />
          <Image
            src={xmark.src}
            height={xmark.height}
            width={xmark.width}
            alt=""
            className={`${
              menuActive ? "block" : "hidden"
            } xmark transition-all`}
          />
        </div>
      </div>

      <div
        className={`text-gray-900 h-full lg:text-2xl py-6 rounded-br-md text-xl z-40 font-medium leading-9 flex gap-4 pl-[5%] pr-[5%] fixed top-[93px] ${
          menuActive ? " left-0" : "-left-[100%]"
        }  flex-col bg-white w-full max-w-sm m-menu transition-all duration-500`}
      >
        <Link href="" className="flex cursor-pointer">
          <span>Products</span>
          <Image
            src={chvronDown.src}
            height={chvronDown.height}
            width={chvronDown.width}
            alt="arrow down"
          />
        </Link>
        <Link href="" className="flex cursor-pointer">
          <span>Features</span>
        </Link>
        <Link href="" className="flex cursor-pointer">
          <span>Pricing</span>
        </Link>
        <Link href="" className="flex cursor-pointer">
          <span>Resources</span>
          <Image
            src={chvronDown.src}
            height={chvronDown.height}
            width={chvronDown.width}
            alt="arrow down"
          />
        </Link>
        <Link href="" className="flex cursor-pointer">
          <span>Blog</span>
        </Link>
        <div className="flex justify-between w-full">
          <Link
            href="#"
            className="inline-flex justify-center items-center gap-3 shrink-0 rounded-xl border-[2.333px] border-primary z-50 relative group overflow-hidden transition-all"
          >
            <div className="w-0 h-0 bg-primary absolute right-0 bottom-0 group-hover:w-full group-hover:h-full z-0 transition-all"></div>
            <div className="text-primary text-center text-xl font-semibold leading-8 group-hover:text-white z-10 w-full h-full py-3 px-6">
              Login
            </div>
          </Link>
          <Link
            href="#"
            className="inline-flex justify-center items-center gap-3 shrink-0 rounded-xl border-[2.333px] border-primary z-40 transition-all group relative overflow-hidden"
          >
            <div className="w-full h-full bg-primary absolute right-0 bottom-0 group-hover:w-0 group-hover:h-0 z-0 transition-all"></div>
            <span className="text-center text-xl font-semibold leading-8 text-white z-10 group-hover:text-primary w-full h-full py-3 px-6">
              Live Preview
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MobileMenu;
