import React from "react";
import "./App.scss";
import { PlayIcon, PauseIcon } from "./lib/svgs";

const App: React.FC<Record<string, never>> = () => {
  return (
    <div className="App">
      <div className="timer">
        <div className="time">
          <div
            className="time-wrap"
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              const range = document.createRange();
              range.selectNode(event.currentTarget);
              window.getSelection()?.addRange(range);
            }}
          >
            <span id="min" className="time-num min">
              5
            </span>
            <span className="sep">:</span>
            <span id="sec" className="time-num sec">
              05
            </span>
            <span className="sep">:</span>
            <span id="msec" className="time-num msec">
              05
            </span>
          </div>
        </div>
        <div className="buttons">
          <div
            className="start-pause"
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              const play = document.querySelector(
                ".start-pause .bi-play-circle"
              );
              const pause = document.querySelector(
                ".start-pause .bi-pause-circle"
              );
              play?.classList.toggle("hide");
              pause?.classList.toggle("hide");
            }}
          >
            <PlayIcon />
            <PauseIcon className="hide" />
          </div>
          <div className="next"></div>
        </div>
      </div>
      <div className="sidebar">
        <div className="flow">
          <ul></ul>
        </div>
      </div>
    </div>
  );
};

export default App;
