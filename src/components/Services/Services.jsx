import React from 'react';
import "./Services.css";
import { FaPaintBrush, FaPencilAlt } from 'react-icons/fa';
import { BsCodeSquare } from 'react-icons/bs';

const Services = () => {
  return (
    <section id='services'>
      <div className="section_wrapper services_wrapper">
        <div className="service_header center">
          <h2 className='primary_title'>Services</h2>
          <p className="text_muted description">
            I transform your ideas, and consequently your desires, into a distinctive web project that both inspires you and your customers.
          </p>
        </div>
        <div className="services_group">
          <article className='service'>
            <div className="service_top">
              <div className="icon_container">
                <FaPaintBrush className="icon" />
              </div>
              <h3 className="title">
                UI/UX Design
              </h3>
            </div>
            <div className="service_middle">
              <p className='text_muted description'>
                Expert in UI/UX design using Figma to create intuitive, visually stunning interfaces that enhance user engagement and satisfaction.
              </p>
            </div>
            <div className="service_bottom">
              <button className='btn btn-primary'>Read more</button>
            </div>
          </article>
          <article className='service' style={{ "--color-primary": "var(--color-success)" }}>
            <div className="service_top">
              <div className="icon_container">
                <BsCodeSquare className="icon" />
              </div>
              <h3 className="title">
                Web Development
              </h3>
            </div>
            <div className="service_middle">
              <p className='text_muted description'>
                Passionate web developer skilled in creating responsive, user-friendly websites with modern technologies like HTML, CSS, JavaScript, and frameworks.
              </p>
            </div>
            <div className="service_bottom">
              <button className='btn btn-primary' >Read more</button>
            </div>
          </article>
          <article className='service' style={{ "--color-primary": "blueviolet" }}>
            <div className="service_top">
              <div className="icon_container">
                <FaPencilAlt className="icon" />
              </div>
              <h3 className="title">
                Logo Design
              </h3>
            </div>
            <div className="service_middle">
              <p className='text_muted description'>
                Specialized in logo design, creating unique and memorable logos that effectively represent brands and resonate with target audiences.
              </p>
            </div>
            <div className="service_bottom">
              <button className='btn btn-primary'>Read more</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;