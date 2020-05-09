import React from "react";
import Header from "./components/Layout/Header/Header";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./Routes/routes";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:5000/graphql",
  }),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter basename="/">
          <Header />
          <RoutesComponent />
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
