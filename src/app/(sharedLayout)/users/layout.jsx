import React from "react";

function AnalyticsLayout({ children }) {
  return (
    <main className="w-full xl:px-[48px] px-6 pb-6 xl:pb-[48px] sm:pt-[156px] pt-[100px] dark:bg-darkblack-700">
      <div className="flex 2xl:flex-row 2xl:space-x-11 flex-col space-y-20">
        {children}
      </div>
    </main>
  );
}

export default AnalyticsLayout;
