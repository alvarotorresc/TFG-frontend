import React from "react";
import Header from "./components/Layout/Header/Header";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./Routes/routes";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/link-context";

const httpLink = createHttpLink({
  uri: "http://localhost:5000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // @ts-ignore
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <RoutesComponent />
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
