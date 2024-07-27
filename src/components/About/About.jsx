import React from 'react'
import './About.css'
import { profile2 } from '../../images'

const About = () => {
  return (
    <section id='about'>
      <div className="section_wrapper about_container">
        <div className="me_container blur_effect">
          <div className="photo_container">
             <img src={profile2} alt="" />
          </div>
        </div>
        <div className="section_header">
          <h2 className='primary_title'>About me</h2>
          <h1 className='title'>I am <span className='color_primary'>Mohamed Ubaid Mir</span></h1>
          <p className="text_muted description">
          I’m a frontend developer with over 4 years of experience in crafting dynamic, user-friendly web experiences. My expertise lies in creating responsive and visually compelling interfaces using HTML, CSS, and JavaScript. I am proficient with modern frameworks and libraries such as React, which allows me to build scalable and high-performance web applications.

           My approach is rooted in a strong understanding of design principles and a commitment to delivering seamless user experiences. I thrive in collaborative environments and enjoy working with cross-functional teams to turn complex ideas into intuitive digital solutions.

          Driven by a passion for continuous learning and staying updated with the latest industry trends, I’m dedicated to pushing the boundaries of frontend development and delivering outstanding results on every project.


          </p>
        </div>
      </div>
    </section>
  )
}

export default About
