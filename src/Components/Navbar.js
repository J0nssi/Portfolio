import React from 'react'
import "../Styles/Navbar.css";
import {FaLinkedinIn, FaGithub, FaFile, FaFilePdf} from 'react-icons/fa'
import cv from "../Assets/Joonas_Vaija_CV.pdf";


const Navbar2 = () => {
  return (
    <div className='navbar'>
        <a href='https://www.linkedin.com/in/joonas-vaija-600179231/' target="_blank"><FaLinkedinIn size={40} color="#57ACDC"/></a>
        <a href='https://github.com/J0nssi' target="_blank"><FaGithub size={40} color="#57ACDC"/></a>
        <a href={cv} download={"CV_Joonas_Vaija"}><FaFilePdf size={40} color="#57ACDC"/></a>
    </div>
  )
}

export default Navbar2