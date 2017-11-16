import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="About-page">
        <div className="about-container">
          <div className="Titles about">
            <h1>About Me</h1>
          </div>
          <h3>Let's Start With A Bit of <i>Analyzing</i>...</h3>
            <p className="start-game"><br /><br />I am the protagonist of a video game who is <i>passionate and determined</i>. 
            Let's turn this into a game to learn about me. Think about your answer first, and then look at mine to compare. 
            <br /> <br /> <br /> Are you ready? <br /> <br /> Start. </p>
        </div>
        <h3>Your First Quest: Watch The Video</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RBK5Jheu0To" frameborder="0" gesture="media" allowfullscreen></iframe>
        
        <br />
        <h4>What do the games in the presented trailer tell you about the game developer?</h4>
        <hr className="separate-line" />
        <p className="italic-answer"><i>My Answer:</i></p>
        <p className="answer-one">The games in the presented trailer tell me that the game developer is trying to send out a message.
          Not just any message, but a message that he's passionate about. The developer is driven by his passion to figure out the psychology 
          behind the games. He wants to understand the developer better. This is something I relate to. I'm constantly striving to find meaning in my life.
          I constantly want to understand code better the deeper and deeper I dive into it. When I first started learning how to code, I didn't understand 
          anything. When the process continued to be repeated, I was slowly understanding more about computers. I don't think I can ever really look at 
          applications the way I used to because now I know they can be made in different ways and not every application is the same in terms of languages used. </p>
        <br />
        
      </div>
    );
  }
}

export default About;
