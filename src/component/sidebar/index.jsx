"use client";
import ProtoTypes from "prop-types";
import bg from "/public/static/images/bg/upgrade-bg.png";
import logo from "/public/static/images/logo/logo-short.svg";
import logoW from "/public/static/images/logo/logo-short-white.svg";
import profileImg from "/public/static/images/avatar/profile-xs.png";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

function Sidebar({ handleActive }) {
  const [activeDashboard, setActiveDashboard] = useState(false);
  return (
    <aside className="sidebar-wrapper fixed top-0 z-30 block h-full w-[308px] bg-white dark:bg-darkblack-600 sm:hidden xl:block">
      <div className="sidebar-header relative z-30 flex h-[108px] w-full items-center border-b border-r border-b-[#F7F7F7] border-r-[#F7F7F7] pl-[50px] dark:border-darkblack-400">
        <Link href="/">
          <Image
            priority={true}
            height={logo.height}
            width={logo.width}
            src={logo.src}
            className="block dark:hidden"
            alt="logo"
          />
          <Image
            priority={true}
            height={logoW.height}
            width={logoW.width}
            src={logoW.src}
            className="hidden dark:block"
            alt="logo"
          />
        </Link>
        <button
          aria-label="none"
          type="button"
          onClick={handleActive}
          className="drawer-btn absolute right-0 top-auto"
          title="Ctrl+b"
        >
          <span>
            <svg
              width="16"
              height="40"
              viewBox="0 0 16 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 10C0 4.47715 4.47715 0 10 0H16V40H10C4.47715 40 0 35.5228 0 30V10Z"
                fill="#22C55E"
              />
              <path
                d="M10 15L6 20.0049L10 25.0098"
                stroke="#ffffff"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="sidebar-body overflow-style-none relative z-30 h-screen w-full overflow-y-scroll pb-[200px] pl-[48px] pt-[14px]">
        <div className="nav-wrapper mb-[36px] pr-[50px]">
          <div className="item-wrapper mb-5">
            <h4 className="border-b border-bgray-200 text-sm font-medium leading-7 text-bgray-700 dark:border-darkblack-400 dark:text-bgray-50">
              Menu
            </h4>
            <ul className="mt-2.5">
              <Link href="/">
                <li
                  className="item py-[11px] text-bgray-900 dark:text-white"
                  onClick={() => setActiveDashboard(!activeDashboard)}
                >
                  {/* <a className="cursor-pointer"> */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="18"
                          height="21"
                          viewBox="0 0 18 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="path-1"
                            d="M0 8.84719C0 7.99027 0.366443 7.17426 1.00691 6.60496L6.34255 1.86217C7.85809 0.515019 10.1419 0.515019 11.6575 1.86217L16.9931 6.60496C17.6336 7.17426 18 7.99027 18 8.84719V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8.84719Z"
                            fill="#1A202C"
                          />
                          <path
                            className="path-2"
                            d="M5 17C5 14.7909 6.79086 13 9 13C11.2091 13 13 14.7909 13 17V21H5V17Z"
                            fill="#22C55E"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Dashboards
                      </span>
                    </div>
                  </div>
                  {/* </a> */}
                </li>
              </Link>

              <li className="item py-[11px] text-bgray-900 dark:text-white">
                <Link href="/statistics">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            d="M14 9C12.8954 9 12 9.89543 12 11L12 13C12 14.1046 12.8954 15 14 15C15.1046 15 16 14.1046 16 13V11C16 9.89543 15.1046 9 14 9Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            d="M6 5C4.89543 5 4 5.89543 4 7L4 13C4 14.1046 4.89543 15 6 15C7.10457 15 8 14.1046 8 13L8 7C8 5.89543 7.10457 5 6 5Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Analytics
                      </span>
                    </div>
                  </div>
                </Link>
              </li>

              <li className="item py-[11px] text-bgray-900 dark:text-white">
                <Link href="/integrations">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.57666 3.61499C1.57666 2.51042 2.47209 1.61499 3.57666 1.61499H8.5C9.60456 1.61499 10.5 2.51042 10.5 3.61499V8.53833C10.5 9.64289 9.60456 10.5383 8.49999 10.5383H3.57666C2.47209 10.5383 1.57666 9.64289 1.57666 8.53832V3.61499Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            d="M13.5 15.5383C13.5 14.4338 14.3954 13.5383 15.5 13.5383H20.4233C21.5279 13.5383 22.4233 14.4338 22.4233 15.5383V20.4617C22.4233 21.5662 21.5279 22.4617 20.4233 22.4617H15.5C14.3954 22.4617 13.5 21.5662 13.5 20.4617V15.5383Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <circle
                            cx="6.03832"
                            cy="18"
                            r="4.46166"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18 2C18.4142 2 18.75 2.33579 18.75 2.75V5.25H21.25C21.6642 5.25 22 5.58579 22 6C22 6.41421 21.6642 6.75 21.25 6.75H18.75V9.25C18.75 9.66421 18.4142 10 18 10C17.5858 10 17.25 9.66421 17.25 9.25V6.75H14.75C14.3358 6.75 14 6.41421 14 6C14 5.58579 14.3358 5.25 14.75 5.25H17.25V2.75C17.25 2.33579 17.5858 2 18 2Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Model{" "}
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="item-wrapper mb-5">
            <h4 className="border-b border-bgray-200 text-sm font-medium leading-7 text-bgray-700 dark:border-darkblack-400 dark:text-bgray-50">
              Help
            </h4>
            <ul className="mt-2.5">
              <li className="item py-[11px] text-bgray-900 dark:text-white">
                <Link href="/support-ticket">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 2V11C5 12.1046 5.89543 13 7 13H18C19.1046 13 20 12.1046 20 11V2C20 0.895431 19.1046 0 18 0H7C5.89543 0 5 0.89543 5 2Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            d="M0 15C0 13.8954 0.895431 13 2 13H2.17157C2.70201 13 3.21071 13.2107 3.58579 13.5858C4.36683 14.3668 5.63317 14.3668 6.41421 13.5858C6.78929 13.2107 7.29799 13 7.82843 13H8C9.10457 13 10 13.8954 10 15V16C10 17.1046 9.10457 18 8 18H2C0.89543 18 0 17.1046 0 16V15Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            d="M7.5 9.5C7.5 10.8807 6.38071 12 5 12C3.61929 12 2.5 10.8807 2.5 9.5C2.5 8.11929 3.61929 7 5 7C6.38071 7 7.5 8.11929 7.5 9.5Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.25 4.5C8.25 4.08579 8.58579 3.75 9 3.75L16 3.75C16.4142 3.75 16.75 4.08579 16.75 4.5C16.75 4.91421 16.4142 5.25 16 5.25L9 5.25C8.58579 5.25 8.25 4.91421 8.25 4.5Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.25 8.5C11.25 8.08579 11.5858 7.75 12 7.75L16 7.75C16.4142 7.75 16.75 8.08579 16.75 8.5C16.75 8.91421 16.4142 9.25 16 9.25L12 9.25C11.5858 9.25 11.25 8.91421 11.25 8.5Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Documentation
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="item py-[11px] text-bgray-900 dark:text-white">
                <Link href="/settings">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0606 2H10.9394C9.76787 2 8.81817 2.89543 8.81817 4C8.81817 5.26401 7.46574 6.06763 6.35556 5.4633L6.24279 5.40192C5.22823 4.84963 3.93091 5.17738 3.34515 6.13397L2.28455 7.86602C1.69879 8.8226 2.0464 10.0458 3.06097 10.5981C4.17168 11.2027 4.17168 12.7973 3.06096 13.4019C2.0464 13.9542 1.69879 15.1774 2.28454 16.134L3.34515 17.866C3.93091 18.8226 5.22823 19.1504 6.24279 18.5981L6.35555 18.5367C7.46574 17.9324 8.81817 18.736 8.81817 20C8.81817 21.1046 9.76787 22 10.9394 22H13.0606C14.2321 22 15.1818 21.1046 15.1818 20C15.1818 18.736 16.5343 17.9324 17.6445 18.5367L17.7572 18.5981C18.7718 19.1504 20.0691 18.8226 20.6548 17.866L21.7155 16.134C22.3012 15.1774 21.9536 13.9542 20.939 13.4019C19.8283 12.7973 19.8283 11.2027 20.939 10.5981C21.9536 10.0458 22.3012 8.82262 21.7155 7.86603L20.6548 6.13398C20.0691 5.1774 18.7718 4.84965 17.7572 5.40193L17.6445 5.46331C16.5343 6.06765 15.1818 5.26402 15.1818 4C15.1818 2.89543 14.2321 2 13.0606 2Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            d="M15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Setting
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="upgrade-wrapper mb-[26px] h-[172px] w-full pr-[24px]">
          <div
            className="upgrade-banner relative h-full w-full rounded-lg"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div
              style={{ left: `calc(50% - 20px); top: -20px` }}
              className="absolute flex h-10 w-10 items-center justify-center rounded-full border border-white bg-success-300"
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 12.75C14 11.7835 13.1046 11 12 11C10.8954 11 10 11.7835 10 12.75C10 13.7165 10.8954 14.5 12 14.5C13.1046 14.5 14 15.2835 14 16.25C14 17.2165 13.1046 18 12 18C10.8954 18 10 17.2165 10 16.25"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 9.5V11"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 18V19.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.63246 11.1026C6.44914 8.65258 8.74197 7 11.3246 7H12.6754C15.258 7 17.5509 8.65258 18.3675 11.1026L19.3675 14.1026C20.6626 17.9878 17.7708 22 13.6754 22H10.3246C6.22921 22 3.33739 17.9878 4.63246 14.1026L5.63246 11.1026Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.0859 7L9.91411 7L8.51303 5.39296C7.13959 3.81763 8.74185 1.46298 10.7471 2.10985L11.6748 2.40914C11.8861 2.47728 12.1139 2.47728 12.3252 2.40914L13.2529 2.10985C15.2582 1.46298 16.8604 3.81763 15.487 5.39296L14.0859 7Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <h1 className="mb-2 pt-8 text-center text-xl font-bold text-white">
              Unlimited Cashback
            </h1>
            <p className="mb-2 px-7 text-center text-sm leading-5 text-white opacity-[0.5]">
              Instant 2% back on all your spend to your account.
            </p>
            <div className="flex justify-center">
              <a href="#">
                <div className="flex h-[36px] w-[134px] justify-center rounded-lg bg-success-300 transition duration-300 ease-in-out hover:bg-success-400">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-sm font-semibold text-white">
                      Upgrade Now
                    </span>
                    <span>
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.33301 4H10.6663"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 6.66667L10.6667 4"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 1.33325L10.6667 3.99992"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="copy-write-text">
          <p className="text-sm text-[#969BA0]">© 2023 All Rights Reserved</p>
          <p className="text-sm font-medium text-bgray-700">
            Made with ❤️ by
            <a
              href="#"
              target="_blank"
              className="border-b font-semibold hover:text-blue-600"
            >
              QuomodoTheme
            </a>
          </p>
        </div>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  handleActive: ProtoTypes.func,
};

export default Sidebar;
