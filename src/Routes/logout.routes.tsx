import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PhenomenonDetail from "../components/Phenomena/PhenomenonDetail/PhenomenonDetail";
import ResearcherDetail from "../components/Researcher/ResearcherDetail/ResearcherDetail";
import LoginForm from "../components/Auth/SignIn/SignIn";
import PostList from "../components/Post/PostList/PostList";
import Landing from "../components/Landing/Landing";
import ResearcherContainer from "../components/Researcher/ResearcherContainer/ResearcherContainer";
import PhenomenaContainer from "../components/Phenomena/PhenomenaContainer/PhenomenaContainer";

export default function LogoutRoutesComponent() {
  return (
    <Switch>
      <Route exact strict path="/phenomena/:id" component={PhenomenonDetail} />
      <Route
        exact
        strict
        path="/researchers/:id"
        component={ResearcherDetail}
      />

      <Route exact strict path="/researchers" component={ResearcherContainer} />
      <Route exact strict path="/phenomena" component={PhenomenaContainer} />
      <Route exact strict path="/signin" component={LoginForm} />
      <Route exact strict path="/posts" component={PostList} />
      <Route exact strict path="/" component={Landing} />
      <Route exact strict render={() => <Redirect to="/signin" />} />
    </Switch>
  );
}
