import React from 'react'
import "./Faq.css"
import "./Fourcards.css"
import { NavLink } from 'react-router-dom'


const FourCards = (props) => {
  return (
    <>
    <div className='main'>
        <h2 className='question'>{props.question}</h2>
      
        <div className='box'>
          <div className='h'>{props.h1}</div><br />
          <div className='a main-answer2'>{props.a1}</div>
          <NavLink className="read-more" to={props.link1}>Read More</NavLink> 
          <div className='divider'></div>
          <div className='h'>{props.h2}</div><br />
          <div className='a main-answer2'>{props.a2}</div>
          <NavLink className="read-more" to={props.link2}>Read More</NavLink> 
          <div className='divider'></div>
          <div className='h'>{props.h3}</div><br />
          <div className='a main-answer2'>{props.a3}</div>
          <NavLink className="read-more" to={props.link3}>Read More</NavLink> 
          <div className='divider'></div>
          <div className='h'>{props.h4}</div><br />
          <div className='a main-answer2'>{props.a4}</div>
          <NavLink className="read-more" to={props.link4}>Read More</NavLink>        </div> 
        </div>

  

    </>
  )
}

export default FourCards