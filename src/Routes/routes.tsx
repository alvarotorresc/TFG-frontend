import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import EditPhenomena from "../components/Phenomena/EditPhenomena/EditPhenomena";
import EditOcurrence from "../components/Phenomena/EditOcurrence/EditOcurrence";
import EditResearcher from "../components/Researcher/EditResearcher/EditResearcher";
import PhenomenonDetail from "../components/Phenomena/PhenomenonDetail/PhenomenonDetail";
import ResearcherDetail from "../components/Researcher/ResearcherDetail/ResearcherDetail";
import CreatePhenomena from "../components/Phenomena/CreatePhenomena/CreatePhenomena";
import CreateOcurrence from "../components/Phenomena/CreateOcurrence/CreateOcurrence";
import CreateResearcher from "../components/Researcher/CreateResearcher/CreateResearcher";
import LoginForm from "../components/Auth/SignIn/SignIn";
import PostList from "../components/Post/PostList/PostList";
import Landing from "../components/Landing/Landing";
import ResearcherContainer from "../components/Researcher/ResearcherContainer/ResearcherContainer";
import PhenomenaContainer from "../components/Phenomena/PhenomenaContainer/PhenomenaContainer";

export default function RoutesComponent() {
  return (
    <Switch>
      <Route
        exact
        strict
        path="/phenomenon/edit/:id"
        component={EditPhenomena}
      />
      <Route
        exact
        strict
        path="/ocurrence/edit/:id"
        component={EditOcurrence}
      />
      <Route
        exact
        strict
        path="/researcher/edit/:id"
        component={EditResearcher}
      />
      <Route exact strict path="/phenomena/:id" component={PhenomenonDetail} />
      <Route
        exact
        strict
        path="/researchers/:id"
        component={ResearcherDetail}
      />
      <Route
        exact
        strict
        path="/phenomenon/create"
        component={CreatePhenomena}
      />
      <Route
        exact
        strict
        path="/ocurrence/create"
        component={CreateOcurrence}
      />
      <Route
        exact
        strict
        path="/researcher/create"
        component={CreateResearcher}
      />
      <Route exact strict path="/researchers" component={ResearcherContainer} />
      <Route exact strict path="/phenomena" component={PhenomenaContainer} />
      <Route exact strict path="/signin" component={LoginForm} />
      <Route exact strict path="/posts" component={PostList} />
      <Route exact strict path="/" component={Landing} />
      <Route exact strict render={() => <Redirect to="/" />} />
    </Switch>
  );
}
