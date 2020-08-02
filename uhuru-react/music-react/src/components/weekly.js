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

class Weekly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/weekly-playlists/")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, items } = this.state;
    return (
      <div className="top column col-6">
        <h1 className="title">Weekly Chart</h1>
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

        <div className="ta-stat-board flex-column ">
          <ul>
            <li>#</li>
            <li id="stat1">Title</li>
            <li className="stat">Artist</li>
            <li className="stat">Album</li>
          </ul>
          {items.map((item) => (
            <div className="ta-stat-tracks" style={{ clear: "both" }}>
              <div
                className="stat-image"
                style={{
                  backgroundImage:
                    "url(https://i1.sndcdn.com/artworks-000147165684-3hzdwx-t500x500.jpg)",
                }}
              ></div>
              //{" "}
              <div className="card-stat">
                <Link to="/playlist" className="title">
                  {item.name}
                </Link>
                <Link to="/playlist" className="username">
                {item.name}
                </Link>
                <Link to="/playlist" className="username">
                {item.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Weekly;
