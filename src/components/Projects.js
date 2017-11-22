import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="Projects-page">
        <div className="Titles projects">
          <h1>Projects</h1>
        </div>
        <div className="projects-container">
        <div className="nommad-container">
          <h2>Are you mad for Noms?</h2>
          <hr />
          <h3>Welcome To NOMMAD!</h3>
          
          <h5>We have locations of food trucks to serve your mad nomming needs</h5>
          <a href="https://nommad-app.firebaseapp.com/">Click here to see the final product!</a>
            <p>What I really liked about this project was how our team got along. I loved how for the most part, 
              we were all on the same page. I loved how we were all on each other to get things done and attempting 
              to help each other when we were stuck on a functionality of the project. 
              <br />
              <br />
              I also really liked the outcome of it that we got to after one week.
              <br />
              <br />
              What I wish we could have done was adding a border around the map and resizing some of the 
              food truck names so it all fits in one box.
            </p>
            <br />
        </div>
        <div className="pupfetchr-container">
        <h3>Come adopt a best friend with PupFetchr!</h3>
        <hr />
        
        <h5>We show you dogs that are up for adoption and a way to contact them by zip code</h5>
        <a href="https://nommad-app.firebaseapp.com/">Click here to see the final product!</a>
          <p>What I liked about this project is that we all went into it with so much excitement and passion 
            that we almost got carried away. I liked how it came out even though we struggled with its functionality.
            <br />
            <br />
            The mouse cursor is probably my most favorite design out of it.
            <br />
            <br />
            I wish we could have gotten the entire log in functionality working for our database. I really wanted 
            to add in password hashing for this project. 
          </p>
        </div>
        </div>
      </div>
    );
  }
}

export default Projects;
