import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopNav from "./components/topnav.js";
import Aside from "./components/aside.js";
import TaApp from "./components/ta-app.js";
import Player from "./components/player.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <TopNav />
        <Aside />
        <div
          className="ta-app-wrapper"
          style={{ paddingTop: "75px", paddingLeft: "275px" }}
        >
          <Route path="/">
            <TaApp />
          </Route>
          <Player />
        </div>
      </div>
    </Router>
  );
}

export default App;
