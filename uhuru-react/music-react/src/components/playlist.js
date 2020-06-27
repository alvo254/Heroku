import React, { Component } from "react";
import { appendScript, removeScript } from "./externalScript.js";

class Playlist extends Component {
  componentDidMount() {
    appendScript("/static/js/jp music/jp music player.js");
  }

  componentWillUnmount() {
    removeScript("/static/js/jp music/jp music player.js");
  }

  render() {
    return (
      <div
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2016/11/06/05/38/landscape-1802340_960_720.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="music-container">
          <div className="music-header">
            <i className="fa fa-angle-left"></i>
            <div className="title">
              <p>My Music</p>
            </div>
            <i className="fa fa-search"></i>
          </div>
          <div className="music-playlist">
            <div className="music-menu text-center">
              <div className="menu">
                <ul>
                  <li>
                    <a href="#">Songs</a>
                  </li>
                  <li>
                    <a href="#">Albums</a>
                  </li>
                  <li>
                    <a href="#">Artists</a>
                  </li>
                  <li>
                    <a href="#">Genres</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="music-box">
              <div className="music-info">
                <div className="music-img">
                  <img
                    src="https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg"
                    alt=""
                  />
                </div>
                <div className="music-name">
                  <h6
                    className="title play-song"
                    data-song='{
      "title": "All I Need",
      "artist": "Bethu & HPB",
      "mp3":
        "/static/music/7.All I Need.mp3",
      "oga":
        "http://docs.google.com/uc?export=open&id=1iiz-fSgqp2lkvFuQbwH7pTRSkJsyKTS7",
      "poster":
        "https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg"
    }'
                  >
                    All I Need
                  </h6>
                  <br />
                  <p>Bethu & HPB</p>
                </div>
                <i className="fa fa-ellipsis-v"></i>
              </div>
              <hr />
              <div className="music-info">
                <div className="music-img">
                  <img
                    src="https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg"
                    alt=""
                  />
                </div>
                <div className="music-name">
                  <h6
                    className="title play-song"
                    data-song='{
      "title": "We Are Free",
      "artist": "Bethu & HPB",
      "mp3":
        "/static/music/5.We Are Free.mp3",
      "oga":
        "http://docs.google.com/uc?export=open&id=1iiz-fSgqp2lkvFuQbwH7pTRSkJsyKTS7",
      "poster":
        "https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg"
    }'
                  >
                    We Are Free
                  </h6>
                  <br />
                  <p>Bethu & HPB</p>
                </div>
                <i className="fa fa-ellipsis-v"></i>
              </div>
              <hr />
              <div className="music-info">
                <div className="music-img">
                  <img
                    src="https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg"
                    alt=""
                  />
                </div>
                <div className="music-name">
                  <h6
                    className="title play-song"
                    data-song='{
      "title": "Holy Spirit",
      "artist": "Bethu & HPB",
      "mp3":
        "/static/music/4.Holy Spirit Medley.mp3",
      "oga":
        "http://docs.google.com/uc?export=open&id=1iiz-fSgqp2lkvFuQbwH7pTRSkJsyKTS7",
      "poster":
        "https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg"
    }'
                  >
                    Holy Spirit
                  </h6>
                  <br />
                  <p>Bethu & HPB</p>
                </div>
                <i className="fa fa-ellipsis-v"></i>
              </div>
              <hr />
              <div className="music-info">
                <div className="music-img">
                  <img
                    src="https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg"
                    alt=""
                  />
                </div>
                <div className="music-name">
                  <h6
                    className="title play-song"
                    data-song='{
      "title": "Utukufu",
      "artist": "Bethu & HPB",
      "mp3":
        "/static/music/3.Utukufu.mp3",
      "oga":
        "http://docs.google.com/uc?export=open&id=1iiz-fSgqp2lkvFuQbwH7pTRSkJsyKTS7",
      "poster":
        "https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg"
    }'
                  >
                    Utukufu
                  </h6>
                  <br />
                  <p>Bethu & HPB</p>
                </div>
                <i className="fa fa-ellipsis-v"></i>
              </div>
              <hr />
              <div className="music-info">
                <div className="music-img">
                  <img
                    src="https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg"
                    alt=""
                  />
                </div>
                <div className="music-name">
                  <h6
                    className="title play-song"
                    data-song='{
      "title": "Mungu Wetu",
      "artist": "Bethu & HPB",
      "mp3":
        "/static/music/2.Mungu Wetu.mp3",
      "oga":
        "http://docs.google.com/uc?export=open&id=1iiz-fSgqp2lkvFuQbwH7pTRSkJsyKTS7",
      "poster":
        "https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg"
    }'
                  >
                    Mungu Wetu
                  </h6>
                  <br />
                  <p>Bethu & HPB</p>
                </div>
                <i className="fa fa-ellipsis-v"></i>
              </div>
              <hr />
              <div className="music-info">
                <div className="music-img">
                  <img
                    src="https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg"
                    alt=""
                  />
                </div>
                <div className="music-name">
                  <h6
                    className="title play-song"
                    data-song='{
      "title": "Imba",
      "artist": "Bethu & HPB",
      "mp3":
        "/static/music/1.Imba.mp3",
      "oga":
        "http://docs.google.com/uc?export=open&id=1iiz-fSgqp2lkvFuQbwH7pTRSkJsyKTS7",
      "poster":
        "https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg"
    }'
                  >
                    Imba
                  </h6>
                  <br />
                  <p>Bethu & HPB</p>
                </div>
                <i className="fa fa-ellipsis-v"></i>
              </div>
              <hr />
              <div className="music-info">
                <div className="music-img">
                  <img
                    src="http://docs.google.com/uc?export=open&id=1vB7a-dNGlHVgQa4touJrSoq9aMKNIRiV"
                    alt=""
                  />
                </div>
                <div className="music-name">
                  <h6
                    className="title play-song"
                    data-song='{
      "title": "Pushing Bakch the dark",
      "artist": "Josh Wilson",
      "mp3":
        "http://docs.google.com/uc?export=open&id=1iiz-fSgqp2lkvFuQbwH7pTRSkJsyKTS7",
      "oga":
        "http://docs.google.com/uc?export=open&id=1iiz-fSgqp2lkvFuQbwH7pTRSkJsyKTS7",
      "poster":
        "http://docs.google.com/uc?export=open&id=1vB7a-dNGlHVgQa4touJrSoq9aMKNIRiV"
    }'
                  >
                    Pushing Back the Dark
                  </h6>
                  <br />
                  <p>Josh Wilson</p>
                </div>
                <i className="fa fa-ellipsis-v"></i>
              </div>
              <hr />
              <div className="music-info">
                <div className="music-img">
                  <img
                    src="https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg"
                    alt=""
                  />
                </div>
                <div className="music-name">
                  <h6>Single Song Title</h6>
                  <br />
                  <p>Single Name & Music Director</p>
                </div>
                <i className="fa fa-ellipsis-v"></i>
              </div>
              <hr />
              <div className="music-info">
                <div className="music-img">
                  <img
                    src="https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg"
                    alt=""
                  />
                </div>
                <div className="music-name">
                  <h6>Single Song Title</h6>
                  <br />
                  <p>Single Name & Music Director</p>
                </div>
                <i className="fa fa-ellipsis-v"></i>
              </div>
              <hr />
              <div className="music-info">
                <div className="music-img">
                  <img
                    src="https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg"
                    alt=""
                  />
                </div>
                <div className="music-name">
                  <h6>Single Song Title</h6>
                  <br />
                  <p>Single Name & Music Director</p>
                </div>
                <i className="fa fa-ellipsis-v"></i>
              </div>
              <hr />
              <div className="music-info">
                <div className="music-img">
                  <img
                    src="https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg"
                    alt=""
                  />
                </div>
                <div className="music-name">
                  <h6>Single Song Title</h6>
                  <br />
                  <p>Single Name & Music Director</p>
                </div>
                <i className="fa fa-ellipsis-v"></i>
              </div>
              <hr />
              <div className="music-info">
                <div className="music-img">
                  <img
                    src="https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg"
                    alt=""
                  />
                </div>
                <div className="music-name">
                  <h6>Single Song Title</h6>
                  <br />
                  <p>Single Name & Music Director</p>
                </div>
                <i className="fa fa-ellipsis-v"></i>
              </div>
              <hr />
              <div className="music-info">
                <div className="music-img">
                  <img
                    src="https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg"
                    alt=""
                  />
                </div>
                <div className="music-name">
                  <h6>Single Song Title</h6>
                  <br />
                  <p>Single Name & Music Director</p>
                </div>
                <i className="fa fa-ellipsis-v"></i>
              </div>
              <hr />
              <div className="music-info">
                <div className="music-img">
                  <img
                    src="https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg"
                    alt=""
                  />
                </div>
                <div className="music-name">
                  <h6>Single Song Title</h6>
                  <br />
                  <p>Single Name & Music Director</p>
                </div>
                <i className="fa fa-ellipsis-v"></i>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Playlist;
