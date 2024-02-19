import React from "react";
import './skills.css'
import UIDesign from '../../assets/webdev.png';
import WebDesign from '../../assets/blockchain.png';
import AppDesign from '../../assets/machine-learning.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">My Interests</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDesign} alt="Blockchain" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Blockchain</h2>
                        <p>My primary interest lies in Blockchain technologies. I have learnt the basic Blockchain concepts and currently developing my Web 2.0 skills to dive into Web 3.0 development.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={UIDesign} alt="Web Development" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web development</h2>
                        <p>Currently developing my skills in developing MERN stack applications as a pre-requisite for developing Blockchain applications. Has good experience with frontend web development</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={AppDesign} alt="Machine learning" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Machine learning</h2>
                        <p>Worked with supervised machine learning project and currently working on a deep learning application for my final-year project </p>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Skills