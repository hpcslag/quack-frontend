import React from "react";

// components

import ListStaff from "../../../../../../components/Staffs/ListStaff";

// layout for page

import PureDark from "../../../../../../layouts/PureDark";

const StaffTable = () => {
  const staffs = [{}];
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <ListStaff />
        </div>
      </div>
    </>
  );
};

export default StaffTable;

StaffTable.layout = PureDark;
