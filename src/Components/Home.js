import React from 'react'
import "../Styles/Home.css";
import Typical from 'react-typical'
import Fade from 'react-reveal/Fade';
import { Parallax, Background } from "react-parallax";
import bg1 from "../Assets/bg-flipped.jpg"

const sections = document.querySelectorAll('section');
const windowHeight = window.innerHeight;
const navigation = document.querySelector('.navigation');


function Reset(){
  for (var i = 0; i < navigation.children.length; i++){
    navigation.children[i].classList.remove('selected');
  }
}

window.addEventListener('scroll', function(){
  const scrollTop = window.scrollY;
  sections.forEach(function(section, i){
    if (section.offsetTop < scrollTop + windowHeight/2 && scrollTop < section.offsetTop + windowHeight/2){
      Reset();
      navigation.children[i].classList.add('selected')     
    }
  })
})


document.querySelectorAll('.navigation li').forEach(function(item, i){
  item.addEventListener('click', function(){
    window.scrollTo({
      top: i * windowHeight,
      behavior: 'smooth'
    })
  })
})

const Home = () => {
  return (
    <section id="home">
      <ul className='navigation'>
        <li className='selected'></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
        <Fade left duration={500} delay={250} distance="30px">
        <Parallax bgImage={bg1} strength={500}>
      <div className='fullpage'>
        <div className='text'>
        <Fade left cascade duration={500} delay={250} distance="30px">
          <h1>Hi, I'm <span className='name'>Joonas Vaija.</span></h1>
          <h2><span className='iam'>I'm a </span><span className='dev'>frontend developer.</span></h2>
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
    </section>
  )
}

export default Home