import ListTab from "@/component/listTab";
import TeamChat from "@/component/teamChat";
import EfficiencyV2 from "@/component/revenueFlow/EfficiencyV2";
import SummaryV3 from "@/component/summary/SummaryV3";
import SummaryV2 from "@/component/summary/SummaryV2";
import LocationV2 from "@/component/location";

function Analytics() {
  return (
    <>
      {/* <section className="2xl:w-70 w-full 2xl:mb-0 mb-6">
        <SummaryV3 />
        <ListTab />
      </section>
      <section className="2xl:flex-1 w-full">
        <EfficiencyV2 />
        <TeamChat />
      </section> */}

      <section className="2xl:flex-1 2xl:mb-0 mb-6">
        <div className="w-full mb-[24px]  ">
          <LocationV2 />
        </div>
        <div className="w-full mb-[24px] xl:flex xl:space-x-[24px]">
          <SummaryV2 />
          <Efficiency height="h-[180px]" />
        </div>
        <div className="w-full mb-[24px] xl:flex xl:space-x-[24px]">
          <SummaryV3 />
        </div>
        {/* <div className="w-full mb-[24px] flex space-x-[24px]">
          <LocationV2 />
          <TaskSummary />
        </div> */}

        <ListTab />
      </section>
    </>
  );
}

export default Analytics;
