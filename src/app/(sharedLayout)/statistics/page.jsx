import ListTab from "@/component/listTab";
import Wallet from "@/component/wallet";
import Calender from "@/component/calender";
import Efficiency from "@/component/revenueFlow/Efficiency";
import SummaryV2 from "@/component/summary/SummaryV2";
import LocationV2 from "@/component/location";
import TaskSummary from "@/component/summary/TaskSummary";
import SummaryV3 from "@/component/summary/SummaryV3";
import EfficiencyV2 from "@/component/revenueFlow/EfficiencyV2";
import TeamChat from "@/component/teamChat";
import SummaryHis from "@/component/summary/SummaryHis";
import SummaryBoxPlot from "@/component/summary/SummaryBoxPlot";
import SummaryHeatMap from "@/component/summary/SummaryBoxPlot";

function Statistics() {
  return (
    <>
      <div className="w-full mb-[24px] xl:flex xl:space-x-[24px]">
        <SummaryHis />
        <Efficiency height="h-[180px]" />
      </div>
      <div className="w-full mb-[24px] xl:flex ">
        <SummaryHeatMap />
      </div>
      <section className="2xl:w-70 w-full 2xl:mb-0 mb-6">
        <SummaryV3 />
        <ListTab />
      </section>
    </>
  );
}

export default Statistics;
