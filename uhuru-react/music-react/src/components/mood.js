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

class Mood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/mood-playlists/")
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
      <div className="top1 column col-6">
        <div className="mood">
          <h1 className="title">Mood for today</h1>
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
        </div>
        <div className="ta-genre-block">
          {items.map((item) => (
            <Link to="/playlist" className="m1">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Mood;
