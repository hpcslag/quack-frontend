import React from "react";

// components

import ListStaff from "../../../components/Staffs/ListStaff";

// layout for page

import PureDark from "../../../layouts/PureDark";

const VolunteerPage = () => {
  const staffs = [{}];
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <ListStaff additional_title="志工列表 - 全部" />
        </div>
      </div>
    </>
  );
};

export default VolunteerPage;

VolunteerPage.layout = PureDark;
