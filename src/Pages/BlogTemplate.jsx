import React from 'react'
import "./BlogTemplate.css"



const BlogTemplate = (props) => {
  return (
    <>
    <section className="slide slide-img">
          <img
          className="bg-image"
          src={props.img}
          alt='background'
          />

          <div className="blog-hero-text">
            <h1 className="blog-hero-title">{props.title}</h1>
        <h2 className="blog-hero-subtitle">{props.subtitle}</h2>

        
            
            
          </div>
        </section>

       

    
    </>
  )
}

export default BlogTemplate