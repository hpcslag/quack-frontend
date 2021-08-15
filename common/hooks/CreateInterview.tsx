import { gql, useMutation } from "@apollo/client";

const CREATE_INTERVIEWs_MUTATION = gql`
  mutation CreateInterviews($input: [CreateInterviewInput!]) {
    createInterviews(params_many: $input)
  }
`;

interface CREATE_INTERVIEWs_MUTATION_VARIABLES {
  input: {
    adjust_team_role_order: string;
    admit_status: string;
    email_last_notify: Date;
    interview_date: Date;
    interview_meeting_url: string;
    interview_memo: string;
    is_enroll_notify_send: boolean;
    is_interview_invitation_send: boolean;
    sms_last_notify_date: string;
    profile_id: number;
    conference_id: number;
    team_id: number;
  }[];
}

export interface CREATE_INTERVIEWs_MUTATION_RESULT {
  createInterviews: boolean;
}

export const useCreateInterviewsMutation = () => {
  const [createInterviews] = useMutation<
    CREATE_INTERVIEWs_MUTATION_RESULT,
    CREATE_INTERVIEWs_MUTATION_VARIABLES
  >(CREATE_INTERVIEWs_MUTATION);
  return createInterviews;
};
