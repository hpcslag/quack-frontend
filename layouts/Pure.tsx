import React from "react";

// components

import PureNavbar from "../components/Navbars/PureNavbar";
import Sidebar from "../components/Sidebar/Sidebar.js";
import FooterAdmin from "../components/Footers/FooterAdmin.js";

const Pure = ({ children }: any) => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <PureNavbar />
        <div className="h-screen">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
};

export default Pure;
