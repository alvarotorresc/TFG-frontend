import React from "react";
import Header from "./components/Layout/Header/Header";
import "./App.css";
import Landing from "./components/Landing/Landing";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ResearcherList from "./components/Researcher/ResearcherList/ResearcherList";
import PhenomenaList from "./components/Phenomena/PhenomenaList/PhenomenaList";
import PostList from "./components/Post/PostList/PostList";
import LoginForm from "./components/Auth/SignIn/SignIn";
import ResearcherDetail from "./components/Researcher/ResearcherDetail/ResearcherDetail";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import PhenomenonDetail from "./components/Phenomena/PhenomenonDetail/PhenomenonDetail";

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
          <Switch>
            <Route path="/phenomena/:id" component={PhenomenonDetail}></Route>
            <Route path="/signin" component={LoginForm}></Route>
            <Route path="/researchers/:id" component={ResearcherDetail}></Route>
            <Route path="/researchers" component={ResearcherList}></Route>
            <Route path="/phenomena" component={PhenomenaList}></Route>
            <Route path="/posts" component={PostList}></Route>
            <Route path="/" component={Landing}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
