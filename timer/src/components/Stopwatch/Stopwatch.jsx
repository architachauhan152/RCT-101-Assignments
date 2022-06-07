import React, { useEffect, useState } from 'react'
import styles from '../Timer/Timer.module.css'
 const Stopwatch = () => {
   const[min,setMin]=useState(0)
   const[sec,setSec]=useState(0)
   const[mil,setMil]=useState(0)
   const[timer,setTimer]=useState(false);
   useEffect(()=>{
     let j=null;
     if(timer){
      j = setInterval(() => {
        if (mil < 100) {
          setMil((Ms) => Ms + 1);
        }
        if (mil === 99) {
          setMil(0);
          if (sec < 59) {
            setSec((pSec) => pSec + 1);
          } else {
            setMin((pMin) => pMin + 1);
            setSec(0);
          }
        }
      }, 1);
    } else {
      clearInterval(j);
    }

    return () => {
      clearInterval(j);
    };
  }, [timer, sec, mil]);
  return (
    <div>

      <div className={styles.time}>
        <span>{min<10 ? `0${min}`:min}</span>m:
        <span>{sec<10 ?`0${sec}`:sec}</span>s:
        <span>{mil<10 ? `0${mil}`:mil}</span>
      </div>
      <div className={styles.btn}>
        {timer ? (<button onClick={() => setTimer(false)}>
          stop
        </button>) : (
          <button onClick={() => {
            setTimer(true);
            
          }}>
            Start
          </button>
        )}

        <button onClick={()=>{
          setMin(0);
          setSec(0);
          setMil(0)
          setTimer(false);
        }}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Stopwatch;
