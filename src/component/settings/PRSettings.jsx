"use client";
import { useState } from "react";
import SlideBtn from "../button/SlideBtn";

function PRSettings() {
  const [activeSharing, setActiveSharing] = useState({
    ["Backup"]: false,
    ["Sync"]: true,
    ["File Sharing"]: false,
  });
  const handleNotification = (name) => {
    setActiveSharing({
      ...activeSharing,
      [name]: !activeSharing[name],
    });
  };
  return (
    <div className="pt-7 border-t border-bgray-300 mt-8">
      <h3 className="text-base font-semibold text-bgray-900 dark:text-white uppercase mb-4">
        Settings
      </h3>
      <div className="flex flex-col space-y-5">
        <SlideBtn
          name="File Sharing"
          handleBtn={handleNotification}
          status={activeSharing}
        />
        <SlideBtn
          name="Backup"
          handleBtn={handleNotification}
          status={activeSharing}
        />
        <SlideBtn
          name="Sync"
          handleBtn={handleNotification}
          status={activeSharing}
        />
      </div>
    </div>
  );
}

export default PRSettings;
