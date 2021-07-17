import React, { useState } from "react";

// components

import ActivitiesListSelection from "../../../../components/Activities/ListSelection";

// layout for page

import Pure from "../../../../layouts/Pure";
import { withSession } from "../../../../components/Auth/SessionHOC";
import PureConfirmModal from "../../../../components/PureModels/PureConfirm";

const Conference = () => {
  const deleteActivityHook = useState(null);
  const onDeleteActivity = (activity_id: any) => {
    const [_, setDeleteActivityHook] = deleteActivityHook;
    setDeleteActivityHook(activity_id);
  };

  const onDeleteActivityConfirm = (activity_id: any) => {
    console.log(activity_id);
  };

  const conferecnes = [
    {
      id: 1,
      conference_name: "CONFERENCE 21",
      location: "ICCK 高雄國際會議中心 (Taiwan, Kaohsiung)",
      status: "Preparing",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <ActivitiesListSelection
            conferences={conferecnes}
            onDelete={onDeleteActivity}
          />
        </div>
      </div>
    </>
  );
};

export default Conference;

Conference.layout = Pure;
