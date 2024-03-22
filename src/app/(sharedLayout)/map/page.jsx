"use Client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("../../../component/chart/Map"), {
  ssr: false,
});

function Analytics() {
  return (
    <>
      <section className="2xl:flex-1 2xl:mb-0 mb-6">
        <div className="w-full mb-[24px]  ">
          <Map />
        </div>
      </section>
    </>
  );
}

export default Analytics;
