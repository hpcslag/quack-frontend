import { gql, useQuery } from "@apollo/client";

const CONFERENCE_TEAM_QUERY = gql`
  query ConferenceTeams($conference_id: ID!) {
    teams(conferenceId: $conference_id) {
      id
      team_id
      team_name
      __typename
    }
  }
`;

interface CONFERENCE_TEAM_QUERY_RESULT {
  teams: {
    __typename: "Team";
    id: string;
    team_id: number;
    team_name: string;
  };
}

export const useConferenceTeams = (conference_id: number | string) => {
  const { data } = useQuery<CONFERENCE_TEAM_QUERY_RESULT, any>(
    CONFERENCE_TEAM_QUERY,
    {
      variables: {
        conference_id: conference_id,
      },
    }
  );
  if (data?.teams) {
    return data.teams;
  }
  return [];
};
