import React, {useEffect} from 'react'
import "../Styles/Home.css";
import Fade from 'react-reveal/Fade';
import { Parallax, Background } from "react-parallax";
import bg1 from "../Assets/bg-flipped.jpg"
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Scrollspy from 'react-scrollspy';
import {FaDotCircle} from 'react-icons/fa';


const Home = () => {

  const {text} = useTypewriter({
    words: [ "a frontend developer.","learner.","coder."],
    loop: 0, 
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
    })

  return (
    
    <section id="home">
        <Fade left duration={500} delay={250} distance="30px">
        <Parallax bgImage={bg1} strength={500}>
      <div className='fullpage'>
        <div className='text'>
        <Fade left cascade duration={500} delay={250} distance="30px">
          <h1>Hi, I'm <span className='name'>Joonas Vaija.</span></h1>
          <h2><span className='iam'>I'm </span><span className='dev'>{text}</span>
          <Cursor /></h2>
          </Fade>
          
        </div>
            <button className='button'><a href="#skills">Skills</a></button>
            <button className='button'><a href="#projects">Projects</a></button>
            <button className='button'><a href="#about">About</a></button>
            <button className='button'><a href="#contact">Contact</a></button>
        </div>
        </Parallax>
        <a href='#skills'>
        <div className='arrowdown'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        </a>
        </Fade>
        <Scrollspy 
        className="navigation" items={ ['home', 'skills', 'projects', 'about', 'contact'] } 
        currentClassName="isCurrent" offset={-500}>
        <li><a href="#home"><FaDotCircle className='dot'/></a></li>
        <li><a href="#skills"><FaDotCircle className='dot'/></a></li>
        <li><a href="#projects"><FaDotCircle className='dot'/></a></li>
        <li><a href="#about"><FaDotCircle className='dot'/></a></li>
        <li><a href="#contact"><FaDotCircle className='dot'/></a></li>
      </Scrollspy>
    </section>
  )
}

export default Home