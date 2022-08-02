import "../Styles/Contact.css";
import emailjs from '@emailjs/browser';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Swal from 'sweetalert2'

const Contact = () => {

  const handleClick = (e) => {

    let x = document.forms["form"]["name"].value;
    let y = document.forms["form"]["email"].value;
    let z = document.forms["form"]["message"].value;
    
    if(x === "" || x == null){
      Swal.fire({
        icon: "error",
        title: 'Please enter your name!',
        position: 'top',
        confirmButtonColor: "#57ACDC",
        background: "#303030",
        color: "white"
      })
      return false;
    }
    if(y === "" || y == null){
      Swal.fire({
        icon: "error",
        title: 'Please enter your email!',
        position: 'top',
        confirmButtonColor: "#57ACDC",
        background: "#303030",
        color: "white"
      })
      return false;
    }
    if(!y.includes("@")){
      Swal.fire({
        icon: "error",
        title: 'Email is not valid!',
        position: 'top',
        confirmButtonColor: "#57ACDC",
        background: "#303030",
        color: "white"
      })
      return false;
    }
    if (z === "" || z == null){
      Swal.fire({
        icon: "error",
        title: 'Please enter a message!',
        position: 'top',
        confirmButtonColor: "#57ACDC",
        background: "#303030",
        color: "white"
      })
      return false;
    }

    else
      Swal.fire({
        title: 'Sending your message!',
        showConfirmButton: false,
        allowOutsideClick: false,
        position: 'top',
        background: "#303030",
        color: "white",
        willOpen:() => {
          Swal.showLoading()
        }
      })
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Outlook_portfolio', 'template_portfolio', e.target, 'e8jgSl7q-XQiUEUGH')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Your message is sent!',
            text: 'I will get in touch as soon as possible', 
            position: 'top',
            confirmButtonColor: "#57ACDC",
            background: "#303030",
            color: "white"
          })
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please try again later',
            position: 'top',
            confirmButtonColor: "#57ACDC",
            background: "#303030",
            color: "white"
          })
      });
      
  };

  return (
    <section className='contact' id="contact">
      <h1 className='header_contact'>CONTACT</h1>
      <Fade bottom duration={500} delay={250} distance="30px">
      <form className="form" name="form"
      onSubmit={sendEmail}>
        <label>Name*</label>
        <input required autoComplete="off" type="text" name='name'/>
        <br />
        <label>Email*</label>
        <input required autoComplete="off" type="email" name='email'/>
        <br />
        <label>Message*</label>
        <textarea required autoComplete="off" name="message" rows={10}></textarea>
        <br />
        <input onClick={handleClick} type="submit" value={"Send"} className="submit"/>
      </form>
      <a href='#home'>
        <div className='arrowup'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        </a>
      </Fade>
    </section>
  )
}

export default Contact