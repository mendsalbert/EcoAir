import ListTab from "@/component/listTab";
import Wallet from "@/component/wallet";
import Calender from "@/component/calender";
import Efficiency from "@/component/revenueFlow/Efficiency";
import SummaryV2 from "@/component/summary/SummaryV2";
import LocationV2 from "@/component/location";
import TaskSummary from "@/component/summary/TaskSummary";

function Statistics() {
  return (
    <>
      <section className="2xl:flex-1 2xl:mb-0 mb-6">
        <div className="w-full mb-[24px]  ">
          <LocationV2 />
        </div>
        <div className="w-full mb-[24px] xl:flex xl:space-x-[24px]">
          <SummaryV2 />
          <Efficiency height="h-[180px]" />
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

export default Statistics;
