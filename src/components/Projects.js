import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="Projects-page">
        <div className="Titles projects">
          <h1>Projects</h1>
        </div>
        <div className="projects-container">
          <h2>Are you mad for Noms?</h2>
          <hr />
          <h3>Welcome To NOMMAD!</h3>
          <h5>We have locations of food trucks to serve your mad nomming needs</h5>
          <img src="./../public/nommad.jpg" alt="A food truck application" />
        </div>
      </div>
    );
  }
}

export default Projects;
