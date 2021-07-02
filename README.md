# Quack Frontend Website

Origin project please refer: [Notus NextJS](https://github.com/creativetimofficial/notus-nextjs)

# Apollo Clinet two-way

1. Directly using:

``` js
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

```

2. By hook

``` jsx

import ClientOnly from "../../components/Apollo/ClientOnly";
import Countries from "../../components/Logics/Countries";


<ClientOnly>
  <Countries />
</ClientOnly>
```
