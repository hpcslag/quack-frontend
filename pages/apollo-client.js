import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { JwtStorage } from "../common/auth/jwt/jwt";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphiql",
});

// auth link concator
const authLink = setContext((_, { headers }) => {
  const jwt = new JwtStorage("accessToken");
  const token = jwt.token;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// this client without auth
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// this client included auth
export const authClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

/*

import { gql } from "@apollo/client";
import P client } from "../apollo-client";
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
