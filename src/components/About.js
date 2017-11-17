import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="About-page">
        <div className="about-container">
          <div className="Titles about">
            <h1>About Me</h1>
          </div>
            <img className="talk-photo" src="https://i.imgur.com/sUeWzze.jpg" />
            <p className="start-game">I am the protagonist of a video game who is passionate and determined.
            I am a programmer who aspires to learn more about the field and how I can contribute in a meaningful 
            way and help others. As a humanitarian, I want to help society and I will do that through coding; whether 
            that means creating an informative website to teach people about different topics or by developing a video game 
            for people to play after a hard day. If it can help someone somehow, I'm in. </p>
        </div>
      </div>
    );
  }
}

export default About;
