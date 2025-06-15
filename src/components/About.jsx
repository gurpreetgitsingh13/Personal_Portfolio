import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-wrapper">
      {/* Fixed Left Image */}
      <div className="about-photo">
        <img src="/profilepic.jpg" alt="Gurpreet" />
      </div>

      {/* Scrollable Right Content */}
      <div className="about-content">
        <h1 className="name">I'm Gurpreet</h1>
        <p className="tagline">A software developer transitioning to data science.</p>
        <p className="desc">
          I identify as a developer and analyst who loves to design software and
          make sense of data, currently exploring the possibilities of Artificial Intelligence (AI) and Machine Learning (ML) in the world of data.
        </p>
        <img src="https://via.placeholder.com/250x150" alt="sketch 1" className="sketch" />
      </div>
    </div>
  );
};

export default About;
