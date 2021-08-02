import React from "react";

// components

import ListNotification from "../../../components/Notifications/ListNotification";

// layout for page

import PureDark from "../../../layouts/PureDark";

const NotificationList = () => {
  const notifications = [{}];
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <ListNotification additional_title="通知列表 - 全部" />
        </div>
      </div>
    </>
  );
};

export default NotificationList;

NotificationList.layout = PureDark;
