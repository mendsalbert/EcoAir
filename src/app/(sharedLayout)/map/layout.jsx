import React from "react";

function MapLayout({ children }) {
  return (
    <main>
      <div className="w-full">{children}</div>
    </main>
  );
}

export default MapLayout;
