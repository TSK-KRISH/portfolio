import React from "react";
import './intro.css';
import btnImg from '../../assets/resume.png';

const Intro = () => {
    const redirectToWebsite = () => {
        window.open('https://drive.google.com/file/d/1ckgcW281Kru4nbOeZo2CEWwHfssTX9mf/view?usp=sharing', '_blank');
    };

    return (
       <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Sree Krishnan</span> <br />Computer Science student</span>
                <p className="introPara">I am a final year CSE student, passionate in working with challenging tasks whether it be technological or situational<br />Currently looking forward to work in real-time projects</p>
                <button className="websiteButton" onClick={redirectToWebsite}>
                    <img src={btnImg} alt="Resume" /> 
                    My Resume
                </button>
            </div>
       </section> 
    )
}

export default Intro;
