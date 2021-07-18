import React, { useState } from "react";

// components

import TeamsListSelection from "../../../../components/Teams/ListSelection";

// layout for page

import Pure from "../../../../layouts/Pure";
import { withSession } from "../../../../components/Auth/SessionHOC";
import PureConfirmModal from "../../../../components/PureModels/PureConfirm";

const ConferenceTeams = withSession(() => {
  const deleteActivityHook = useState(null);
  const onDeleteActivity = (activity_id: any) => {
    const [_, setDeleteActivityHook] = deleteActivityHook;
    setDeleteActivityHook(activity_id);
  };

  const onDeleteActivityConfirm = (activity_id: any) => {
    console.log(activity_id);
  };

  const teams = [
    {
      id: 1,
      team_name: "活動組",
      location: "ICCK 高雄國際會議中心 (Taiwan, Kaohsiung)",
      status: "Preparing",
    },
    {
      id: 1,
      team_name: "行政部",
      location: "ICCK 高雄國際會議中心 (Taiwan, Kaohsiung)",
      status: "Preparing",
    },
    {
      id: 1,
      team_name: "議程組",
      location: "ICCK 高雄國際會議中心 (Taiwan, Kaohsiung)",
      status: "Preparing",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <TeamsListSelection teams={teams} onDelete={onDeleteActivity} />
        </div>
      </div>
      {/* Delete Modal Confirm */}
      <PureConfirmModal
        title="您確定要刪除? "
        content="一旦刪除之後，就無法復原這個活動。"
        modalStateHook={deleteActivityHook}
        onConfirm={onDeleteActivityConfirm}
      />
    </>
  );
});

export default ConferenceTeams;

ConferenceTeams.layout = Pure;
