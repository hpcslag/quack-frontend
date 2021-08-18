import { useRouter } from "next/router";
import React from "react";

// components

import ListStaff from "../../../../../../components/Staffs/ListStaff";

// layout for page

import PureDark from "../../../../../../layouts/PureDark";

const StaffTable = () => {
  const router = useRouter();
  const staffs = [{}];

  const sendNotificationToTeamMember = () => {
    router.push({
      pathname: "/dashboard/notification/notify-plan",
      query: { to: [1, 2, 3] },
    });
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <ListStaff />
          <button
            className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={sendNotificationToTeamMember}
          >
            發送通知
          </button>
        </div>
      </div>
    </>
  );
};

export default StaffTable;

StaffTable.layout = PureDark;
