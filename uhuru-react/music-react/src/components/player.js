import React from "react";

function Player() {
  return (
    <div
      id="jp_container"
      className="jp-video jp-video-270p"
      role="application"
      aria-label="media player"
    >
      <div className="jp-gui">
        <div className="interface">
          <div className="left">
            <div id="jquery_jplayer_1" className="fas jp-jplayer"></div>
            <div className="details">
              <div>
                <i className="fas fa-compact-disc"></i>
                <span className="jp-title" aria-label="title">
                  &nbsp;
                </span>
              </div>

              <div>
                <i className="fas fa-microphone-alt"></i>
                <span className="jp-artist">&nbsp;</span>
              </div>
            </div>
          </div>
          <div className="middle">
            <div className="jp-progress">
              <div className="jp-seek-bar">
                <div className="jp-play-bar"></div>
              </div>
              <div className="jp-time">
                <div className="jp-current-time" role="timer" aria-label="time">
                  &nbsp;
                </div>
                <div className="jp-duration" role="timer" aria-label="duration">
                  &nbsp;
                </div>
              </div>
            </div>
            <div className="controls-holder">
              <div className="controls">
                <div className="shuffle-option">
                  <button
                    className="jp-shuffle toggle"
                    role="button"
                    tabIndex="0"
                  >
                    <i className="fas fa-random"></i>
                  </button>
                  <button
                    className="jp-shuffle-off toggle"
                    role="button"
                    tabIndex="0"
                  >
                    <i className="fas fa-random"></i>
                  </button>
                </div>
                <button
                  className="jp-previous change"
                  role="button"
                  tabIndex="0"
                >
                  <i className="fas fa-step-backward"></i>
                </button>
                <div className="play-options">
                  <button className="jp-play main" role="button" tabIndex="0">
                    <i className="fas fa-play"></i>
                  </button>
                  <button className="jp-pause main" role="button" tabIndex="0">
                    <i className="fas fa-pause"></i>
                  </button>
                </div>
                <button className="jp-next change" role="button" tabIndex="0">
                  <i className="fas fa-step-forward"></i>
                </button>
                <button className="jp-stop change" role="button" tabIndex="0">
                  <i className="fas fa-stop"></i>
                </button>
                <div className="repeat-options">
                  <button
                    className="jp-repeat toggle"
                    role="button"
                    tabIndex="0"
                  >
                    <i className="fas fa-redo-alt"></i>
                  </button>
                  <button
                    className="jp-repeat-off toggle"
                    role="button"
                    tabIndex="0"
                  >
                    <i className="fas fa-redo-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="playlist-options">
              <button className="jp-remove-playlist" role="button" tabIndex="0">
                <i className="fas fa-trash-alt"></i>
              </button>
              <button className="jp-show-playlist" role="button" tabIndex="0">
                <i className="fas fa-list"></i>
              </button>
              <button className="jp-hide-playlist" role="button" tabIndex="0">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="volume-controls">
              <div className="extremes">
                <div>
                  <button className="jp-mute" role="button" tabIndex="0">
                    <i className="fas fa-volume-mute"></i>
                  </button>
                  <button className="jp-unmute" role="button" tabIndex="0">
                    <i className="fas fa-volume-down"></i>
                  </button>
                </div>
                <button className="jp-volume-max" role="button" tabIndex="0">
                  <i className="fas fa-volume-up"></i>
                </button>
              </div>
              <div className="jp-volume-bar">
                <div className="jp-volume-bar-value"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="jp-playlist">
          <ul>
            <li>&nbsp;</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Player;
