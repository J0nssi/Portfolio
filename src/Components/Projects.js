import React from 'react'
import "../Styles/Projects.css";
import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';


const Projects = () => {
  return (
    <section className='projects' id="projects">
        <div>
          <h1 className='header_projects'>PROJECTS</h1>
        </div>
        <Fade bottom cascade duration={500} delay={250} distance="30px">

        <div className='allcards'>
        <Tilt scale={1.1} tiltMaxAngleX={15}
    tiltMaxAngleY={20} transitionSpeed={2500} glareEnable={true} glareMaxOpacity={0.6} glareColor="lightblue" glarePosition="all" glareBorderRadius='15px'>
          <div className='card'>
            <div className='card-image1'></div>
            <div className='card-text'>
              <h2>Vilkku-fillarit -datapage</h2>
              <p>Responsive webpage to show different type of data about Vilkku-fillarit users and bikes' usage.</p>
              <br/>
              <span className='co-op'>Collaborators: Kuopio city, Vilkku-fillarit, Savonia</span>
            
            </div>
            <div className='card-footer'>
              <div className='git'><a href='https://www.github.com' target="_noblank">Source code</a></div>
              <div className='live'><a href='' target="_noblank">Live site (coming soon)</a></div>
            </div>
          </div>
        </Tilt>

        <Tilt scale={1.1} tiltMaxAngleX={15}
    tiltMaxAngleY={20} transitionSpeed={2500} glareEnable={true} glareMaxOpacity={0.6} glareColor="lightblue" glarePosition="all" glareBorderRadius='15px'>
          <div className='card'>
            <div className='card-image2'></div>
            <div className='card-text'>
              <h2>OSRS Utility App</h2>
              <p>Mobile app for OSRS players to check item values, value changes over time and player stats.</p>
              <br/>
              <span className='co-op'>Group members: Lassi Köykkä, Johannes Tikkanen</span>
            </div>
            <div className='card-footer1'>
              <div className='git'><a href='https://github.com/J0nssi/osrs-utility-app-android' target="_noblank">Source code</a></div>
            </div>
          </div>
        </Tilt>

        <Tilt scale={1.1} tiltMaxAngleX={15}
    tiltMaxAngleY={20} transitionSpeed={2500} glareEnable={true} glareMaxOpacity={0.6} glareColor="lightblue" glarePosition="all" glareBorderRadius='15px'>
          <div className='card'>
            <div className='card-image3'></div>
            <div className='card-text'>
              <h2>FPS game</h2>
              <p>Single player FPS game with AI-bots to kill</p>
              <br/>
              <br/>
              <br/>
              <span className='co-op'>Group members: Lassi Köykkä, Johannes Tikkanen</span>
            </div>
            <div className='card-footer'>
              <div className='git'><a href='https://github.com/J0nssi/movement-fps' target="_noblank">Source code</a></div>
              <div className='live'><a href='https://www.youtube.com/watch?v=PHR3A6PGvTI' target="_noblank">Demo video</a></div>
            </div>
          </div>
        </Tilt>
        </div>
        </Fade>
    </section>

  )
}


export default Projects