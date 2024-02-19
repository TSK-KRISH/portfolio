import React from 'react';
import './contact.css';
import github from '../../assets/github.png';
import insta from '../../assets/instagram.png';
import medium from '../../assets/medium.png';
import linkedin from '../../assets/linkedin.png';
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {

    const [state, handleSubmit] = useForm("mrgnqrev");
    if (state.succeeded) {
        alert('Message sent!');
        document.getElementById("cform").reset();
    }

    return (
    <section id='contactPage'>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Like my work? Reach out to me, lets talk :)</span>
            <form action='https://formspree.io/f/mrgnqrev' onSubmit={handleSubmit} method="POST" className='contactForm' id='cform'>
                <input type="text" id='name' className="name" placeholder='Your Name' name='name' required/>
                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                />
                <input type="email" id='email' className="email" placeholder='E-mail' name='email' required/>
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                <textarea className='msg' id='message' name="message" rows="5" placeholder='Your message'></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
                <button type="submit" className='submitBtn' disabled={state.submitting}>
                   Submit
                </button>
                <div className="links">
                <a href="https://www.linkedin.com/in/sree-krishnan-t/" target="_blank" rel="noopener"><img src={linkedin} alt="linkedin" className="link" /></a>
                <a href="https://sreekrishnan.medium.com/" target="_blank" rel="noopener"><img src={medium} alt="medium" className="link" /></a>
                <a href="https://www.instagram.com/___tsk__/" target="_blank" rel="noopener"><img src={insta} alt="instagram" className="link" /></a>
                <a href="https://github.com/TSK-KRISH" target="_blank" rel="noopener"><img src={github} alt="github" className="link" /></a>
                </div>
            </form>
        </div>
    </section>
  );
}

export default Contact