import totalEarn from "/public/static/images/icons/total-earn-2.svg";
import memberImg from "/public/static/images/avatar/members-2.png";
import TotalWidgetCard from "./TotalWidgetCard";

function TotalWidget() {
  return (
    <div className="mb-[24px] w-full">
      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-3">
        <TotalWidgetCard
          totalEarnImg={totalEarn}
          memberImg={memberImg}
          title="Current AQI"
          amount="210.00"
          groth="+ 3.5%"
          id="totalEarn"
        />
        <TotalWidgetCard
          totalEarnImg={totalEarn}
          memberImg={memberImg}
          title="Top Pollutants/PM2.5"
          amount="15 µg/m³"
          groth="Ghana"
          id="totalSpending"
        />
        <TotalWidgetCard
          totalEarnImg={totalEarn}
          memberImg={memberImg}
          title="Emissions Tracking"
          amount="7,245.00"
          groth="+ 10% reduction "
          id="totalGoal"
        />
      </div>
    </div>
  );
}

export default TotalWidget;
