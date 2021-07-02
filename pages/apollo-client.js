import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache(),
});

export default client;

/*

import { gql } from "@apollo/client";
import client from "../apollo-client";
import { useEffect } from "react";

  useEffect(() => {
    (async () => {
      const { data } = await client.query({
        query: gql`
          query Countries {
            countries {
              code
              name
              emoji
            }
          }
        `,
      });
      console.log(data);
    })();
  }, []);


*/
