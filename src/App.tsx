import React from "react";
import Header from "./components/Layout/Header/Header";
import "./App.css";
import Landing from "./components/Landing/Landing";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ResearcherList from "./components/Researcher/ResearcherList/ResearcherList";
import PhenomenaList from "./components/Phenomena/PhenomenaList/PhenomenaList";
import PostList from "./components/Post/PostList/PostList";
import LoginForm from "./components/Auth/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Header />
        <Switch>
          <Route path="/researchers" component={ResearcherList}></Route>
          <Route path="/phenomena" component={PhenomenaList}></Route>
          <Route path="/posts" component={PostList}></Route>
          <Route path="/" component={Landing}></Route>
          <Route path="/signin" component={LoginForm}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
