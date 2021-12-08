import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import track from "react-tracking";
import { TrackedAbout } from "./pages/About";
import Home from "./pages/Home";
import { Users } from "./pages/Users";

export default function App() {
  return (
    <AppStyled className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <TrackedAbout />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppStyled>
  );
}

export const TrackedApp = track(
  // app-level tracking data
  { app: "TrackingDemo" },

  // top-level options
  {
    // custom dispatch to console.log in addition to pushing to dataLayer[]
    dispatch: data => {
      console.log("Tracking:", data);
      (window.dataLayer = window.dataLayer || []).push(data);
      // here is where you add your custom analytics call
    }
  }
)(App);

const AppStyled = styled.div`
  font-family: sans-serif;
  text-align: center;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #4a4a4a;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #000;
  }
`;
