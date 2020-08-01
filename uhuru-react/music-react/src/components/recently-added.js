import React, { useEffect, Component } from "react";
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // Link,
  // useRouteMatch,
  // useParams,
} from "react-router-dom";
import { appendScript, removeScript } from "./externalScript.js";

class RecentlyAdded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    appendScript("/static/js/jp music/jp music player.js");
    fetch("http://127.0.0.1:8000/api/song")
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
      <div className="cards grid-container">
        {items.map((item) => (
          <div key={item.id} className="card set">
            <div
              className="image"
              style={{
                backgroundImage:
                  "url(https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg)",
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
              }}
            ></div>
            <div className="card-text">
              <a href="#" className="title play-song" data-song={item.id}>
                {item.title}
              </a>
              <a href="#" className="username">
                {item.artist}
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default RecentlyAdded;
