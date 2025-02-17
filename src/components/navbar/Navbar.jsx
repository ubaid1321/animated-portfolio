import React from 'react';
import './Navbar.css';
import { SiWebmoney } from 'react-icons/si';
import { menu } from "../../data";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { FaBarsStaggered} from "react-icons/fa6";
import {FaTimes } from "react-icons/fa"
import { useState } from 'react';

const Navbar = () => {
  const [showSidebar,setShowSidebar]=useState("false")
  return (
    <nav className='navbar_container'>
      {
       showSidebar ?(
        <div className='overlay' onClick={()=>setShowSidebar(!showSidebar)}></div>
       ):""
    }
      <div className='logo_container'>
        <SiWebmoney />
      </div>
      <div className={`tab_group ${showSidebar ?"show":""}`}>
        <span className="icon_container close_btn" onClick={()=>setShowSidebar(!showSidebar)}>
          <FaTimes  />
        </span>

        {
          menu.map((list, index) => 
            (
              <Link 
              veClass='active'
                className='tab_item name'
                to={list.name.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >{list.name}</Link>
            )
          )
        }
      </div>
      <div className="nav_buttons_group">
        <button className='btn btn-primary'>
          Hire Me <FaArrowUpRightFromSquare />
        </button>
        <FaBarsStaggered className="menu" onClick={()=>setShowSidebar(!showSidebar)} />
      </div>
    </nav>
  );
}

export default Navbar;