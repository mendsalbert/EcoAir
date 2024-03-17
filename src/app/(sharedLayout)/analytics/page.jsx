import ListTab from "@/component/listTab";
import TeamChat from "@/component/teamChat";
import EfficiencyV2 from "@/component/revenueFlow/EfficiencyV2";
import SummaryV3 from "@/component/summary/SummaryV3";

function Analytics() {
  return (
    <>
      <section className="2xl:w-70 w-full 2xl:mb-0 mb-6">
        <SummaryV3 />
        <ListTab />
      </section>
      <section className="2xl:flex-1 w-full">
        <EfficiencyV2 />
        <TeamChat />
      </section>
    </>
  );
}

export default Analytics;
