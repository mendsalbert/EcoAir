import React from "react";

function MapLayout({ children }) {
  return (
    <main className="w-full">
      <div className="w-full">{children}</div>
    </main>
  );
}

export default MapLayout;
