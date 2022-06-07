import React from 'react'
import styles from '../Timer/Timer.module.css'
 const Input = (props) => {
  const {setMin}=props
  return (
    <div className={styles.input}>
      <input
    type="number"
    placeholder="Enter Secoonds"
    onChange={(ele) => setMin(Math.floor((ele.target.value)/60))}
  /></div>
  )
}

export default Input;
