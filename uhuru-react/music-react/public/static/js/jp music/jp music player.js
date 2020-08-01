$(document).ready(function () {
  var cssSelector = {
    jPlayer: "#jquery_jplayer_1",
    cssSelectorAncestor: "#jp_container",
  };
  var playlist = [
    // {
    //   title: "Pushing Bakch the dark",
    //   artist: "The Stark Palace",
    //   mp3:
    //     "http://docs.google.com/uc?export=open&id=1iiz-fSgqp2lkvFuQbwH7pTRSkJsyKTS7",
    //   oga:
    //     "http://docs.google.com/uc?export=open&id=1iiz-fSgqp2lkvFuQbwH7pTRSkJsyKTS7",
    //   poster:
    //     "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png",
    // },
    // {
    //   title: "Only love",
    //   artist: "Lenny Leblanc",
    //   mp3:
    //     "http://docs.google.com/uc?export=open&id=17_TAieViBnI2DWnr6JxiRd5TT9hs-Bd9",
    //   oga:
    //     "http://docs.google.com/uc?export=open&id=17_TAieViBnI2DWnr6JxiRd5TT9hs-Bd9",
    //   poster:
    //     "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png",
    // },
  ]; // Empty playlist
  var options = {
    playlistOptions: {
      autoPlay: false,
      loopOnPrevious: false,
      shuffleOnLoop: true,
      enableRemoveControls: true,
      displayTime: "slow",
      addTime: "fast",
      removeTime: "fast",
      shuffleTime: "slow",
    },
    swfPath: "/js",
    //   supplied: "ogv, m4v, oga, mp3",
    supplied: "mp3, oga",
    smoothPlayBar: true,
    keyEnabled: true,
    audioFullScreen: false, // Allows the audio poster to go full screen via keyboard
    size: {
      width: "75px",
      height: "75px",
    },
    stateClass: {
      playing: "state-playing",
      seeking: "state-seeking",
      muted: "state-muted",
      looped: "state-looped",
      fullScreen: "state-full-screen",
      noVolume: "state-no-volume",
    },
    cssSelector: {
      // videoPlay: ".jp-video-play",
      play: ".jp-play",
      pause: ".jp-pause",
      stop: ".jp-stop",
      seekBar: ".jp-seek-bar",
      playBar: ".jp-play-bar",
      mute: ".jp-mute",
      unmute: ".jp-unmute",
      volumeBar: ".jp-volume-bar",
      volumeBarValue: ".jp-volume-bar-value",
      volumeMax: ".jp-volume-max",
      playbackRateBar: ".jp-playback-rate-bar",
      playbackRateBarValue: ".jp-playback-rate-bar-value",
      currentTime: ".jp-current-time",
      duration: ".jp-duration",
      title: ".jp-title",
      // fullScreen: "#jquery_jplayer_1",
      restoreScreen: ".jp-restore-screen",
      repeat: ".jp-repeat",
      repeatOff: ".jp-repeat-off",
      gui: ".jp-gui",
      noSolution: ".jp-no-solution",
    },
    ready: function () {
      // ! Loading up artist
      var q = $(".jp-title").text();
      var artist = $(".jp-playlist li :contains(" + q + ")")
        .find("a.jp-playlist-current span")
        .text();
      var newstring = artist.replace(/by/, "");
      $(".jp-gui .details .jp-artist").text(newstring);

      // ! Removing the by in playlist
      var playlist_item = $(".jp-playlist li");
      for (var i = 0; i < playlist_item.length; i++) {
        var jp_artist = $(playlist_item[i]).find("a .jp-artist");
        var artist = $(jp_artist).text();
        var newstring = artist.replace(/by/, "");
        $(jp_artist).text(newstring);
      }
    },
    play: function () {
      var q = $(".jp-title").text();
      var artist = $(".jp-playlist li :contains(" + q + ")")
        .find("a.jp-playlist-current span")
        .text();
      var newstring = artist.replace(/by/, "");
      $(".jp-gui .details .jp-artist").text(newstring);
      $("body").addClass("player-active");
    },
    abort: function () {
      $(".jp-title").text("");
      $(".jp-gui .details .jp-artist").text("");
    },
  };
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  $(".jp-shuffle").on("click", function () {
    myPlaylist.shuffle(true, true); // Shuffle the playlist
  });

  $(".jp-shuffle-off").on("click", function () {
    myPlaylist.shuffle(false, true); // Shuffle the playlist
  });

  //!   I had to comment the next and previous actions below since
  //! adding the jp-tag makes them skip twice maybe as result of default
  //!  actions kicking in again

  //   $(".jp-next").on("click", function () {
  //     myPlaylist.next(); // Shuffle the playlist
  //   });
  //   $(".jp-previous").on("click", function () {
  //     myPlaylist.previous(); // Shuffle the playlist
  //   });

  $(".jp-show-playlist").on("click", function () {
    $("#jp_container").addClass("state-playlist");
  });

  $(".jp-hide-playlist").on("click", function () {
    $("#jp_container").removeClass("state-playlist");
  });

  //     $(".play").on("click", function () {
  //       var q = $(".title").text();
  //       var artist = $(".jp-playlist li :contains(" + q + ")")
  //         .find("a.jp-playlist-current span")
  //         .text();
  //       var newstring = artist.replace(/by/, "");
  //       $(".details .artist").text(newstring);
  //     });
  $(document.body).on("click", ".play-song", function (e) {
    e.preventDefault();
    myPlaylist.option("autoPlay", true); // Set option
    var song_id = $(this).attr("data-song");
    var data_file = "http://127.0.0.1:8000/api/song/" + song_id + "/";
    var http_request = new XMLHttpRequest();
    try {
      // Opera 8.0+, Firefox, Chrome, Safari
      http_request = new XMLHttpRequest();
    } catch (e) {
      // Internet Explorer Browsers
      try {
        http_request = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          http_request = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
          // Something went wrong
          alert("Your browser broke!");
          return false;
        }
      }
    }

    http_request.onreadystatechange = function () {
      if (http_request.readyState == 4) {
        // Javascript function JSON.parse to parse JSON data
        var jsonObj = JSON.parse(http_request.responseText);

        var song = {
          title: jsonObj.title,
          artist: jsonObj.artist,
          mp3: jsonObj.url,
          oga: jsonObj.url,
          poster:
            "https://e-cdns-images.dzcdn.net/images/cover/d05345809ef1ead7df7f3ab64b08db4a/500x500.jpg",
        };
        myPlaylist.setPlaylist([song]);
      }
    };

    http_request.open("GET", data_file, true);
    http_request.send();
  });

  $(".play-playlist").on("click", function () {
    e.preventDefault();
    myPlaylist.option("autoPlay", true); // Set option
    var playlist = $(this).attr("data-playlist");
    myPlaylist.setPlaylist(JSON.parse(playlist));
  });

  $(".add-playlist").on("click", function () {
    e.preventDefault();
    myPlaylist.option("autoPlay", true); // Set option
    var ul = $(this).parent();
    var h3 = $(ul).parent();
    var meta = $(h3).parent();
    var play_song = $(meta).find(".play-song");
    var song = $(play_song).attr("data-song");
    myPlaylist.add(JSON.parse(song));
  });

  $(".jp-remove-playlist").on("click", function () {
    myPlaylist.remove();
    $(".jp-title").text("");
    $(".jp-gui .details .jp-artist").text("");
  });

  $(".jp-stop").on("click", function () {
    $("body").removeClass("player-active");
  });

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".song-item .meta h3 i")) {
      $(".song-item .meta h3").removeClass("toggle");
    }

    if (event.target.matches(".jp-playlist-item-remove")) {
      var playlist = $(".jp-playlist ul");
      if (playlist.length == 1) {
        $(".jp-title").text("");
        $(".jp-gui .details .jp-artist").text("");
      }
    }
  };

  $(".meta h3 i").on("click", function (e) {
    $(".song-item .meta h3").removeClass("toggle");
    var h3 = $(this).parent();
    $(h3).addClass("toggle");
  });

  $(".fa-angle-left").on("click", function (e) {
    window.history.back();
  });
});
