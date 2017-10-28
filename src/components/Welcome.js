import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome-page">
        <div className="Titles welcome">
          <h1>Natasha Robarge</h1>
          <hr className="line-rule" />
          <h4>Junior Software Developer</h4>
        </div>
        <p className="Welcome-quote">"The number one benefit of information technology is that it empowers people to do what they want to do. It lets people be creative. It lets people be productive. It lets people learn things they didn't think they could learn before, and so in a sense it is all about potential. " </p>
        <p className="Quote-author"> -  Steve Ballmer </p>
      </div>
    );
  }
}

export default Welcome;
