import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function Aside() {
  return (
    <aside>
      <ul className="links">
        <div className="bread">Music</div>
        <li>
          <a href="#" className="active">
            <span className="material-icons">explore</span>Explore
          </a>
        </li>
        <li>
          <a href="#">
            <span className="material-icons">grade</span>Trending
          </a>
        </li>
        <li>
          <a href="#">
            <ion-icon name="musical-notes"></ion-icon>Stream
          </a>
        </li>
        <li>
          <a href="#">
            <span className="material-icons">library_music</span>Albums
          </a>
        </li>

        <li>
          <a href="#">
            <span className="material-icons">favorite</span>Liked
          </a>
        </li>
      </ul>

      <ul className="links">
        <div className="bread">My Playlist</div>
        <li>
          <Link to="/playlist">
            <span className="material-icons">queue_music</span>List 1
          </Link>
        </li>
        <li>
          <Link to="/playlist">
            <span className="material-icons">queue_music</span>List 2
          </Link>
        </li>
        <li>
          <Link to="/playlist">
            <span className="material-icons">queue_music</span>List 3
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
