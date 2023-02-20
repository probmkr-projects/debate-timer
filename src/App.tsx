import React from "react";
import "./App.scss";

const App: React.FC<Record<string, never>> = () => {
  return (
    <div className="App">
      <div className="timer">
        <div className="time">
          <span id="min" className="time-num min">5</span>
          <span className="sep">:</span>
          <span id="sec" className="time-num sec">05</span>
          <span className="sep">:</span>
          <span id="msec" className="time-num msec">05</span>
        </div>
        <div className="buttons">
          <div className="start-pause"></div>
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
