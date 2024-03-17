import totalEarn from "/public/static/images/icons/total-earn.svg";
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
          title="Top Pollutants"
          amount="15 µg/m³"
          groth="+ 3.5%"
          id="totalSpending"
        />
        <TotalWidgetCard
          totalEarnImg={totalEarn}
          memberImg={memberImg}
          title="Major Pollution Sources"
          amount="7,245.00"
          groth="+ 3.5%"
          id="totalGoal"
        />
      </div>
    </div>
  );
}

export default TotalWidget;
