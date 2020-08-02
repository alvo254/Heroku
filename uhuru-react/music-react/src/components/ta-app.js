import React, { useEffect, Component } from "react";
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
  // useRouteMatch,
  // useParams,
} from "react-router-dom";
import { appendScript, removeScript } from "./externalScript.js";
import RecentlyAdded from "./recently-added.js";
import Mood from "./mood.js";
import Weekly from "./weekly.js";
import Trending from "./trending"

class TaApp extends Component {
  componentDidMount() {
    appendScript("/static/js/jp music/jp music player.js");
  }

  componentWillUnmount() {
    removeScript("/static/js/jp music/jp music player.js");
  }

  render() {
    return (
      <div className="ta-app">
        <Mood />
        <Weekly />
        <h1 className="recent">Recently Added</h1>
        <section className="right">
          <a href="" className="show">
            Show all
          </a>
          <button>
            <span className="material-icons">keyboard_arrow_left</span>
          </button>
          <button>
            <span className="material-icons">keyboard_arrow_right</span>
          </button>
        </section>

        <RecentlyAdded />

        <h1 className="title">Trending</h1>
        <section className="right">
          <a href="" className="show">
            Show all
          </a>
          <button>
            <span className="material-icons">keyboard_arrow_left</span>
          </button>
          <button>
            <span className="material-icons">keyboard_arrow_right</span>
          </button>
        </section>

        <Trending />
        <span
          style={{
            backgroundImage:
              'url("https://i1.sndcdn.com/artworks-000147165684-3hzdwx-t500x500.jpg")',
            width: "100%",
            height: "100%",
            opacity: 1,
          }}
          className="sc-artwork sc-artwork-placeholder-10  image__full g-opacity-transition"
          aria-label="Sunday music and hot coffee.."
          aria-role="img"
        ></span>
      </div>
    );
  }
}

export default TaApp;
