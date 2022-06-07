import React, { useState } from "react";
import Timer from "./Timer/Timer";
import Stopwatch from "./Stopwatch/Stopwatch";
import styles from "./Landing.module.css";
export const Landing = () => {
  const [active, isActive] = useState(true);
  return (
    <div>
      <div className={styles.all}>
        <div className={styles.header}>
          <button
            className={active ? styles.active : ""}
            onClick={() => isActive(true)}
          >
            Timer
          </button>
          <button
            className={active ? "" : styles.active}
            onClick={() => isActive(false)}
          >
            stopWatch
          </button>
        </div>
        <div className={styles.main}>{active ? <Timer /> : <Stopwatch />}</div>
      </div>
    </div>
  );
};
