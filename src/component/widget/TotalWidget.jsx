import totalEarn1 from "/public/static/images/icons/total-earn-1.svg";
import totalEarn2 from "/public/static/images/icons/total-earn-2.svg";
import totalEarn3 from "/public/static/images/icons/total-earn-3.svg";
import totalEarn4 from "/public/static/images/icons/total-earn-4.svg";
import totalEarn5 from "/public/static/images/icons/total-earn-5.svg";
import memberImg from "/public/static/images/avatar/members-2.png";
import TotalWidgetCard from "./TotalWidgetCard";

function TotalWidget() {
  return (
    <div className="mb-[24px] w-full">
      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-3">
        <TotalWidgetCard
          totalEarnImg={totalEarn1}
          memberImg={memberImg}
          title="Current AQI"
          amount="210.00"
          groth="+ 3.5%"
          id="totalEarn"
          isPrev={true}
          graphColor="#22C55E"
        />
        <TotalWidgetCard
          totalEarnImg={totalEarn2}
          memberImg={memberImg}
          title="Paremeters"
          amount="410"
          groth="PM10,PM2.5,O₃ mass.."
          id="totalEarn"
          isPrev={false}
          graphColor="#926DFF"
        />{" "}
        <TotalWidgetCard
          totalEarnImg={totalEarn3}
          memberImg={memberImg}
          title="Coutries"
          amount="117"
          groth=""
          id="totalEarn"
          isPrev={false}
          graphColor="#22C55E"
        />
        <TotalWidgetCard
          totalEarnImg={totalEarn4}
          memberImg={memberImg}
          title="Manufacturers"
          amount="15 µg/m³"
          groth="Ghana"
          id="totalSpending"
          isPrev={true}
          graphColor="#22C55E"
        />
        <TotalWidgetCard
          totalEarnImg={totalEarn5}
          memberImg={memberImg}
          title="Emissions Tracking(CO2)"
          amount="25,000"
          groth="+ 10% reduction "
          id="totalGoal"
          isPrev={true}
          graphColor="#22C55E"
        />
        <TotalWidgetCard
          totalEarnImg={totalEarn5}
          memberImg={memberImg}
          title="Instruments"
          amount="25,000"
          groth="+ 10% reduction "
          id="totalGoal"
          isPrev={true}
          graphColor="#22C55E"
        />
      </div>
    </div>
  );
}

export default TotalWidget;
