import ListTab from "@/component/listTab";
import Wallet from "@/component/wallet";
import Calender from "@/component/calender";
import TotalWidgetV2 from "@/component/widget/TotalWidgetV2";
import Efficiency from "@/component/revenueFlow/Efficiency";
import Summary from "@/component/summary";
import Location from "@/component/summary/Location";

function HomeTwo() {
  return (
    <>
      <section className="2xl:flex-1 2xl:mb-0 mb-6">
        <div className="w-full mb-[24px] xl:flex xl:space-x-[24px]">
          <TotalWidgetV2 />
          <Efficiency height="h-[180px]" />
        </div>
        <div className="w-full mb-[24px] flex space-x-[24px]">
          <Summary />
          <Location />
        </div>

        <ListTab />
      </section>
      <section className="flex w-full flex-col space-x-0 lg:flex-row lg:space-x-6 2xl:w-[400px] 2xl:flex-col 2xl:space-x-0">
        <Wallet />
        <Calender />
      </section>
    </>
  );
}

export default HomeTwo;
