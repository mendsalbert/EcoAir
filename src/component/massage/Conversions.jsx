"use client";
import uSm from "/public/static/images/message/u-sm.png";
import uSm1 from "/public/static/images/message/u-sm-1.png";
import ConversionsHeader from "./ConversionsHeader";
import Conversion from "./Conversion";
import Typing from "./Typing";
import SendMassage from "../forms/SendMassage";
import Profile from "./Profile";
import { useState } from "react";
function Conversions() {
  const [isOpen, toggleSetting] = useState(false);
  return (
    <>
      <div className="2xl:col-span-9 xl:col-span-8 dark:bg-darkblack-500 lg:col-span-7 col-span-12 relative">
        <ConversionsHeader toggleSetting={() => toggleSetting(!isOpen)} />
        <div className="lg:pt-20 dark:bg-darkblack-500 lg:px-11 p-5 mb-5 lg:mb-0 space-y-10">
          <Conversion
            img={uSm}
            text="Hi! I had about question about my last transtion"
            time="09:30 AM"
          />

          <Conversion
            img={uSm1}
            text="Hi, how can I help you with?"
            time="10:00 pM"
            self={true}
          />
          <Conversion
            img={uSm}
            text=" HIs this possible to refund?"
            time="09:30 AM"
          />
          <Conversion
            img={uSm1}
            text=" Of course, it is available in 38 and several other sizes which are very complete"
            time="10:00 pM"
            self={true}
          />
          <Typing />
        </div>
        <SendMassage />
      </div>
      <Profile isOpen={isOpen} close={() => toggleSetting(!isOpen)} />
    </>
  );
}

export default Conversions;
