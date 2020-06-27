import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopNav from "./components/topnav.js";
import Aside from "./components/aside.js";
import TaApp from "./components/ta-app.js";
import Player from "./components/player.js";

function App() {
  return (
    <div>
      <TopNav />
      <Aside />
      <div
        className="ta-app-wrapper"
        style={{ paddingTop: "75px", paddingLeft: "275px" }}
      >
        <TaApp />
        <Player />
      </div>
    </div>
  );
}

export default App;
