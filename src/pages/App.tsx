import React from "react";
import "./App.scss";
import { PlayIcon, PauseIcon } from "../lib/svgs";
import { Part, TypeJapanese } from "../types/part.d";

const App: React.FC<Record<string, never>> = () => {
  const flow: Part[] = [
    {
      side: "self",
      type: "construction",
      duration: 8,
    },
    {
      side: "opponent",
      type: "opposition",
      duration: 8,
    },
    {
      side: "opponent",
      type: "construction",
      duration: 8,
    },
    {
      side: "self",
      type: "opposition",
      duration: 8,
    },
  ];
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
            onClick={() => {
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
          <ul>
            {flow.map((part: Part, idx: number) => {
              const date = new Date(part.duration * 1000 * 60);
              return (
                <li key={idx} className={part.side}>
                  <div className="wrapper">
                    <div className="title">{TypeJapanese[part.type]}</div>
                    <div className="duration">{`${date.getMinutes()}分${date.getSeconds()}秒`}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
