import member from "/public/static/images/avatar/members-3.png";
import user from "/public/static/images/avatar/user-1.png";
import mp3 from "/public/static/images/others/mp3-dark.png";
import mp3W from "/public/static/images/others/mp3.png";
import Image from "next/image";

function TeamChat() {
  return (
    <div className="flex w-full flex-col justify-between rounded-lg bg-white dark:border dark:border-darkblack-400 dark:bg-darkblack-600 lg:w-1/2 2xl:w-full">
      <div className="flex justify-between border-b border-bgray-300 px-[26px] py-6 dark:border-darkblack-400">
        <h1 className="text-2xl font-semibold text-bgray-900 dark:text-white">
          Team Chat
        </h1>
        <div className="flex items-center space-x-3">
          <div>
            <Image
              priority={true}
              height={member.height}
              width={member.width}
              src={member.src}
              alt="members"
            />
          </div>
          <button
            aria-label="none"
            type="button"
            className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-bgray-200"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.75 1C7.75 0.585786 7.41421 0.25 7 0.25C6.58579 0.25 6.25 0.585786 6.25 1V6.25H1C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75H6.25V13C6.25 13.4142 6.58579 13.75 7 13.75C7.41421 13.75 7.75 13.4142 7.75 13V7.75H13C13.4142 7.75 13.75 7.41421 13.75 7C13.75 6.58579 13.4142 6.25 13 6.25H7.75V1Z"
                fill="#718096"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full px-5 py-6 lg:px-[35px] lg:py-[38px]">
        <div className="mb-5 flex flex-col space-y-[32px]">
          <div className="flex justify-start">
            <div className="flex items-end space-x-3">
              <div className="flex items-center space-x-2">
                <div className="h-[35px] w-[36px] overflow-hidden rounded-full">
                  <Image
                    priority={true}
                    height={user.height}
                    width={user.width}
                    src={user.src}
                    alt="avater"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="rounded-lg bg-bgray-100 p-3 dark:bg-darkblack-500">
                  <p className="text-sm font-medium text-bgray-900 dark:text-white">
                    Hi, What can I help you with?
                  </p>
                </div>
              </div>
              <span className="text-xs font-medium text-bgray-500">
                10:00 PM
              </span>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="flex items-end space-x-3">
              <div className="flex items-center space-x-2">
                <div className="h-[35px] w-[36px] overflow-hidden rounded-full">
                  <Image
                    priority={true}
                    height={user.height}
                    width={user.width}
                    src={user.src}
                    alt="avater"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <Image
                    priority={true}
                    height={mp3W.height}
                    width={mp3W.width}
                    src={mp3W.src}
                    className="block dark:hidden"
                    alt="mp3"
                  />
                  <Image
                    priority={true}
                    height={mp3.height}
                    width={mp3.width}
                    src={mp3.src}
                    className="hidden dark:block"
                    alt="mp3"
                  />
                </div>
              </div>
              <span className="text-xs font-medium text-bgray-500">
                10:00 PM
              </span>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex items-end space-x-3">
              <span className="text-xs font-medium text-bgray-500">
                10:00 PM
              </span>
              <div className="flex items-center space-x-2">
                <div className="rounded-b-lg rounded-l-lg bg-bgray-100 p-3 dark:bg-darkblack-500">
                  <p className="text-sm font-medium text-bgray-900 dark:text-white">
                    Hi, What can I help you with?
                  </p>
                </div>
                <div className="h-[35px] w-[36px] overflow-hidden rounded-full">
                  <Image
                    priority={true}
                    height={user.height}
                    width={user.width}
                    src={user.src}
                    alt="avater"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="flex items-end space-x-3">
              <div className="flex items-center space-x-2">
                <div className="h-[35px] w-[36px] overflow-hidden rounded-full">
                  <Image
                    priority={true}
                    height={user.height}
                    width={user.width}
                    src={user.src}
                    alt="avater"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="rounded-lg bg-bgray-100 p-3 dark:bg-darkblack-500">
                  <p className="text-sm font-medium text-bgray-900 dark:text-white">
                    Hi, What can I help you with?
                  </p>
                </div>
              </div>
              <span className="text-xs font-medium text-bgray-500">
                10:00 PM
              </span>
            </div>
          </div>
        </div>
        <div className="flex h-[58px] w-full items-center space-x-4">
          <div className="flex h-full w-full items-center justify-between rounded-lg border border-transparent bg-bgray-100 px-5 focus-within:border-success-300 dark:border-darkblack-400 dark:bg-darkblack-500 lg:w-[318px]">
            <span>
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.66652 4.1112L5.22208 8.55565C4.60843 9.1693 4.60843 10.1642 5.22208 10.7779C5.83573 11.3915 6.83065 11.3915 7.4443 10.7779L11.8887 6.33343C13.116 5.10613 13.116 3.11628 11.8887 1.88898C10.6614 0.661681 8.6716 0.661681 7.4443 1.88898L2.99985 6.33343C1.1589 8.17438 1.1589 11.1591 2.99985 13.0001C4.8408 14.841 7.82557 14.841 9.66652 13.0001L14.111 8.55565"
                  stroke="#CBD5E0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <label className="w-full">
              <input
                type="text"
                placeholder="Type your Message..."
                className="w-full border-none bg-bgray-100 p-0 pl-[15px] font-medium placeholder:text-sm placeholder:font-medium placeholder:text-bgray-400 focus:outline-none focus:ring-0 dark:bg-darkblack-500 dark:text-white"
              />
            </label>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 11V12C19 15.866 15.866 19 12 19M5 11V12C5 15.866 8.13401 19 12 19M12 19V22M12 22H15M12 22H9M12 16C9.79086 16 8 14.2091 8 12V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V12C16 14.2091 14.2091 16 12 16Z"
                  stroke="#A0AEC0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <button aria-label="none" type="button">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.3894 0H2.61094C0.339326 0 -0.844596 2.63548 0.696196 4.26234L3.78568 7.52441C4.23 7.99355 4.47673 8.60858 4.47673 9.24704V15.4553C4.47673 17.8735 7.61615 18.9233 9.13941 17.0145L19.4463 4.09894C20.7775 2.43071 19.5578 0 17.3894 0Z"
                fill="#22C55E"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeamChat;
