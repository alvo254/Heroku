import React from "react";

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
          <a href="#">
            <span className="material-icons">queue_music</span>List 1
          </a>
        </li>
        <li>
          <a href="#">
            <span className="material-icons">queue_music</span>List 2
          </a>
        </li>
        <li>
          <a href="#">
            <span className="material-icons">queue_music</span>List 3
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
