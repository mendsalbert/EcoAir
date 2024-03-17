"use client";
import HeaderOne from "@/component/header/HeaderOne";
import HeaderTwo from "@/component/header/HeaderTwo";
import Overlay from "@/component/overlay";
import Sidebar from "@/component/sidebar";
import SidebarV2 from "@/component/sidebar/SidebarV2";
import ProtoTypes from "prop-types";

import { useState } from "react";

function Layout({ bg, overlay, children }) {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div className={`layout-wrapper ${sidebar && "active"}  w-full`}>
      <div className="relative flex w-full">
        <Sidebar handleActive={() => setSidebar(!sidebar)} />
        {overlay ? overlay : <Overlay />}
        <SidebarV2 />
        <div
          className={`body-wrapper flex-1 overflow-x-hidden ${
            bg ? bg : "dark:bg-darkblack-500"
          } `}
        >
          <HeaderOne handleSidebar={() => setSidebar(!sidebar)} />
          <HeaderTwo handleSidebar={() => setSidebar(!sidebar)} />
          {children}
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  bg: ProtoTypes.string,
  overlay: ProtoTypes.node,
  children: ProtoTypes.node,
};

export default Layout;
