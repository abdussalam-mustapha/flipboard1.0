import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Auth from "./component/auth/Auth";
import NewsFeed from "./component/mainpage/NewsFeed";
import Signup from "./component/auth/Signup";
import Navbar from "./component/mainpage/Navbar";
import Football from "./component/pages/Football";
import Music from "./component/pages/Music";
import Entertainment from "./component/pages/Entertainment";
import Religion from "./component/pages/Religion";
import Education from "./component/pages/Education";
import World from "./component/pages/World";
import Drama from "./component/pages/Drama";
import Bitcoin from "./component/pages/Bitcoin";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <Router>
        <Navbar />
        {/* {!isLoggedIn && <Signup />}

        {isLoggedIn && <NewsFeed />} */}
        <Switch>
          <Route path="/" exact>
            <NewsFeed />
          </Route>
          <Route path='/music' exact >
            <Music />
          </Route>
          <Route path='/entertainment' exact >
            <Entertainment />
          </Route>
          <Route path='/religion' exact >
            <Religion />
          </Route>
          <Route path='/education' exact >
            <Education />
          </Route>
          <Route path='/world' exact >
            <World />
          </Route>
          <Route path='/drama' exact >
            <Drama />
          </Route>
          <Route path='/bitcoin' exact >
            <Bitcoin />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
