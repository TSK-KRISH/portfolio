import React from "react";
import './works.css';
import react from '../../assets/react.png';
import java from '../../assets/java.png';
import angular from '../../assets/angular.png';
import python from '../../assets/python.png';

const Works = () => {
    return (
        <section id='project-page'>
          <h1 className="projectPageTitle">My Projects</h1>
          <span className="projectDesc">To view my project implementations, click on the GitHub link given at the bottom of the website</span>
          <div className='timeline'>
                <div className="container left-container">
                <img src={python} alt="" />
                <div className="text-box">
                    <h2>MessageStego - Image steganography application(Ongoing)</h2>
                    <p>An deep learning based model for hiding message into images while preserving the image quality as same as the original.</p>
                    <span className='left-container-arrow'></span>
                </div>
                </div>
                <div className="container right-container">
                <img src={react} alt="" />
                <div className="text-box">
                    <h2>Personal Portfolio website</h2>
                    <p>A React portfilo website with my professional details. You're viewing it currently.</p>
                    <span className='right-container-arrow'></span>
                </div>
                </div>
                <div className="container left-container">
                <img src={angular} alt="" />
                <div className="text-box">
                    <h2>Swiggito - Online Food ordering application</h2>
                    <p>An full-stack application built with AngularJS and MySQL database which contains all the features you experienced in Swiggy or Zomato apps.</p>
                    <span className='left-container-arrow'></span>
                </div>
                </div>
                <div className="container right-container">
                <img src={python} alt="" />
                <div className="text-box">
                    <h2>Human tweets sentiment predicter</h2>
                    <p>A machine learning model, which categorizes human tweets to Positive, Negative or Neutral using Logistic regression with 84.53% accuracy </p>
                    <span className='right-container-arrow'></span>
                </div>
                </div>
                <div className="container left-container">
                <img src={java} alt="" />
                <div className="text-box">
                    <h2>GymWale - Gym management application</h2>
                    <p>An simple Java application which provides basic features like managing gym memberships and scheduling workouts</p>
                    <span className='left-container-arrow'></span>
                </div>
                </div>
                <div className="container right-container">
                <img src={java} alt="" />
                <div className="text-box">
                    <h2>CollegeFair - College Event organizer application</h2>
                    <p>A simple Java application which allows students and colleges to register and organize 5+ different categories of events</p>
                    <span className='right-container-arrow'></span>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Works