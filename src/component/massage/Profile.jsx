"use client";
import ProtoTypes from "prop-types";
import userImg from "/public/static/images/message/u-lg.png";
import Image from "next/image";

function Profile({ isOpen, close }) {
  return (
    <div
      id="profile-settings"
      className={`col-span-3 h-full py-8 px-12 bg-white dark:bg-darkblack-600 border border-bgray-300 absolute right-0 top-0 dark:border-darkblack-400 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <header className="pb-8 border-b border-bgray-300 dark:border-darkblack-400">
        <div className="flex justify-between">
          <h3 className="text-bgray-900 dark:text-white font-bold text-2xl">
            User Info
          </h3>
          <button
            aria-label="none"
            type="button"
            onClick={close}
            className="text-bgray-400 hover:text-red-500"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <path
                d="M16.9497 7.05029L7.05021 16.9498"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.05029 7.05029L16.9498 16.9498"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center mt-6">
          <Image
            priority={true}
            height={userImg.height}
            width={userImg.width}
            src={userImg.src}
            className="bg-[#EFF6FF] p-2 rounded-full mb-4"
            alt=""
          />
          <h4 className="font-bold text-xl text-bgray-900 dark:text-white mb-2">
            Ajoy Sarker
          </h4>
          <span className="font-medium text-sm text-bgray-500 dark:text-bgray-50">
            UX Researcher
          </span>
          <div className="bg-bgray-50 dark:bg-darkblack-500 rounded-xl flex space-x-2 items-center p-3 mt-4">
            <span className="bg-success-300 w-2 h-2 block rounded-full"></span>
            <span className="font-medium text-sm text-bgray-900 dark:text-white">
              Quomodosoft Team
            </span>
          </div>
        </div>
      </header>
      <div className="py-6">
        <h4 className="font-bold text-base dark:text-white">Shared Files</h4>
        <ul className="pt-4 space-y-3">
          <li className="flex justify-between items-center">
            <div className="flex space-x-3">
              <div className="bg-bgray-50 dark:bg-darkblack-500 w-10 h-10 rounded-lg flex justify-center items-center">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1V5C10 5.26522 10.1054 5.51957 10.2929 5.70711C10.4804 5.89464 10.7348 6 11 6H15"
                    stroke="#22C55E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H10L15 6V17C15 17.5304 14.7893 18.0391 14.4142 18.4142C14.0391 18.7893 13.5304 19 13 19Z"
                    stroke="#22C55E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 7H6"
                    stroke="#22C55E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 11H11"
                    stroke="#22C55E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 15H11"
                    stroke="#22C55E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h5 className="text-base font-semibold dark:text-white">
                  Reference.zip
                </h5>
                <span className="text-sm text-bgray-500 dark:text-bgray-50">
                  2 MB
                </span>
              </div>
            </div>
            <div>
              <button
                aria-label="none"
                type="button"
                className="text-bgray-500 hover:text-red-500"
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                >
                  <g clipPath="url(#clip0_1568_17087)">
                    <path d="M12.7589 7.74609C12.5002 7.74609 12.2905 7.95577 12.2905 8.21448V17.0669C12.2905 17.3254 12.5002 17.5353 12.7589 17.5353C13.0176 17.5353 13.2273 17.3254 13.2273 17.0669V8.21448C13.2273 7.95577 13.0176 7.74609 12.7589 7.74609Z" />
                    <path d="M7.23157 7.74609C6.97286 7.74609 6.76318 7.95577 6.76318 8.21448V17.0669C6.76318 17.3254 6.97286 17.5353 7.23157 17.5353C7.49027 17.5353 7.69995 17.3254 7.69995 17.0669V8.21448C7.69995 7.95577 7.49027 7.74609 7.23157 7.74609Z" />
                    <path d="M3.20382 6.45419V17.9942C3.20382 18.6762 3.45393 19.3168 3.89084 19.7764C4.32574 20.2373 4.93098 20.4989 5.56439 20.5H14.4263C15.0599 20.4989 15.6652 20.2373 16.0999 19.7764C16.5368 19.3168 16.7869 18.6762 16.7869 17.9942V6.45419C17.6554 6.22366 18.2182 5.3846 18.102 4.49339C17.9857 3.60236 17.2266 2.93583 16.3279 2.93565H13.9298V2.35017C13.9325 1.85782 13.7379 1.38505 13.3893 1.03724C13.0408 0.68961 12.5673 0.496036 12.0749 0.500062H7.91582C7.42347 0.496036 6.94996 0.68961 6.60142 1.03724C6.25288 1.38505 6.05821 1.85782 6.06095 2.35017V2.93565H3.66287C2.76416 2.93583 2.00505 3.60236 1.88869 4.49339C1.77251 5.3846 2.3353 6.22366 3.20382 6.45419ZM14.4263 19.5632H5.56439C4.76357 19.5632 4.14058 18.8753 4.14058 17.9942V6.49536H15.8501V17.9942C15.8501 18.8753 15.2272 19.5632 14.4263 19.5632ZM6.99772 2.35017C6.99461 2.10628 7.09048 1.87154 7.26356 1.69938C7.43646 1.52721 7.67175 1.43262 7.91582 1.43683H12.0749C12.319 1.43262 12.5543 1.52721 12.7272 1.69938C12.9003 1.87136 12.9961 2.10628 12.993 2.35017V2.93565H6.99772V2.35017ZM3.66287 3.87242H16.3279C16.7935 3.87242 17.171 4.24987 17.171 4.71551C17.171 5.18114 16.7935 5.55859 16.3279 5.55859H3.66287C3.19723 5.55859 2.81978 5.18114 2.81978 4.71551C2.81978 4.24987 3.19723 3.87242 3.66287 3.87242Z" />
                    <path d="M9.99524 7.74609C9.73653 7.74609 9.52686 7.95577 9.52686 8.21448V17.0669C9.52686 17.3254 9.73653 17.5353 9.99524 17.5353C10.2539 17.5353 10.4636 17.3254 10.4636 17.0669V8.21448C10.4636 7.95577 10.2539 7.74609 9.99524 7.74609Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1568_17087">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex space-x-3">
              <div className="bg-bgray-50 dark:bg-darkblack-500 w-10 h-10 rounded-lg flex justify-center items-center">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1V5C10 5.26522 10.1054 5.51957 10.2929 5.70711C10.4804 5.89464 10.7348 6 11 6H15"
                    stroke="#436CFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H10L15 6V17C15 17.5304 14.7893 18.0391 14.4142 18.4142C14.0391 18.7893 13.5304 19 13 19Z"
                    stroke="#436CFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 7H6"
                    stroke="#436CFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 11H11"
                    stroke="#436CFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 15H11"
                    stroke="#436CFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h5 className="text-base font-semibold dark:text-white">
                  Doc0001.docx
                </h5>
                <span className="text-sm text-bgray-500 dark:text-bgray-50">
                  1,025 KB
                </span>
              </div>
            </div>
            <div>
              <button
                aria-label="none"
                type="button"
                className="text-bgray-500 hover:text-red-500"
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                >
                  <g clipPath="url(#clip0_1568_17087)">
                    <path d="M12.7589 7.74609C12.5002 7.74609 12.2905 7.95577 12.2905 8.21448V17.0669C12.2905 17.3254 12.5002 17.5353 12.7589 17.5353C13.0176 17.5353 13.2273 17.3254 13.2273 17.0669V8.21448C13.2273 7.95577 13.0176 7.74609 12.7589 7.74609Z" />
                    <path d="M7.23157 7.74609C6.97286 7.74609 6.76318 7.95577 6.76318 8.21448V17.0669C6.76318 17.3254 6.97286 17.5353 7.23157 17.5353C7.49027 17.5353 7.69995 17.3254 7.69995 17.0669V8.21448C7.69995 7.95577 7.49027 7.74609 7.23157 7.74609Z" />
                    <path d="M3.20382 6.45419V17.9942C3.20382 18.6762 3.45393 19.3168 3.89084 19.7764C4.32574 20.2373 4.93098 20.4989 5.56439 20.5H14.4263C15.0599 20.4989 15.6652 20.2373 16.0999 19.7764C16.5368 19.3168 16.7869 18.6762 16.7869 17.9942V6.45419C17.6554 6.22366 18.2182 5.3846 18.102 4.49339C17.9857 3.60236 17.2266 2.93583 16.3279 2.93565H13.9298V2.35017C13.9325 1.85782 13.7379 1.38505 13.3893 1.03724C13.0408 0.68961 12.5673 0.496036 12.0749 0.500062H7.91582C7.42347 0.496036 6.94996 0.68961 6.60142 1.03724C6.25288 1.38505 6.05821 1.85782 6.06095 2.35017V2.93565H3.66287C2.76416 2.93583 2.00505 3.60236 1.88869 4.49339C1.77251 5.3846 2.3353 6.22366 3.20382 6.45419ZM14.4263 19.5632H5.56439C4.76357 19.5632 4.14058 18.8753 4.14058 17.9942V6.49536H15.8501V17.9942C15.8501 18.8753 15.2272 19.5632 14.4263 19.5632ZM6.99772 2.35017C6.99461 2.10628 7.09048 1.87154 7.26356 1.69938C7.43646 1.52721 7.67175 1.43262 7.91582 1.43683H12.0749C12.319 1.43262 12.5543 1.52721 12.7272 1.69938C12.9003 1.87136 12.9961 2.10628 12.993 2.35017V2.93565H6.99772V2.35017ZM3.66287 3.87242H16.3279C16.7935 3.87242 17.171 4.24987 17.171 4.71551C17.171 5.18114 16.7935 5.55859 16.3279 5.55859H3.66287C3.19723 5.55859 2.81978 5.18114 2.81978 4.71551C2.81978 4.24987 3.19723 3.87242 3.66287 3.87242Z" />
                    <path d="M9.99524 7.74609C9.73653 7.74609 9.52686 7.95577 9.52686 8.21448V17.0669C9.52686 17.3254 9.73653 17.5353 9.99524 17.5353C10.2539 17.5353 10.4636 17.3254 10.4636 17.0669V8.21448C10.4636 7.95577 10.2539 7.74609 9.99524 7.74609Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1568_17087">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex space-x-3">
              <div className="bg-bgray-50 dark:bg-darkblack-500 w-10 h-10 rounded-lg flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19"
                    stroke="#FF4747"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z"
                    stroke="#FF4747"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9H10"
                    stroke="#FF4747"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 13H15"
                    stroke="#FF4747"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 17H15"
                    stroke="#FF4747"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h5 className="text-base font-semibold dark:text-white">
                  Filex.pdf
                </h5>
                <span className="text-sm text-bgray-500 dark:text-bgray-50">
                  2,25 KB
                </span>
              </div>
            </div>
            <div>
              <button
                aria-label="none"
                type="button"
                className="text-bgray-500 hover:text-red-500"
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                >
                  <g clipPath="url(#clip0_1568_17087)">
                    <path d="M12.7589 7.74609C12.5002 7.74609 12.2905 7.95577 12.2905 8.21448V17.0669C12.2905 17.3254 12.5002 17.5353 12.7589 17.5353C13.0176 17.5353 13.2273 17.3254 13.2273 17.0669V8.21448C13.2273 7.95577 13.0176 7.74609 12.7589 7.74609Z" />
                    <path d="M7.23157 7.74609C6.97286 7.74609 6.76318 7.95577 6.76318 8.21448V17.0669C6.76318 17.3254 6.97286 17.5353 7.23157 17.5353C7.49027 17.5353 7.69995 17.3254 7.69995 17.0669V8.21448C7.69995 7.95577 7.49027 7.74609 7.23157 7.74609Z" />
                    <path d="M3.20382 6.45419V17.9942C3.20382 18.6762 3.45393 19.3168 3.89084 19.7764C4.32574 20.2373 4.93098 20.4989 5.56439 20.5H14.4263C15.0599 20.4989 15.6652 20.2373 16.0999 19.7764C16.5368 19.3168 16.7869 18.6762 16.7869 17.9942V6.45419C17.6554 6.22366 18.2182 5.3846 18.102 4.49339C17.9857 3.60236 17.2266 2.93583 16.3279 2.93565H13.9298V2.35017C13.9325 1.85782 13.7379 1.38505 13.3893 1.03724C13.0408 0.68961 12.5673 0.496036 12.0749 0.500062H7.91582C7.42347 0.496036 6.94996 0.68961 6.60142 1.03724C6.25288 1.38505 6.05821 1.85782 6.06095 2.35017V2.93565H3.66287C2.76416 2.93583 2.00505 3.60236 1.88869 4.49339C1.77251 5.3846 2.3353 6.22366 3.20382 6.45419ZM14.4263 19.5632H5.56439C4.76357 19.5632 4.14058 18.8753 4.14058 17.9942V6.49536H15.8501V17.9942C15.8501 18.8753 15.2272 19.5632 14.4263 19.5632ZM6.99772 2.35017C6.99461 2.10628 7.09048 1.87154 7.26356 1.69938C7.43646 1.52721 7.67175 1.43262 7.91582 1.43683H12.0749C12.319 1.43262 12.5543 1.52721 12.7272 1.69938C12.9003 1.87136 12.9961 2.10628 12.993 2.35017V2.93565H6.99772V2.35017ZM3.66287 3.87242H16.3279C16.7935 3.87242 17.171 4.24987 17.171 4.71551C17.171 5.18114 16.7935 5.55859 16.3279 5.55859H3.66287C3.19723 5.55859 2.81978 5.18114 2.81978 4.71551C2.81978 4.24987 3.19723 3.87242 3.66287 3.87242Z" />
                    <path d="M9.99524 7.74609C9.73653 7.74609 9.52686 7.95577 9.52686 8.21448V17.0669C9.52686 17.3254 9.73653 17.5353 9.99524 17.5353C10.2539 17.5353 10.4636 17.3254 10.4636 17.0669V8.21448C10.4636 7.95577 10.2539 7.74609 9.99524 7.74609Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1568_17087">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div className="pb-6">
        <h4 className="font-bold text-base dark:text-white">Shared Links</h4>
        <ul className="pt-4 space-y-3">
          <li className="flex justify-between items-center">
            <div className="flex space-x-3">
              <div className="bg-bgray-50 dark:bg-darkblack-500 w-10 h-10 rounded-lg flex justify-center items-center">
                <svg
                  className="stroke-bgray-900 dark:stroke-bgray-50"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 13.9999C10.3259 14.3325 10.7148 14.5967 11.1441 14.7771C11.5734 14.9575 12.0344 15.0504 12.5 15.0504C12.9656 15.0504 13.4266 14.9575 13.8559 14.7771C14.2852 14.5967 14.6741 14.3325 15 13.9999L19 9.99989C19.663 9.33685 20.0355 8.43757 20.0355 7.49989C20.0355 6.56221 19.663 5.66293 19 4.99989C18.337 4.33685 17.4377 3.96436 16.5 3.96436C15.5623 3.96436 14.663 4.33685 14 4.99989L13.5 5.49989"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.9999 9.99973C13.674 9.66713 13.285 9.4029 12.8558 9.22252C12.4265 9.04213 11.9655 8.94922 11.4999 8.94922C11.0343 8.94922 10.5733 9.04213 10.144 9.22252C9.71474 9.4029 9.32577 9.66713 8.99989 9.99973L4.99989 13.9997C4.33685 14.6628 3.96436 15.562 3.96436 16.4997C3.96436 17.4374 4.33685 18.3367 4.99989 18.9997C5.66293 19.6628 6.56221 20.0353 7.49989 20.0353C8.43757 20.0353 9.33685 19.6628 9.99989 18.9997L10.4999 18.4997"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h5 className="text-base font-semibold dark:text-white">
                  muz.li
                </h5>
                <span className="text-sm text-bgray-500 dark:text-bgray-50">
                  https://muz.li.com
                </span>
              </div>
            </div>
            <div>
              <button
                aria-label="none"
                type="button"
                className="text-bgray-500 hover:text-red-500"
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                >
                  <g clipPath="url(#clip0_1568_17087)">
                    <path d="M12.7589 7.74609C12.5002 7.74609 12.2905 7.95577 12.2905 8.21448V17.0669C12.2905 17.3254 12.5002 17.5353 12.7589 17.5353C13.0176 17.5353 13.2273 17.3254 13.2273 17.0669V8.21448C13.2273 7.95577 13.0176 7.74609 12.7589 7.74609Z" />
                    <path d="M7.23157 7.74609C6.97286 7.74609 6.76318 7.95577 6.76318 8.21448V17.0669C6.76318 17.3254 6.97286 17.5353 7.23157 17.5353C7.49027 17.5353 7.69995 17.3254 7.69995 17.0669V8.21448C7.69995 7.95577 7.49027 7.74609 7.23157 7.74609Z" />
                    <path d="M3.20382 6.45419V17.9942C3.20382 18.6762 3.45393 19.3168 3.89084 19.7764C4.32574 20.2373 4.93098 20.4989 5.56439 20.5H14.4263C15.0599 20.4989 15.6652 20.2373 16.0999 19.7764C16.5368 19.3168 16.7869 18.6762 16.7869 17.9942V6.45419C17.6554 6.22366 18.2182 5.3846 18.102 4.49339C17.9857 3.60236 17.2266 2.93583 16.3279 2.93565H13.9298V2.35017C13.9325 1.85782 13.7379 1.38505 13.3893 1.03724C13.0408 0.68961 12.5673 0.496036 12.0749 0.500062H7.91582C7.42347 0.496036 6.94996 0.68961 6.60142 1.03724C6.25288 1.38505 6.05821 1.85782 6.06095 2.35017V2.93565H3.66287C2.76416 2.93583 2.00505 3.60236 1.88869 4.49339C1.77251 5.3846 2.3353 6.22366 3.20382 6.45419ZM14.4263 19.5632H5.56439C4.76357 19.5632 4.14058 18.8753 4.14058 17.9942V6.49536H15.8501V17.9942C15.8501 18.8753 15.2272 19.5632 14.4263 19.5632ZM6.99772 2.35017C6.99461 2.10628 7.09048 1.87154 7.26356 1.69938C7.43646 1.52721 7.67175 1.43262 7.91582 1.43683H12.0749C12.319 1.43262 12.5543 1.52721 12.7272 1.69938C12.9003 1.87136 12.9961 2.10628 12.993 2.35017V2.93565H6.99772V2.35017ZM3.66287 3.87242H16.3279C16.7935 3.87242 17.171 4.24987 17.171 4.71551C17.171 5.18114 16.7935 5.55859 16.3279 5.55859H3.66287C3.19723 5.55859 2.81978 5.18114 2.81978 4.71551C2.81978 4.24987 3.19723 3.87242 3.66287 3.87242Z" />
                    <path d="M9.99524 7.74609C9.73653 7.74609 9.52686 7.95577 9.52686 8.21448V17.0669C9.52686 17.3254 9.73653 17.5353 9.99524 17.5353C10.2539 17.5353 10.4636 17.3254 10.4636 17.0669V8.21448C10.4636 7.95577 10.2539 7.74609 9.99524 7.74609Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1568_17087">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex space-x-3">
              <div className="bg-bgray-50 dark:bg-darkblack-500 w-10 h-10 rounded-lg flex justify-center items-center">
                <svg
                  className="stroke-bgray-900 dark:stroke-bgray-50"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 13.9999C10.3259 14.3325 10.7148 14.5967 11.1441 14.7771C11.5734 14.9575 12.0344 15.0504 12.5 15.0504C12.9656 15.0504 13.4266 14.9575 13.8559 14.7771C14.2852 14.5967 14.6741 14.3325 15 13.9999L19 9.99989C19.663 9.33685 20.0355 8.43757 20.0355 7.49989C20.0355 6.56221 19.663 5.66293 19 4.99989C18.337 4.33685 17.4377 3.96436 16.5 3.96436C15.5623 3.96436 14.663 4.33685 14 4.99989L13.5 5.49989"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.9999 9.99973C13.674 9.66713 13.285 9.4029 12.8558 9.22252C12.4265 9.04213 11.9655 8.94922 11.4999 8.94922C11.0343 8.94922 10.5733 9.04213 10.144 9.22252C9.71474 9.4029 9.32577 9.66713 8.99989 9.99973L4.99989 13.9997C4.33685 14.6628 3.96436 15.562 3.96436 16.4997C3.96436 17.4374 4.33685 18.3367 4.99989 18.9997C5.66293 19.6628 6.56221 20.0353 7.49989 20.0353C8.43757 20.0353 9.33685 19.6628 9.99989 18.9997L10.4999 18.4997"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h5 className="text-base font-semibold dark:text-white">
                  Dribbble
                </h5>
                <span className="text-sm text-bgray-500">
                  https://dribbble.com/rf...
                </span>
              </div>
            </div>
            <div>
              <button
                aria-label="none"
                type="button"
                className="text-bgray-500 hover:text-red-500"
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                >
                  <g clipPath="url(#clip0_1568_17087)">
                    <path d="M12.7589 7.74609C12.5002 7.74609 12.2905 7.95577 12.2905 8.21448V17.0669C12.2905 17.3254 12.5002 17.5353 12.7589 17.5353C13.0176 17.5353 13.2273 17.3254 13.2273 17.0669V8.21448C13.2273 7.95577 13.0176 7.74609 12.7589 7.74609Z" />
                    <path d="M7.23157 7.74609C6.97286 7.74609 6.76318 7.95577 6.76318 8.21448V17.0669C6.76318 17.3254 6.97286 17.5353 7.23157 17.5353C7.49027 17.5353 7.69995 17.3254 7.69995 17.0669V8.21448C7.69995 7.95577 7.49027 7.74609 7.23157 7.74609Z" />
                    <path d="M3.20382 6.45419V17.9942C3.20382 18.6762 3.45393 19.3168 3.89084 19.7764C4.32574 20.2373 4.93098 20.4989 5.56439 20.5H14.4263C15.0599 20.4989 15.6652 20.2373 16.0999 19.7764C16.5368 19.3168 16.7869 18.6762 16.7869 17.9942V6.45419C17.6554 6.22366 18.2182 5.3846 18.102 4.49339C17.9857 3.60236 17.2266 2.93583 16.3279 2.93565H13.9298V2.35017C13.9325 1.85782 13.7379 1.38505 13.3893 1.03724C13.0408 0.68961 12.5673 0.496036 12.0749 0.500062H7.91582C7.42347 0.496036 6.94996 0.68961 6.60142 1.03724C6.25288 1.38505 6.05821 1.85782 6.06095 2.35017V2.93565H3.66287C2.76416 2.93583 2.00505 3.60236 1.88869 4.49339C1.77251 5.3846 2.3353 6.22366 3.20382 6.45419ZM14.4263 19.5632H5.56439C4.76357 19.5632 4.14058 18.8753 4.14058 17.9942V6.49536H15.8501V17.9942C15.8501 18.8753 15.2272 19.5632 14.4263 19.5632ZM6.99772 2.35017C6.99461 2.10628 7.09048 1.87154 7.26356 1.69938C7.43646 1.52721 7.67175 1.43262 7.91582 1.43683H12.0749C12.319 1.43262 12.5543 1.52721 12.7272 1.69938C12.9003 1.87136 12.9961 2.10628 12.993 2.35017V2.93565H6.99772V2.35017ZM3.66287 3.87242H16.3279C16.7935 3.87242 17.171 4.24987 17.171 4.71551C17.171 5.18114 16.7935 5.55859 16.3279 5.55859H3.66287C3.19723 5.55859 2.81978 5.18114 2.81978 4.71551C2.81978 4.24987 3.19723 3.87242 3.66287 3.87242Z" />
                    <path d="M9.99524 7.74609C9.73653 7.74609 9.52686 7.95577 9.52686 8.21448V17.0669C9.52686 17.3254 9.73653 17.5353 9.99524 17.5353C10.2539 17.5353 10.4636 17.3254 10.4636 17.0669V8.21448C10.4636 7.95577 10.2539 7.74609 9.99524 7.74609Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1568_17087">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>
      {/* Progressbar  */}
      <div className="bg-bgray-100 dark:bg-darkblack-500 p-6 mt-4 rounded-lg">
        <div className="flex space-x-6 items-center">
          <div className="progess-bar flex justify-center mb-[13px]">
            <div className="bonus-per relative">
              <div className="bonus-outer">
                <div className="bonus-inner">
                  <div className="number">
                    <span className="text-sm font-medium text-bgray-900">
                      26%
                    </span>
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80px"
                height="80px"
              >
                <circle
                  style={{
                    strokeDashoffset: "calc(215 - 215 * (26 / 100))",
                  }}
                  cx="40"
                  cy="40"
                  r="35"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-bgray-900 text-base dark:text-white font-bold">
              Complete profile
            </h4>
            <span className="text-sm font-medium dark:text-bgray-50 text-bgray-700">
              Complete your profile to unlock all features
            </span>
          </div>
        </div>
        <button
          aria-label="none"
          name="button"
          className="w-full mt-4 bg-success-300 hover:bg-success-400 text-white font-bold text-xs py-3 rounded-lg"
        >
          Verify identify
        </button>
      </div>
    </div>
  );
}

Profile.propTypes = {
  isOpen: ProtoTypes.bool,
  close: ProtoTypes.func,
};

export default Profile;
