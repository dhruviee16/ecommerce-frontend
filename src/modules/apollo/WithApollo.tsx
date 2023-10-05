'use client';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import React from 'react';
import { useAuthToken } from '../auth/hooks/useAuthToken';

const httpLink = createHttpLink({ uri: process.env.NEXT_PUBLIC_API_URL });

interface Props {
  children?: React.ReactNode;
}

const WithApollo: React.FC<Props> = ({ children }) => {
  const authMiddleware = (authToken: string) =>
    new ApolloLink((request, forward) => {
      // add the authorization to the headers
      if (authToken) {
        request.setContext({
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
      }

      return forward(request);
    });

  const [authToken] = useAuthToken();

  const client = new ApolloClient({
    link: authMiddleware(authToken).concat(httpLink),
    cache: new InMemoryCache({}),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default WithApollo;
