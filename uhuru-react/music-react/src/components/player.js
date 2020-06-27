import React from "react";

function Player() {
  return (
    <div
      id="jp_container"
      class="jp-video jp-video-270p"
      role="application"
      aria-label="media player"
    >
      <div class="jp-gui">
        <div class="interface">
          <div class="left">
            <div id="jquery_jplayer_1" class="fas jp-jplayer"></div>
            <div class="details">
              <div>
                <i class="fas fa-compact-disc"></i>
                <span class="jp-title" aria-label="title">
                  &nbsp;
                </span>
              </div>

              <div>
                <i class="fas fa-microphone-alt"></i>
                <span class="jp-artist">&nbsp;</span>
              </div>
            </div>
          </div>
          <div class="middle">
            <div class="jp-progress">
              <div class="jp-seek-bar">
                <div class="jp-play-bar"></div>
              </div>
              <div class="jp-time">
                <div class="jp-current-time" role="timer" aria-label="time">
                  &nbsp;
                </div>
                <div class="jp-duration" role="timer" aria-label="duration">
                  &nbsp;
                </div>
              </div>
            </div>
            <div class="controls-holder">
              <div class="controls">
                <div class="shuffle-option">
                  <button class="jp-shuffle toggle" role="button" tabindex="0">
                    <i class="fas fa-random"></i>
                  </button>
                  <button
                    class="jp-shuffle-off toggle"
                    role="button"
                    tabindex="0"
                  >
                    <i class="fas fa-random"></i>
                  </button>
                </div>
                <button class="jp-previous change" role="button" tabindex="0">
                  <i class="fas fa-step-backward"></i>
                </button>
                <div class="play-options">
                  <button class="jp-play main" role="button" tabindex="0">
                    <i class="fas fa-play"></i>
                  </button>
                  <button class="jp-pause main" role="button" tabindex="0">
                    <i class="fas fa-pause"></i>
                  </button>
                </div>
                <button class="jp-next change" role="button" tabindex="0">
                  <i class="fas fa-step-forward"></i>
                </button>
                <button class="jp-stop change" role="button" tabindex="0">
                  <i class="fas fa-stop"></i>
                </button>
                <div class="repeat-options">
                  <button class="jp-repeat toggle" role="button" tabindex="0">
                    <i class="fas fa-redo-alt"></i>
                  </button>
                  <button
                    class="jp-repeat-off toggle"
                    role="button"
                    tabindex="0"
                  >
                    <i class="fas fa-redo-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="playlist-options">
              <button class="jp-remove-playlist" role="button" tabindex="0">
                <i class="fas fa-trash-alt"></i>
              </button>
              <button class="jp-show-playlist" role="button" tabindex="0">
                <i class="fas fa-list"></i>
              </button>
              <button class="jp-hide-playlist" role="button" tabindex="0">
                <i class="fas fa-times"></i>
              </button>
            </div>
            <div class="volume-controls">
              <div class="extremes">
                <div>
                  <button class="jp-mute" role="button" tabindex="0">
                    <i class="fas fa-volume-mute"></i>
                  </button>
                  <button class="jp-unmute" role="button" tabindex="0">
                    <i class="fas fa-volume-down"></i>
                  </button>
                </div>
                <button class="jp-volume-max" role="button" tabindex="0">
                  <i class="fas fa-volume-up"></i>
                </button>
              </div>
              <div class="jp-volume-bar">
                <div class="jp-volume-bar-value"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="jp-playlist">
          <ul>
            <li>&nbsp;</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Player;
