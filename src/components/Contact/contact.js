import React, { useRef } from 'react'
import './contact.css'
import NextNepal from '../../assets/nextNepal.png'
import YopoSuperApp from '../../assets/microsoft.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import InstagramIcon from '../../assets/instagram.png'
import TwitterIcon from '../../assets/twitter.png'
import LinkedInIcon from '../../assets/LinkedIn.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wpiujnw', 'template_s2mtzrc', form.current, {publicKey: 'SK8EOIRvrWgZFfgNd'})
          .then(
            () => {
              console.log('SUCCESS!');
              alert('Email sent !');
              e.target.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Experiences</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with some companies, which includes
            </p>
            <div className='clientImgs'>
                <img src={NextNepal} alt='' className='clientImg'/>
                <img src={YopoSuperApp} alt='' className='clientImg'/>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name='message' rows='5' placeholder='Write your message here...'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <a href='https://www.facebook.com/pralad.dhungana.3/'><img src={FacebookIcon} alt='Facebook' className='link'></img></a>
                    <a href='https://www.instagram.com/dhungana_pralhad/'><img src={InstagramIcon} alt='Instagram' className='link'/></a>
                    <a href='https://x.com/162252e176874d4'><img src={TwitterIcon} alt='Twitter' className='link'/></a>
                    <a href='www.linkedin.com/in/dhunganapralhad'><img src={LinkedInIcon} alt='LinkedIn' className='link'/></a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact