import React from "react";

function Aside() {
  return (
    <aside>
      <ul class="links">
        <div class="bread">Music</div>
        <li>
          <a href="#" class="active">
            <span class="material-icons">explore</span>Explore
          </a>
        </li>
        <li>
          <a href="#">
            <span class="material-icons">grade</span>Trending
          </a>
        </li>
        <li>
          <a href="#">
            <ion-icon name="musical-notes"></ion-icon>Stream
          </a>
        </li>
        <li>
          <a href="#">
            <span class="material-icons">library_music</span>Albums
          </a>
        </li>

        <li>
          <a href="#">
            <span class="material-icons">favorite</span>Liked
          </a>
        </li>
      </ul>

      <ul class="links">
        <dpyiv class="bread">My Playlist</dpyiv>
        <li>
          <a href="#">
            <span class="material-icons">queue_music</span>List 1
          </a>
        </li>
        <li>
          <a href="#">
            <span class="material-icons">queue_music</span>List 2
          </a>
        </li>
        <li>
          <a href="#">
            <span class="material-icons">queue_music</span>List 3
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
