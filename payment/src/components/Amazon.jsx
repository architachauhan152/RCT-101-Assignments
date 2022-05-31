import React from 'react'
import "./amazon.css"
import {FaArrowRight} from "react-icons/fa"

const Amazon = ({prop}) => {
    console.log(prop);
    const color=prop.color;
  return (
    <div  style={{backgroundColor:color}} className="amazon">
        <div className='date-logo'>
            <div>{prop.date}</div> 
            <div className='logo'><img src={prop.logo} alt="" /></div>
        </div>
        <div className='boxone'>
            <div className='case'>{prop.case}</div>
            <div className='gift'>{prop.heading}</div>
            <div className='gift'>{prop.subheading}</div>
        </div>
        <div className='boxtwo'>
            <div className='device'>{prop.device}</div>
            <div className='arrow'><FaArrowRight/></div>
        </div>
    
    </div>
  )
}

export  {Amazon};