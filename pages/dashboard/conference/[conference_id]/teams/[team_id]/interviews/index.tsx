import React from "react";

// components

import ListInterview from "../../../../../../../components/Interviews/ListInterviews";

// layout for page

import PureDark from "../../../../../../../layouts/PureDark";

const Interviews = () => {
  const staffs = [{}];
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <ListInterview additional_title="面談列表 - 全部" />
        </div>
      </div>
    </>
  );
};

export default Interviews;

Interviews.layout = PureDark;
