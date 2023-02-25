import React from "react";
import styles from "../styles/App.module.scss";
import { PlayIcon, PauseIcon } from "../lib/svgs";
import { Part, TypeJapanese } from "../types/part";
import Layout from "@/lib/layout";

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
    <Layout>
      <div className={styles.App}>
        <div className={styles.timer}>
          <div className={styles.time}>
            <div
              className={styles.timeWrap}
              onClick={(
                event: React.MouseEvent<HTMLDivElement, MouseEvent>
              ) => {
                const range = document.createRange();
                range.selectNode(event.currentTarget);
                window.getSelection()?.addRange(range);
              }}
            >
              <span id="min" className={`${styles.timeNum} ${styles.min}`}>
                5
              </span>
              <span className={styles.sep}>:</span>
              <span id="sec" className={`${styles.timeNum} ${styles.sec}`}>
                05
              </span>
              <span className={styles.sep}>:</span>
              <span id="msec" className={`${styles.timeNum} ${styles.msec}`}>
                05
              </span>
            </div>
          </div>
          <div className={styles.buttons}>
            <div
              className="start-pause"
              onClick={() => {
                const play = document.querySelector(
                  `.start-pause .bi-play-circle`
                );
                const pause = document.querySelector(
                  `.start-pause .bi-pause-circle`
                );
                play?.classList.toggle(styles.hide);
                pause?.classList.toggle(styles.hide);
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
                const date = new Date(part.duration * 1000 * 60);
                return (
                  <li key={idx} className={styles[part.side]}>
                    <div className={styles.wrapper}>
                      <div className={styles.title}>
                        {TypeJapanese[part.type]}
                      </div>
                      <div
                        className={styles.duration}
                      >{`${date.getMinutes()}分${date.getSeconds()}秒`}</div>
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
