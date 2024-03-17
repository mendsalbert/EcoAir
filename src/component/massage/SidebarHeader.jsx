function SidebarHeader() {
  return (
    <header>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-3xl font-semibold text-bgray-900 dark:text-white">
          Messages (22)
        </h3>
        <button aria-label="none">
          <svg
            className="stroke-darkblack-400 dark:stroke-bgray-50"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 12.7508V18.7411C22 20.9466 20.2091 22.7346 18 22.7346H6C3.79086 22.7346 2 20.9466 2 18.7411V6.76059C2 4.55504 3.79086 2.76709 6 2.76709H12M15.6864 4.78655C15.6864 4.78655 15.6864 6.21452 17.1167 7.64249C18.547 9.07046 19.9773 9.07046 19.9773 9.07046M9.15467 16.7339L12.1583 16.3055C12.5916 16.2437 12.9931 16.0433 13.3025 15.7343L21.4076 7.64249C22.1975 6.85384 22.1975 5.57519 21.4076 4.78655L19.9773 3.35857C19.1873 2.56993 17.9066 2.56993 17.1167 3.35857L9.01164 11.4504C8.70217 11.7594 8.50142 12.1602 8.43952 12.5928L8.01044 15.5915C7.91508 16.2579 8.4872 16.8291 9.15467 16.7339Z"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div className="relative">
        <span className="absolute left-4 top-3">
          <svg
            className="fill-bgray-900 dark:fill-bgray-50"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5ZM11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75Z"
            />
          </svg>
        </span>
        <input
          type="text"
          className=" w-full dark:placeholder:text-white dark:text-white bg-bgray-100 dark:bg-darkblack-500 border-0 focus:border focus:border-success-300 focus:ring-0 rounded-lg py-3.5 pl-12"
          placeholder="Search Message"
        />
      </div>
    </header>
  );
}

export default SidebarHeader;
