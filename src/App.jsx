import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Auth from "./component/auth/Auth";
import NewsFeed from "./component/mainpage/NewsFeed";
import Signup from "./component/auth/Signup";
import Navbar from "./component/mainpage/Navbar";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <Router>
        <Navbar />
        {!isLoggedIn && <Signup />}

        {isLoggedIn && <NewsFeed />}
        <Switch>
          <Route></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
