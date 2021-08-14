import { gql, useMutation } from "@apollo/client";

const CREATE_VOLUNTEER_MUTATION = gql`
  mutation CreateVolunteer($input: CreateVolunteerInput!) {
    createVolunteer(params: $input) {
      id
      age
      email
      facebook_id
      firstname
      hometown
      intro
      lastname
      living
      occupation
      phone
      professional
      slack_id
      tshirt
      unit
      vegetable
    }
  }
`;

interface CREATE_VOLUNTEER_MUTATION_VARIABLES {
  input: {
    age: number;
    email: string;
    facebook_id: string;
    firstname: string;
    hometown: string;
    intro: string;
    lastname: string;
    living: string;
    occupation: string;
    phone: string;
    professional: string;
    slack_id: string;
    tshirt: string;
    unit: string;
    vegetable: string;
  };
}

export interface CREATE_VOLUNTEER_MUTATION_RESULT {
  createVolunteer: {
    id: string;
    age: number;
    email: string;
    facebook_id: string;
    firstname: string;
    hometown: string;
    intro: string;
    lastname: string;
    living: string;
    occupation: string;
    phone: string;
    professional: string;
    slack_id: string;
    tshirt: string;
    unit: string;
    vegetable: string;
  };
}

export const useCreateVolunteerMutations = () => {
  const [createVolunteer] = useMutation<
    CREATE_VOLUNTEER_MUTATION_RESULT,
    CREATE_VOLUNTEER_MUTATION_VARIABLES
  >(CREATE_VOLUNTEER_MUTATION);
  return createVolunteer;
};
