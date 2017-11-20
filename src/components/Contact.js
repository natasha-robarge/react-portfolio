import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="Contact-page">
        <div className="Titles contact">
          <h1>Contact Me</h1>
        </div>
        <div className="contact-container">
          <h2>How about we go out for coffee or tea?</h2>
          <br />
          <h2 className="h2-special">We can definitely .setTime() aside for a meeting</h2>
          <hr className="special-line" />
          
          <br />
          <h3>Email: robarge.natasha7@gmail.com</h3>
          <br />
          <h3>Phone Number: (857) 285-3317</h3>
          <br />
        </div>
      </div>
    );
  }
}

export default Contact;
