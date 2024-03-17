import React from "react";

function AnalyticsLayout({ children }) {
  return (
    <main className="w-full xl:px-[48px] px-6 pb-6 xl:pb-[48px] sm:pt-[156px] pt-[100px] dark:bg-darkblack-700">
      <div className="lg:grid grid-cols-12 gap-10 flex flex-col-reverse">
        {children}
      </div>
    </main>
  );
}

export default AnalyticsLayout;
