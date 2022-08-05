import React from 'react'
import "../Styles/Skills.css";
import head from "../Assets/head2.png"
import legs from "../Assets/legs2.png"
import torso from "../Assets/torso3.png"
import bg2 from "../Assets/bg2.jpg"
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

const Skills = () => {

  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };

  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };

  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };




  return (
    <section className='skills' id="skills">
      <h1 className='header_skills'>SKILLS</h1>
      <div className='fullbody'>
        <img src={head} alt="" className='head' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
        <img src={torso} alt="" className='torso' onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2} />
        <img src={legs} alt="" className='legs' onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3} />
      </div>

      <Fade left cascade duration={500} delay={250} distance="30px">
        <div className='leftside' >
          <p>"Coding is like tapping heads in CS:GO. Not easy but yet so rewarding."</p>
          <br />
          <br />
          <br />
          <p className='text2'>Select where would you tap to show <span className='stack'>stack skills.</span></p>
        </div>
      </Fade>



      {isHovering && (
        <Fade right duration={500} delay={250} distance="30px">
          <div className='rightside'>
          <h2 className='header2'>Front End</h2>
          <div class="container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='icon' />
            <p>JavaScript</p>
            </div>
            <div class="container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className='icon'/>
            <p>React</p>
            </div>

            <div class="container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg" className='icon'/>
            <p>Material UI</p>
            </div>

            <div class="container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className='icon'/>
            <p>CSS3</p>
            </div>

            <div class="container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className='icon' />
            <p>TypeScript</p>
            </div>

            <div class="container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className='icon' />
            <p>HTML5</p>
            </div>
            

          </div>
        </Fade>
      )}
      {isHovering2 && (
        <Fade right duration={500} delay={250} distance="30px">
          <div className='rightside'>
          <h2 className='header2'>Tools</h2>
          <div class="container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className='icon'/>
            <p>GitHub</p>
            </div>
            <div class="container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" className='icon'/>
            <p>Photoshop</p>
            </div>
            <div class="container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className='icon' />
            <p>Visual Studio Code</p>
            </div>
          </div>
        </Fade>
      )}
      {isHovering3 && (
        <Fade right duration={500} delay={250} distance="30px">
          <div className='rightside'>
            <h2 className='header2'>Back End</h2>
            <div class="container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className='icon'/>
            <p>Node</p>
            </div>
            <div class="container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className='icon'/>
            <p>PostgreSQL</p>
            </div>
            <div class="container">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className='icon'/>
            <p>MongoDB</p>
            </div>
          </div>
        </Fade>
      )}

    </section>
  )
}

export default Skills