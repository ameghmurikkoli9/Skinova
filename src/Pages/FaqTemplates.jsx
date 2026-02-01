import React from 'react'
import "./Faq.css"
import "./Fourcards.css"
import "./Faq.css"


const FaqTemplates = (props) => {
  return (
    <>
    <div className='main'>
        <h2 className='question'>{props.question}</h2>
      
        <div className='box'>
          <div className='main-answer'>{props.main}</div>
          <div className='answer-short'>{props.short}</div><br />
          <div className='answer-short'>{props.short2}</div><br />
          <div className='answer-short'>{props.short3}</div>
        </div>
    </div>
    </>
  )
}

export default FaqTemplates