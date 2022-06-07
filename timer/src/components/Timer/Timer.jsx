import React, { useEffect, useState } from 'react'
import styles from '../Timer/Timer.module.css'
import Input from './Input';
const Timer = () => {
  const [min, setMin] = useState(60);
  const [sec, setSec] = useState(0);
  const [timer, setTimer] = useState(false);
  const [input, setInput] = useState(false);


  useEffect(()=>{
    let i = null;
    if (timer) {
      i = setInterval(() => {
        if (sec > 0) {
          setSec((pSec) => pSec - 1);
        }
        if (sec === 0) {
          if (min === 0) {
            clearInterval(i);
          } else {
            setMin((pMin) => pMin - 1);
            setSec(59);
          }
        }
      }, 100);
    } else {
      clearInterval(i);
    }

    return () => {
      clearInterval(i);
    };
  })
  return (


    <div>
      {input ? (<Input setMin={setMin} />
      ) : (
        <div className={styles.time}
          onClick={() => {
            setInput(true);
            setTimer(false);
            setSec(0);
          }}>

          <span>{min}</span>m:
          <span>{sec < 10 ? `0${sec}` : sec}</span>s
        </div>
      )}
      <div className={styles.btn}>
        {timer ? (<button onClick={() => setTimer(false)}>
          stop
        </button>) : (
          <button onClick={() => {
            setTimer(true);
            setInput(false)
          }}>
            Start
          </button>
        )}

        <button onClick={()=>{
          setMin(5);
          setSec(0);
          setTimer(false);
        }}>
          Reset
        </button>
      </div>



    </div>
  )
}

export default Timer;
