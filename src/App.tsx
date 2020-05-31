import React from "react";
import Header from "./components/Layout/Header/Header";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/link-context";
import AuthProvider, { AuthContext } from "./context/auth/AuthContext";
import LoggedInRoutesComponent from "./Routes/loggedIn.routes";
import LogoutRoutesComponent from "./Routes/logout.routes";

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
          <AuthProvider>
            <Header />
            <AuthContext.Consumer>
              {(auth) => {
                if (auth.loggedIn) {
                  return <LoggedInRoutesComponent />;
                } else {
                  return <LogoutRoutesComponent />;
                }
              }}
            </AuthContext.Consumer>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
