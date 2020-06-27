import React, { useEffect, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { appendScript, removeScript } from "./externalScript.js";

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
            <Link to="/playlist" className="m1">
              Mood 1
            </Link>
            <Link to="/playlist" className="m2">
              Mood 2
            </Link>
            <Link to="/playlist" className="m3">
              Mood 3
            </Link>
            <Link to="/playlist" className="m4">
              Mood 4
            </Link>
            <Link to="/playlist" className="m5">
              Mood 5
            </Link>
          </div>
        </div>
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

            <div className="ta-stat-tracks" style={{ clear: "both" }}>
              <div
                className="stat-image"
                style={{
                  backgroundImage:
                    "url(https://i1.sndcdn.com/artworks-000147165684-3hzdwx-t500x500.jpg)",
                }}
              ></div>
              <div className="card-stat">
                <Link to="/playlist" className="title">
                  Love Awakens
                </Link>
                <Link to="/playlist" className="username">
                  Kanye West
                </Link>
                <Link to="/playlist" className="username">
                  Jesus is King
                </Link>
              </div>
            </div>
            <div className="ta-stat-tracks" style={{ clear: "both" }}>
              <div
                className="stat-image"
                style={{
                  backgroundImage:
                    "url(https://i1.sndcdn.com/artworks-000147165684-3hzdwx-t500x500.jpg)",
                }}
              ></div>
              <div className="card-stat">
                <Link to="/playlist" className="title">
                  Love Awakens
                </Link>
                <Link to="/playlist" className="username">
                  Kanye West
                </Link>
                <Link to="/playlist" className="username">
                  Jesus is King
                </Link>
              </div>
            </div>
            <div className="ta-stat-tracks" style={{ clear: "both" }}>
              <div
                className="stat-image"
                style={{
                  backgroundImage:
                    "url(https://i1.sndcdn.com/artworks-000147165684-3hzdwx-t500x500.jpg)",
                }}
              ></div>
              <div className="card-stat">
                <Link to="/playlist" className="title">
                  Love Awakens
                </Link>
                <Link to="/playlist" className="username">
                  Kanye West
                </Link>
                <Link to="/playlist" className="username">
                  Jesus is King
                </Link>
              </div>
            </div>
            <div className="ta-stat-tracks" style={{ clear: "both" }}>
              <div
                className="stat-image"
                style={{
                  backgroundImage:
                    "url(https://i1.sndcdn.com/artworks-000147165684-3hzdwx-t500x500.jpg)",
                }}
              ></div>
              <div className="card-stat">
                <Link to="/playlist" className="title">
                  Love Awakens
                </Link>
                <Link to="/playlist" className="username">
                  Kanye West
                </Link>
                <Link to="/playlist" className="username">
                  Jesus is King
                </Link>
              </div>
            </div>
            <div className="ta-stat-tracks" style={{ clear: "both" }}>
              <div
                className="stat-image"
                style={{
                  backgroundImage:
                    "url(https://i1.sndcdn.com/artworks-000147165684-3hzdwx-t500x500.jpg)",
                }}
              ></div>
              <div className="card-stat">
                <Link to="/playlist" className="title">
                  Love Awakens
                </Link>
                <Link to="/playlist" className="username">
                  Kanye West
                </Link>
                <Link to="/playlist" className="username">
                  Jesus is King
                </Link>
              </div>
            </div>
          </div>
        </div>

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

        <div className="cards grid-container">
          <div className="card set">
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
              <a
                href="#"
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
              </a>
              <a href="#" className="username">
                Bethu & HPB
              </a>
            </div>
          </div>
          <div className="card set">
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
              <a
                href="#"
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
              </a>
              <a href="#" className="username">
                Bethu & HPB
              </a>
            </div>
          </div>
          <div className="card set">
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
              <a
                href="#"
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
              </a>
              <a href="#" className="username">
                Bethu & HPB
              </a>
            </div>
          </div>
          <div className="card set">
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
              <a
                href="#"
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
              </a>
              <a href="#" className="username">
                Bethu & HPB
              </a>
            </div>
          </div>
          <div className="card set">
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
              <a
                href="#"
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
              </a>
              <a href="#" className="username">
                Bethu & HPB
              </a>
            </div>
          </div>
          <div className="card set">
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
              <a
                href="#"
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
              </a>
              <a href="#" className="username">
                Bethu & HPB
              </a>
            </div>
          </div>
        </div>
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

        <div className="cards grid-container">
          <div className="card set">
            <div
              className="image"
              style={{
                backgroundImage:
                  "url(http://docs.google.com/uc?export=open&id=1vB7a-dNGlHVgQa4touJrSoq9aMKNIRiV)",
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
              }}
            ></div>
            <div className="card-text">
              <a
                href="#"
                className="title play-song"
                data-song='{
      "title": "Pushing Back the dark",
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
              </a>
              <a href="#" className="username">
                Josh Wilson
              </a>
            </div>
          </div>
          <div className="card set">
            <div
              className="image"
              style={{
                backgroundImage:
                  "url(http://docs.google.com/uc?export=open&id=1vB7a-dNGlHVgQa4touJrSoq9aMKNIRiV)",
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
              }}
            ></div>
            <div className="card-text">
              <a
                href="#"
                className="title play-song"
                data-song='{
      "title": "Pushing Back the dark",
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
              </a>
              <a href="#" className="username">
                Kanye North
              </a>
            </div>
          </div>
          <div className="card set">
            <div
              className="image"
              style={{
                backgroundImage:
                  "url(http://docs.google.com/uc?export=open&id=1vB7a-dNGlHVgQa4touJrSoq9aMKNIRiV)",
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
              }}
            ></div>
            <div className="card-text">
              <a
                href="#"
                className="title play-song"
                data-song='{
      "title": "Pushing Back the dark",
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
              </a>
              <a href="#" className="username">
                Josh Wilson
              </a>
            </div>
          </div>
          <div className="card set">
            <div
              className="image"
              style={{
                backgroundImage:
                  "url(http://docs.google.com/uc?export=open&id=1vB7a-dNGlHVgQa4touJrSoq9aMKNIRiV)",
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
              }}
            ></div>
            <div className="card-text">
              <a
                href="#"
                className="title play-song"
                data-song='{
      "title": "Pushing Back the dark",
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
              </a>
              <a href="#" className="username">
                Josh Wilson
              </a>
            </div>
          </div>
          <div className="card set">
            <div
              className="image"
              style={{
                backgroundImage:
                  "url(http://docs.google.com/uc?export=open&id=1vB7a-dNGlHVgQa4touJrSoq9aMKNIRiV)",
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
              }}
            ></div>
            <div className="card-text">
              <a
                href="#"
                className="title play-song"
                data-song='{
      "title": "Pushing Back the dark",
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
              </a>
              <a href="#" className="username">
                Josh Wilson
              </a>
            </div>
          </div>
          <div className="card set">
            <div
              className="image"
              style={{
                backgroundImage:
                  "url(http://docs.google.com/uc?export=open&id=1vB7a-dNGlHVgQa4touJrSoq9aMKNIRiV)",
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
              }}
            ></div>
            <div className="card-text">
              <a
                href="#"
                className="title play-song"
                data-song='{
      "title": "Pushing Back the dark",
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
              </a>
              <a href="#" className="username">
                Josh Wilson
              </a>
            </div>
          </div>
        </div>

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
