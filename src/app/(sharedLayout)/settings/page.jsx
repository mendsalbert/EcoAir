"use client";
import { useState } from "react";
import SettingsSidebar from "@/component/settings/SettingsSidebar";
import TermsAndCondition from "@/component/settings/TermsAndCondition";
import Security from "@/component/settings/Security";
import Faq from "@/component/settings/Faq";
import Payment from "@/component/settings/Payment";
import ProgramAndResources from "@/component/settings/ProgramAndResources";
import Notification from "@/component/settings/Notification";
import PersonalInfo from "@/component/settings/PersonalInfo";

function Settings() {
  const [activeTab, setActiveTab] = useState("personalInfo");
  return (
    <>
      {/* Sidebar  */}
      <SettingsSidebar activeTab={activeTab} handleActiveTab={setActiveTab} />
      {/* Tab Content  */}
      <div className="py-8 px-10 col-span-9 tab-content">
        {/* Personal Information */}
        <PersonalInfo name="personalInfo" activeTab={activeTab} />
        {/* Notification  */}
        <Notification name="notification" activeTab={activeTab} />
        {/* Program & Resources  */}
        <ProgramAndResources name="programAndResources" activeTab={activeTab} />
        {/* Payments  */}
        <Payment name="payment" activeTab={activeTab} />
        {/* Faq  */}
        <Faq name="faq" activeTab={activeTab} />
        {/* Security Password  */}
        <Security name="security" activeTab={activeTab} />
        {/* Terms & Condition  */}
        <TermsAndCondition name="termsAndConditions" activeTab={activeTab} />
      </div>
    </>
  );
}

export default Settings;
