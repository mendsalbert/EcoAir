"use Client";
import React, { useState, useEffect } from "react";
import totalEarn1 from "/public/static/images/icons/total-earn-1.svg";
import totalEarn2 from "/public/static/images/icons/total-earn-2.svg";
import totalEarn3 from "/public/static/images/icons/total-earn-3.svg";
import totalEarn4 from "/public/static/images/icons/total-earn-4.svg";
import totalEarn5 from "/public/static/images/icons/total-earn-5.svg";
import memberImg from "/public/static/images/avatar/members-2.png";
import TotalWidgetCard from "./TotalWidgetCard";
import Spinner from "../spinner";
function TotalWidget() {
  const [locations, setLocations] = useState([]);
  const [parameters, setParameters] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await fetch(
          "http://localhost:8001/api/v1/locations/get-locations"
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        // setError(error.message);
      } finally {
        console.log("finally");
      }
    }

    async function fetchParameters() {
      try {
        const response = await fetch(
          "http://localhost:8001/api/v1/parameters/get-parameters"
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setParameters(data);
      } catch (error) {
        // setError(error.message);
      } finally {
        console.log("finally");
      }
    }

    async function fetchCountries() {
      try {
        const response = await fetch(
          "http://localhost:8001/api/v1/countries/get-countries"
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();

        const uniqueCountries = Array.from(
          new Map(data.map((country) => [country["name"], country])).values()
        );

        setCountries(uniqueCountries);
      } catch (error) {
        // setError(error.message);
        console.error(error.message);
      } finally {
        console.log("finally");
      }
    }

    fetchLocations();
    fetchParameters();
    fetchCountries();
  }, []);

  return (
    <div className="mb-[24px] w-full">
      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-3">
        <TotalWidgetCard
          totalEarnImg={totalEarn1}
          memberImg={memberImg}
          title="Locations"
          amount={locations.length > 0 ? locations.length : <Spinner />}
          groth="+2.5%"
          id="totalEarn"
          isPrev={true}
          graphColor="#22C55E"
        />
        <TotalWidgetCard
          totalEarnImg={totalEarn2}
          memberImg={memberImg}
          title="Paremeters"
          amount={parameters.length > 0 ? parameters.length : <Spinner />}
          groth="PM10,PM2.5,O₃ mass.."
          id="totalEarn"
          isPrev={false}
          graphColor="#926DFF"
        />{" "}
        <TotalWidgetCard
          totalEarnImg={totalEarn3}
          memberImg={memberImg}
          title="Coutries"
          amount={countries.length > 0 ? countries.length : <Spinner />}
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
          title="Providers"
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
