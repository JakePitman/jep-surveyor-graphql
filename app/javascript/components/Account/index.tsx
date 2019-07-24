import React from "react";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { Query } from "react-apollo";
import accountQuery from "./gqlOperations/accountQuery";
import { InMemoryCache } from "apollo-cache-inmemory";

import SignIn from "./SignIn";
import Survey from "./Survey";

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql"
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

class Account extends React.Component {
  triggerRefresh = () => {
    window.location.reload();
  };

  signOut = () => {
    window.localStorage.removeItem("token");
    this.triggerRefresh();
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <h1>Hello from account/index</h1>
        <button onClick={this.signOut}>Sign Out</button>
        <Query query={accountQuery}>
          {({ loading, error, data }) => {
            if (loading) return <p>...loading</p>;
            if (error) return <SignIn triggerRefresh={this.triggerRefresh} />;

            return (
              <div>
                <p>You are logged in</p>
                <h1>{data.account.name}</h1>
                {data.account.surveys.map(survey => (
                  <Survey surveyData={survey} key={survey.id} />
                ))}
              </div>
            );
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default Account;
