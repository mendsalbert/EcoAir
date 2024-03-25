import React from "react";

function MapLayout({ children }) {
  return (
    <main className="w-full ">
      <div className="2xl:flex 2xl:space-x-[48px]">{children}</div>
    </main>
  );
}

export default MapLayout;
