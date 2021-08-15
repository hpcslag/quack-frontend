import { gql, useQuery } from "@apollo/client";

const INTERVIEWS_QUERY_RESULT = gql`
  query Interviews($team_id: ID!) {
    interviews(team_id: $team_id) {
      adjust_team_role_order
      admit_status
      email_last_notify
      interview_date
      interview_meeting_url
      interview_memo
      is_enroll_notify_send
      is_interview_invitation_send
      sms_last_notify_date
      conference_id
      team_id
      profile_id
      profile {
        id
        lastname
        firstname
        email
        phone
        slack_id
      }
    }
  }
`;

interface INTERVIEWS_QUERY_VARIABLES {
  team_id: number | string;
}

interface INTERVIEWS_QUERY_RESULT {
  interviews: {
    adjust_team_role_order: string;
    admit_status: string;
    email_last_notify: string;
    interview_date: string;
    interview_meeting_url: string;
    interview_memo: string;
    is_enroll_notify_send: boolean;
    is_interview_invitation_send: boolean;
    sms_last_notify_date: string;
    conference_id: string;
    team_id: string;
    profile_id: string;
    profile: {
      id: string;
      lastname: string;
      firstname: string;
      email: string;
      phone: string;
      slack_id: string;
    };
  }[];
}

export const useInterviews = (team_id: string | number) => {
  const { data } = useQuery<
    INTERVIEWS_QUERY_RESULT,
    INTERVIEWS_QUERY_VARIABLES
  >(INTERVIEWS_QUERY_RESULT, {
    variables: {
      team_id: team_id,
    },
  });
  if (data?.interviews) return data.interviews;
  return [];
};
