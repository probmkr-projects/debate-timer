import React, { useState } from "react";
import styles from "@/styles/Timer.module.scss";
import { PlayIcon, PauseIcon } from "@/lib/svgs";
import { Part, SideJapanese, TypeJapanese } from "@/lib/part";
import Layout from "@/lib/layout";

class TimerControl {
  flow: Part[];
  currentIdx: number;
  isRunning: boolean;
  beginTime: number;
  currentDuration?: number;
  remainMSec: number;
  setRemain: React.Dispatch<React.SetStateAction<number>>;

  constructor(
    flow: Part[],
    setRemain: React.Dispatch<React.SetStateAction<number>>
  ) {
    this.flow = flow;
    this.currentIdx = 0;
    this.beginTime = 0;
    this.isRunning = false;
    this.currentDuration = this.flow[this.currentIdx].duration * 60 * 1000;
    this.remainMSec = this.currentDuration;
    this.setRemain = setRemain;
  }

  handleStartStop = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.isRunning = !this.isRunning;
    if (this.isRunning) {
      if (this.remainMSec <= 0) {
        if (++this.currentIdx >= this.flow.length) {
          console.log("last");
        }
        this.remainMSec = this.flow[this.currentIdx].duration * 60 * 1000;
      }

      this.beginTime = new Date().getTime();
      setTimeout(this.runTimer.bind(this), 10);
    }
  };

  // 残り時間を返す
  getRemain() {
    return this.remainMSec - (new Date().getTime() - this.beginTime);
  }

  runTimer() {
    const remain = this.getRemain.bind(this)();
    if (remain > 0) {
      this.setRemain(remain);
    } else {
      this.isRunning = false;
      this.togglePlayPuase();
    }
    if (this.isRunning) {
      setTimeout(this.runTimer.bind(this), 10);
    } else {
      this.remainMSec = this.getRemain();
    }
  }

  togglePlayPuase() {
    const play = document.querySelector(`.start-pause .bi-play-circle`);
    const pause = document.querySelector(`.start-pause .bi-pause-circle`);
    play?.classList.toggle(styles.hide);
    pause?.classList.toggle(styles.hide);
  }
}

const App: React.FC<Record<string, never>> = () => {
  // const flow: Part[] =
  const [flow, setFlow] = useState([
    {
      side: "affirmative",
      type: "construction",
      duration: 0.05,
    },
    {
      side: "negative",
      type: "prepare",
      duration: 1,
    },
    {
      side: "negative",
      type: "opposition",
      duration: 0.05,
    },
    {
      side: "negative",
      type: "construction",
      duration: 0.05,
    },
    {
      side: "affirmative",
      type: "opposition",
      duration: 0.05,
    },
  ] as Part[]);
  const [remain, setRemain] = useState(flow[0].duration * 60 * 1000);
  const [timerController] = useState(new TimerControl(flow, setRemain));
  return (
    <Layout noSidePadding>
      <div className={styles.App}>
        <div className={styles.timer}>
          <div className={styles.time}>
            <div className={`${styles.timeWrap} ${styles.timeShadowWrap}`}>
              88:88
            </div>
            <div className={styles.timeWrap}>
              <span id="min" className={`${styles.timeNum} ${styles.min}`}>
                {`0${Math.floor((remain + 999) / 1000 / 60).toString()}`.slice(
                  -2
                )}
              </span>
              <span className={styles.sep}>:</span>
              <span id="sec" className={`${styles.timeNum} ${styles.sec}`}>
                {`0${(
                  Math.floor((remain + 999) / 1000) % 60
                ).toString()}`.slice(-2)}
              </span>
            </div>
          </div>
          <div className={styles.buttons}>
            <div
              className="start-pause"
              onClick={(event) => {
                timerController.togglePlayPuase();
                timerController.handleStartStop(event);
              }}
            >
              <PlayIcon />
              <PauseIcon className={styles.hide} />
            </div>
            <div className={styles.next}></div>
          </div>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.flow}>
            <ul>
              {flow.map((part: Part, idx: number) => {
                const second = part.duration * 60;
                return (
                  <li key={idx} className={styles[part.side]}>
                    <div className={styles.wrapper}>
                      <div className={styles.title}>
                        {`${SideJapanese[part.side]}側${
                          TypeJapanese[part.type]
                        }`}
                      </div>
                      <div className={styles.duration}>{`${Math.floor(
                        second / 60
                      )}分${second % 60}秒`}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
