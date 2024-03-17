import React from "react";

function AnalyticsLayout({ children }) {
  return (
    <main className="pt-[108px]">
      <section className="lg:grid grid-cols-12 relative">{children}</section>
    </main>
  );
}

export default AnalyticsLayout;
