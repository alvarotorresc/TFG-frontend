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
import PhenomenonDetail from "./components/Phenomena/PhenomenonDetail/PhenomenonDetail";
import CreateResearcher from "./components/Researcher/CreateResearcher/CreateResearcher";
import CreatePhenomena from "./components/Phenomena/CreatePhenomena/CreatePhenomena";
import CreateOcurrence from "./components/Phenomena/CreateOcurrence/CreateOcurrence";
import EditResearcher from "./components/Researcher/EditResearcher/EditResearcher";
import EditPhenomena from "./components/Phenomena/EditPhenomena/EditPhenomena";
import EditOcurrence from "./components/Phenomena/EditOcurrence/EditOcurrence";
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
          <Switch>
            <Route path="/phenomenon/edit/:id" component={EditPhenomena} />
            <Route path="/ocurrence/edit/:id" component={EditOcurrence} />
            <Route path="/researcher/edit/:id" component={EditResearcher} />
            <Route path="/phenomena/:id" component={PhenomenonDetail} />
            <Route path="/researchers/:id" component={ResearcherDetail} />
            <Route path="/phenomenon/create" component={CreatePhenomena} />
            <Route path="/ocurrence/create" component={CreateOcurrence} />
            <Route path="/researcher/create" component={CreateResearcher} />
            <Route path="/researchers" component={ResearcherList} />
            <Route path="/phenomena" component={PhenomenaList} />
            <Route path="/signin" component={LoginForm} />
            <Route path="/posts" component={PostList} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
