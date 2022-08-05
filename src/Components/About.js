import React from 'react'
import Fade from 'react-reveal/Fade';
import kuva from "../Assets/terrorist.png";
import "../Styles/About.css";
import cv from "../Assets/CV_Vaija_Joonas_uusi.pdf";
import me from "../Assets/me.png";

const About = () => {
  return (
     <section id="about" className='about'>
      <h1 className='header_about'>ABOUT</h1>
            <Fade left duration={750} delay={500} distance="30px">
              <div className="leftside_about">
                <img className='me' src={me}></img>
              </div>
            </Fade>
            <Fade right duration={750} delay={500} distance="30px">
              <div className="rightside_about">
                <p>It all started when I applied to Savonia UAS in 2019 and got into my studies as IT Engineer. Three years later I'm near the finish line with my studies.  
                </p>
                <br/>
                <p>I learned a lot but there is still a lot more to learn. That is why I'm always trying to improve and learn new things and technologies to keep me on track with latest trends.</p>
                <br/>
                <p>When I'm not coding, I'm challenging myself compiting in disc golf and CS:GO, going to the gym, hanging out with my friends or just relaxing at home.</p> 
                <button><a href={cv} download={"CV_Joonas_Vaija"}>Resume</a></button>  
              </div>
                
              </Fade>
    </section>
  )
}

export default About