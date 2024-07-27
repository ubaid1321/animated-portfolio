import React from 'react'
import "./Header.css"
import { profile1 } from '../../images'
import Facts from "../../components/Header/Facts/Facts"

const Header = () => {
  return (
  <header id='header' >
    <div className="stroke_text intro_text">Hello</div>
      <div className="section_wrapper header_container">
        <div className="column intro_container blur_effect">
        <div className="header_info">
          <div className="header_info_top">Hello There! I'm <span className='color_primary'>Mohamed Ubaid Mir</span></div>
          <div className="header_info_middle"><h1 className="primary_title header_title color_primary">I'M A FRONTEND DEVELOPER</h1><p className='text_muted header_description'>Transforming complex ideas into stunning web experiences with clean code and creative design.</p></div>
          <Facts/>
          <div className="header_info_bottom "><button className='btn'>Download CV</button><a href="mailto:ubaidmir623@gmail.com" className='btn'>Email me</a></div>
           
        </div>
       </div>
       <div className='column profile_wrapper'>
        <div className="profile_photo_container">
          <img src={profile1} className='profile_photo' alt="" />
        </div>
       </div>
       </div>
  </header>
  )
}

export default Header
