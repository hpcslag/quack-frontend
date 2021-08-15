import { gql, useLazyQuery, useQuery } from "@apollo/client";

const SEARCH_VOLUNTEER = gql`
  query SearchVolunteer($name: String!) {
    searchVolunteers(name: $name) {
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
      __typename
    }
  }
`;

interface SEARCH_VOLUNTEER_VARIABLES {
  name: string;
}

interface SEARCH_VOLUNTEER_RESULT {
  searchVolunteers: {
    __typename: "Volunteer";
    id: number;
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
  }[];
}

export const useSearchVolunteer = () => {
  const [searching, { loading, error, data }] = useLazyQuery<
    SEARCH_VOLUNTEER_RESULT,
    SEARCH_VOLUNTEER_VARIABLES
  >(SEARCH_VOLUNTEER);

  return [searching, data] as const;
};
