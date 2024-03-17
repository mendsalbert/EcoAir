import React from "react";

function AnalyticsLayout({ children }) {
  return (
    <main className="w-full px-6 pb-6 pt-[100px] sm:pt-[156px] xl:px-[48px] xl:pb-[48px] dark:bg-darkblack-700">
      <div className="2xl:flex 2xl:space-x-[48px]">{children}</div>
    </main>
  );
}

export default AnalyticsLayout;
