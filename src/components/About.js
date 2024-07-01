import React from 'react';
import './About.css'; 

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our REACT based web-application, which is a beginner blogging-website.
      </p>
      <p>
        BLOGIFY
      </p>
      <div className="about-image">
        <img src="logo192.png" alt="About Us" />
      </div>
    </div>
  );
}

export default About;
