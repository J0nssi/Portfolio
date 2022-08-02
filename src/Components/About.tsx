import React from 'react'
import Fade from 'react-reveal/Fade';
import kuva from "../Assets/terrorist.png";
import "../Styles/About.css";
import cv from "../Assets/CV_Vaija_Joonas_uusi.pdf";

const About = () => {
  return (
     <section id="about" className='about'>
      <h1 className='header_about'>ABOUT</h1>
            <Fade left duration={750} delay={500} distance="30px">
              {/* <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div> */}
              <div className="leftside">
                <p>MORO</p>
              </div>
            </Fade>
            <Fade right duration={750} delay={500} distance="30px">
              <div className="rightside">
                <p>Tähän tulee</p>
                <p>Paljon tekstiä</p>
                <p>Joo joo joo</p>    
                <button><a href={cv} download={"CV_Joonas_Vaija"}>Resume</a></button>  
              </div>
                
              </Fade>
    </section>
  )
}

export default About