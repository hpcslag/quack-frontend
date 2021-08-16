import React, { useState } from "react";

// components

import TeamsListSelection from "../../../../components/Teams/ListSelection";

// layout for page

import Pure from "../../../../layouts/Pure";
import { withSession } from "../../../../components/Auth/SessionHOC";
import { useRouter } from "next/router";
import { useConferenceTeams } from "../../../../common/hooks/ConferenceTeams";

const ConferenceTeams = withSession(() => {
  const router = useRouter();
  const { conference_id } = router.query;

  const teamsByConference = useConferenceTeams(conference_id as any) as any[];

  const teams = teamsByConference.map((team: any) => ({
    id: team.id,
    team_name: team.team_name,
  }));

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <TeamsListSelection teams={teams} />
        </div>
      </div>
    </>
  );
});

export default ConferenceTeams;

ConferenceTeams.layout = Pure;
