"use client";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { PropsWithChildren } from "react";

export const ApolloWrapper = ({ children }: PropsWithChildren) => {
  const client = new ApolloClient({
    uri: "http://localhost:7000/dymong",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
