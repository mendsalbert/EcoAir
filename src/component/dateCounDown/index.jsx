"use client";
import { useEffect, useState } from "react";

function DateCountDown() {
  const targetTime = Date.now() + 118600000;
  const calculateRemainingTime = () => {
    const currentTime = new Date().getTime();
    const targetTimeInMilliseconds = new Date(targetTime).getTime();
    const timeDifference = targetTimeInMilliseconds - currentTime;

    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const total = days + hours + minutes + seconds;

    return {
      days,
      hours,
      minutes,
      seconds,
      total,
    };
  };
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const newRemainingTime = calculateRemainingTime();
      setRemainingTime(newRemainingTime);

      if (newRemainingTime.total <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <ul id="countdown-wrapper" className="flex sm:gap-5 gap-2 lg:gap-10">
      <li className="sm:w-28 sm:h-28 w-24 h-24 flex flex-col justify-center items-center border-2 border-success-100 dark:border-white  rounded-lg">
        <h2
          id="days"
          className="sm:text-[48px] text-xl dark:text-white font-semibold text-black font-poppins"
        >
          {remainingTime.days}
        </h2>
        <span className="font-medium text-bgray-600 dark:text-white">Days</span>
      </li>
      <li className="sm:w-28 sm:h-28 w-24 h-24 flex flex-col justify-center items-center border-2 border-success-100 dark:border-white rounded-lg">
        <h2
          id="hours"
          className="sm:text-[48px] text-xl font-semibold text-black dark:text-white font-poppins"
        >
          {remainingTime.hours}
        </h2>
        <span className="font-medium text-bgray-600 dark:text-white">
          Hours
        </span>
      </li>
      <li className="sm:w-28 sm:h-28 w-24 h-24 flex flex-col justify-center items-center border-2 border-success-100 dark:border-white rounded-lg">
        <h2
          id="minutes"
          className="sm:text-[48px] text-xl font-semibold dark:text-white text-black font-poppins"
        >
          {remainingTime.minutes}
        </h2>
        <span className="font-medium text-bgray-600 dark:text-white">
          Minutes
        </span>
      </li>
      <li className="sm:w-28 sm:h-28 w-24 h-24 flex flex-col justify-center items-center border-2 border-success-100 rounded-lg dark:border-white">
        <h2
          id="seconds"
          className="sm:text-[48px] text-xl dark:text-white font-semibold text-black font-poppins"
        >
          {remainingTime.seconds}
        </h2>
        <span className="font-medium text-bgray-600 dark:text-white">
          Seconds
        </span>
      </li>
    </ul>
  );
}

export default DateCountDown;
