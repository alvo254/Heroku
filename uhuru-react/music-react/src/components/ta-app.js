import React from "react";

function TaApp() {
  return (
    <div class="ta-app">
      <div class="top1 column col-6" style="269px;">
        <div class="mood">
          <h1 class="title">Mood for today</h1>
          <section class="right">
            <a href="" class="show">
              Show all
            </a>
            <button>
              <span class="material-icons">keyboard_arrow_left</span>
            </button>
            <button>
              <span class="material-icons">keyboard_arrow_right</span>
            </button>
          </section>
        </div>
        <div class="ta-genre-block">
          <a href="" contenteditable="m1">
            Mood 1
          </a>
          <a href="" class="m2">
            Mood 2
          </a>
          <a href="" class="m3">
            Mood 3
          </a>
          <a href="" class="m4">
            Mood 4
          </a>
          <a href="" class="m5">
            Mood 5
          </a>
        </div>
      </div>
      <div class="top column col-6">
        <h1 class="title">Weekly Chart</h1>
        <section class="right">
          <a href="" class="show">
            Show all
          </a>
          <button>
            <span class="material-icons">keyboard_arrow_left</span>
          </button>
          <button>
            <span class="material-icons">keyboard_arrow_right</span>
          </button>
        </section>

        <div class="ta-stat-board flex-column ">
          <ul>
            <li>#</li>
            <li id="stat1">Title</li>
            <li class="stat">Artist</li>
            <li class="stat">Album</li>
          </ul>

          <div class="ta-stat-tracks" style="clear:both;">
            <div
              class="stat-image"
              style="background-image: url(https://i1.sndcdn.com/artworks-000147165684-3hzdwx-t500x500.jpg);"
            ></div>
            <div class="card-stat">
              <a href="" class="title">
                Love Awakens
              </a>
              <a href="" class="username">
                Kanye West
              </a>
              <a href="" class="username">
                Jesus is King
              </a>
            </div>
          </div>
          <div class="ta-stat-tracks" style="clear:both;">
            <div
              class="stat-image"
              style="background-image: url(https://i1.sndcdn.com/artworks-000147165684-3hzdwx-t500x500.jpg);"
            ></div>
            <div class="card-stat">
              <a href="" class="title">
                Love Awakens
              </a>
              <a href="" class="username">
                Kanye West
              </a>
              <a href="" class="username">
                Jesus is King
              </a>
            </div>
          </div>
          <div class="ta-stat-tracks" style="clear:both;">
            <div
              class="stat-image"
              style="background-image: url(https://i1.sndcdn.com/artworks-000147165684-3hzdwx-t500x500.jpg);"
            ></div>
            <div class="card-stat">
              <a href="" class="title">
                Love Awakens
              </a>
              <a href="" class="username">
                Kanye West
              </a>
              <a href="" class="username">
                Jesus is King
              </a>
            </div>
          </div>
          <div class="ta-stat-tracks" style="clear:both;">
            <div
              class="stat-image"
              style="background-image: url(https://i1.sndcdn.com/artworks-000147165684-3hzdwx-t500x500.jpg);"
            ></div>
            <div class="card-stat">
              <a href="" class="title">
                Love Awakens
              </a>
              <a href="" class="username">
                Kanye West
              </a>
              <a href="" class="username">
                Jesus is King
              </a>
            </div>
          </div>
          <div class="ta-stat-tracks" style="clear:both;">
            <div
              class="stat-image"
              style="background-image: url(https://i1.sndcdn.com/artworks-000147165684-3hzdwx-t500x500.jpg); "
            ></div>
            <div class="card-stat">
              <a href="" class="title">
                Love Awakens
              </a>
              <a href="" class="username">
                Kanye West
              </a>
              <a href="" class="username">
                Jesus is King
              </a>
            </div>
          </div>
        </div>
      </div>

      <h1 class="recent">Recently Added</h1>
      <section class="right">
        <a href="" class="show">
          Show all
        </a>
        <button>
          <span class="material-icons">keyboard_arrow_left</span>
        </button>
        <button>
          <span class="material-icons">keyboard_arrow_right</span>
        </button>
      </section>

      <div class="cards grid-container">
        <div class="card set">
          <div
            class="image"
            style="
      background-image: url(https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg);
      background-size: cover;
      width: 100%;
      height: 100%;
    "
          ></div>
          <div class="card-text">
            <a
              href="#"
              class="title play-song"
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
            <a href="#" class="username">
              Bethu & HPB
            </a>
          </div>
        </div>
        <div class="card set">
          <div
            class="image"
            style="
      background-image: url(https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg);
      background-size: cover;
      width: 100%;
      height: 100%;
    "
          ></div>
          <div class="card-text">
            <a
              href="#"
              class="title play-song"
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
            <a href="#" class="username">
              Bethu & HPB
            </a>
          </div>
        </div>
        <div class="card set">
          <div
            class="image"
            style="
      background-image: url(https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg);
      background-size: cover;
      width: 100%;
      height: 100%;
    "
          ></div>
          <div class="card-text">
            <a
              href="#"
              class="title play-song"
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
            <a href="#" class="username">
              Bethu & HPB
            </a>
          </div>
        </div>
        <div class="card set">
          <div
            class="image"
            style="
      background-image: url(https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg);
      background-size: cover;
      width: 100%;
      height: 100%;
    "
          ></div>
          <div class="card-text">
            <a
              href="#"
              class="title play-song"
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
            <a href="#" class="username">
              Bethu & HPB
            </a>
          </div>
        </div>
        <div class="card set">
          <div
            class="image"
            style="
      background-image: url(https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg);
      background-size: cover;
      width: 100%;
      height: 100%;
    "
          ></div>
          <div class="card-text">
            <a
              href="#"
              class="title play-song"
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
            <a href="#" class="username">
              Bethu & HPB
            </a>
          </div>
        </div>
        <div class="card set">
          <div
            class="image"
            style="
      background-image: url(https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg);
      background-size: cover;
      width: 100%;
      height: 100%;
    "
          ></div>
          <div class="card-text">
            <a
              href="#"
              class="title play-song"
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
            <a href="#" class="username">
              Bethu & HPB
            </a>
          </div>
        </div>
      </div>
      <h1 class="title">Trending</h1>
      <section class="right">
        <a href="" class="show">
          Show all
        </a>
        <button>
          <span class="material-icons">keyboard_arrow_left</span>
        </button>
        <button>
          <span class="material-icons">keyboard_arrow_right</span>
        </button>
      </section>

      <div class="cards grid-container">
        <div class="card set">
          <div
            class="image"
            style="
      background-image: url(http://docs.google.com/uc?export=open&id=1vB7a-dNGlHVgQa4touJrSoq9aMKNIRiV);
      background-size: cover;
      width: 100%;
      height: 100%;
    "
          ></div>
          <div class="card-text">
            <a
              href="#"
              class="title play-song"
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
            </a>
            <a href="#" class="username">
              Josh Wilson
            </a>
          </div>
        </div>
        <div class="card set">
          <div
            class="image"
            style="
      background-image: url(http://docs.google.com/uc?export=open&id=1vB7a-dNGlHVgQa4touJrSoq9aMKNIRiV);
      background-size: cover;
      width: 100%;
      height: 100%;
    "
          ></div>
          <div class="card-text">
            <a
              href="#"
              class="title play-song"
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
            </a>
            <a href="#" class="username">
              Kanye North
            </a>
          </div>
        </div>
        <div class="card set">
          <div
            class="image"
            style="
      background-image: url(http://docs.google.com/uc?export=open&id=1vB7a-dNGlHVgQa4touJrSoq9aMKNIRiV);
      background-size: cover;
      width: 100%;
      height: 100%;
    "
          ></div>
          <div class="card-text">
            <a
              href="#"
              class="title play-song"
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
            </a>
            <a href="#" class="username">
              Josh Wilson
            </a>
          </div>
        </div>
        <div class="card set">
          <div
            class="image"
            style="
      background-image: url(http://docs.google.com/uc?export=open&id=1vB7a-dNGlHVgQa4touJrSoq9aMKNIRiV);
      background-size: cover;
      width: 100%;
      height: 100%;
    "
          ></div>
          <div class="card-text">
            <a
              href="#"
              class="title play-song"
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
            </a>
            <a href="#" class="username">
              Josh Wilson
            </a>
          </div>
        </div>
        <div class="card set">
          <div
            class="image"
            style="
      background-image: url(http://docs.google.com/uc?export=open&id=1vB7a-dNGlHVgQa4touJrSoq9aMKNIRiV);
      background-size: cover;
      width: 100%;
      height: 100%;
    "
          ></div>
          <div class="card-text">
            <a
              href="#"
              class="title play-song"
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
            </a>
            <a href="#" class="username">
              Josh Wilson
            </a>
          </div>
        </div>
        <div class="card set">
          <div
            class="image"
            style="
      background-image: url(http://docs.google.com/uc?export=open&id=1vB7a-dNGlHVgQa4touJrSoq9aMKNIRiV);
      background-size: cover;
      width: 100%;
      height: 100%;
    "
          ></div>
          <div class="card-text">
            <a
              href="#"
              class="title play-song"
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
            </a>
            <a href="#" class="username">
              Josh Wilson
            </a>
          </div>
        </div>
      </div>

      <span
        style='background-image: url("https://i1.sndcdn.com/artworks-000147165684-3hzdwx-t500x500.jpg"); width: 100%; height: 100%; opacity: 1;'
        class="sc-artwork sc-artwork-placeholder-10  image__full g-opacity-transition"
        aria-label="Sunday music and hot coffee.."
        aria-role="img"
      ></span>
    </div>
  );
}

export default TaApp;
