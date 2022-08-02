import React from 'react'
import "../Styles/Projects.css";
import Tilt from 'react-parallax-tilt'

const Projects = () => {
  return (
    <section className='projects' id="projects">
        <div>
          <h1 className='header_projects'>PROJECTS</h1>
        </div>
        <div className='allcards'>
        <Tilt scale={1.1} tiltMaxAngleX={15}
    tiltMaxAngleY={20} transitionSpeed={2500} glareEnable={true} glareMaxOpacity={0.6} glareColor="lightblue" glarePosition="all" glareBorderRadius='15px'>
          <div className='card'>
            <div className='card-image'></div>
            <div className='card-text'>
              <h2>Vilkku-fillarit -datapage</h2>
              <p>Responsive webpage to show different type of data about Vilkku-fillarit users and bikes usage.</p>
              <br/>
              <span className='co-op'>Collaborators: Kuopion city, Vilkku-fillarit</span>
            
            </div>
            <div className='card-footer'>
              <div className='git'><a href='https://www.github.com' target="_noblank">Github</a></div>
              <div className='live'><a href='https://www.github.com' target="_noblank">Live demo</a></div>
            </div>
          </div>
        </Tilt>

        <Tilt scale={1.1} tiltMaxAngleX={15}
    tiltMaxAngleY={20} transitionSpeed={2500} glareEnable={true} glareMaxOpacity={0.6} glareColor="lightblue" glarePosition="all" glareBorderRadius='15px'>
          <div className='card'>
            <div className='card-image'></div>
            <div className='card-text'>
              <h2>Post one</h2>
              <p>LOREM LIIRUM IPSUS PIPSUS</p>
            </div>
            <div className='card-footer'>
              <div className='git'><a href='https://www.github.com' target="_noblank">Github</a></div>
              <div className='live'><a href='https://www.github.com' target="_noblank">Live demo</a></div>
            </div>
          </div>
        </Tilt>

        <Tilt scale={1.1} tiltMaxAngleX={15}
    tiltMaxAngleY={20} transitionSpeed={2500} glareEnable={true} glareMaxOpacity={0.6} glareColor="lightblue" glarePosition="all" glareBorderRadius='15px'>
          <div className='card'>
            <div className='card-image'></div>
            <div className='card-text'>
              <h2>Post one</h2>
              <p>LOREM LIIRUM IPSUS PIPSUS</p>
            </div>
            <div className='card-footer'>
              <div className='git'><a href='https://www.github.com' target="_noblank">Github</a></div>
              <div className='live'><a href='https://www.github.com' target="_noblank">Live demo</a></div>
            </div>
          </div>
        </Tilt>
        </div>
    </section>

  )
}


export default Projects