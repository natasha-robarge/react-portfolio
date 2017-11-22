import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="About-page">
        <div className="about-container">
          <div className="Titles about">
            <h1 className="statement">I Am a Back-End Developer</h1>
            <hr className="line-rule" />
          </div>
          <div className="about-text">
            <hr />
            <h2>Summary</h2>
            <hr />
            <br />
            <br />
            <img className="talk-photo" src="https://i.imgur.com/sUeWzze.jpg" alt="The developer giving a talk about her tech journey" />
            <p>I am the protagonist of a video game who is passionate and determined.
            I am a programmer who aspires to learn more about the field and how I can contribute in a meaningful 
            way and help others. As a humanitarian, I want to help society and I will do that through coding; whether 
            that means creating an informative website to teach people about different topics or by developing a video game 
            for people to play after a hard day. If it can help someone somehow, I'm in. </p>
            <br />
            <br />
            <p>SIDENOTE: I also enjoy making occassionally bad coding puns because...</p>
            <h5 className="pun">A smile a day keeps the bugs away</h5>   
          </div>
          <div className="skill-wrap">
            <hr />
            <h2>Skills</h2>
            <hr />
            <br />
              <img className="reactive" src="https://moduscreate.com/wp-content/uploads/2017/04/react-redux-react-native-application.png" alt="React Logo" />
              <h5 className="reactive-text">React/React Native/Redux</h5>
              <img className="java-py" src="https://yashajadwaniblog.files.wordpress.com/2015/01/python-vs-java-726367-copy.jpg?w=240" alt="Python / Java Comic" />
              <h5 className="java-py-text">Java / Python </h5>
              <img className="front-end" src="https://www.planet-source-code.com/vb/2010Redesign/images/LangugeHomePages/HTML5_CSS_JavaScript.png" alt="HTML, CSS, JavaScript logo" />
              <h5 className="front-end-text">HTML5 / CSS3 / JavaScript</h5>
              <img className="database" src="http://softgainz.com/images/database-management.png" alt="Database logo" />
              <h5 className="database-text">SQL / MongoDB</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
