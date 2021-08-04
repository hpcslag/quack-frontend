import React, { useEffect, useState } from "react";

// components

import ActivitiesListSelection from "../../components/Activities/ListSelection";

// layout for page

import Pure from "../../layouts/Pure";
import { withSession } from "../../components/Auth/SessionHOC";
import PureConfirmModal from "../../components/PureModels/PureConfirm";

import { gql, useQuery } from "@apollo/client";

const CONFERENCES_QUERY = gql`
  query Conferences {
    conferences {
      id
      conf_id
      conf_name
    }
  }
`;

interface CONFERENCES_QUERY_RESULT {
  conferences: {
    __typename: "Conference";
    id: string;
    conf_id: string;
    conf_name: string;
  };
}

const Dashboard = () => {
  const { data } = useQuery<CONFERENCES_QUERY_RESULT, null>(CONFERENCES_QUERY);

  const conferences = data?.conferences || [];

  const deleteActivityHook = useState(null);
  const onDeleteActivity = (activity_id: any) => {
    const [_, setDeleteActivityHook] = deleteActivityHook;
    setDeleteActivityHook(activity_id);
  };

  const onDeleteActivityConfirm = (activity_id: any) => {
    console.log(activity_id);
  };

  /*const conferecnes = [
    {
      id: 1,
      conference_name: "CONFERENCE 21",
      location: "ICCK 高雄國際會議中心 (Taiwan, Kaohsiung)",
      status: "Preparing",
    },
  ];*/
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <ActivitiesListSelection
            conferences={conferences}
            onDelete={onDeleteActivity}
          />
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
};

export default Dashboard;

Dashboard.layout = Pure;
