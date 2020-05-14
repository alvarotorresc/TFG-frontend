import React from "react";
import { Switch, Route } from "react-router-dom";
import EditPhenomena from "../components/Phenomena/EditPhenomena/EditPhenomena";
import EditOcurrence from "../components/Phenomena/EditOcurrence/EditOcurrence";
import EditResearcher from "../components/Researcher/EditResearcher/EditResearcher";
import PhenomenonDetail from "../components/Phenomena/PhenomenonDetail/PhenomenonDetail";
import ResearcherDetail from "../components/Researcher/ResearcherDetail/ResearcherDetail";
import CreatePhenomena from "../components/Phenomena/CreatePhenomena/CreatePhenomena";
import CreateOcurrence from "../components/Phenomena/CreateOcurrence/CreateOcurrence";
import CreateResearcher from "../components/Researcher/CreateResearcher/CreateResearcher";
import PhenomenaList from "../components/Phenomena/PhenomenaList/PhenomenaList";
import LoginForm from "../components/Auth/SignIn/SignIn";
import PostList from "../components/Post/PostList/PostList";
import Landing from "../components/Landing/Landing";
import ResearcherContainer from "../components/Researcher/ResearcherContainer/ResearcherContainer";

export default function RoutesComponent() {
  return (
    <Switch>
      <Route path="/phenomenon/edit/:id" component={EditPhenomena} />
      <Route path="/ocurrence/edit/:id" component={EditOcurrence} />
      <Route path="/researcher/edit/:id" component={EditResearcher} />
      <Route path="/phenomena/:id" component={PhenomenonDetail} />
      <Route path="/researchers/:id" component={ResearcherDetail} />
      <Route path="/phenomenon/create" component={CreatePhenomena} />
      <Route path="/ocurrence/create" component={CreateOcurrence} />
      <Route path="/researcher/create" component={CreateResearcher} />
      <Route path="/researchers" component={ResearcherContainer} />
      <Route path="/phenomena" component={PhenomenaList} />
      <Route path="/signin" component={LoginForm} />
      <Route path="/posts" component={PostList} />
      <Route path="/" component={Landing} />
    </Switch>
  );
}
