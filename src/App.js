import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Favicon from 'react-favicon';
import Welcome from './components/Welcome.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import '../src/assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="Container">
            <nav>
              <Link to="/">WELCOME</Link>
              <Link to="/about">ABOUT ME</Link>
              <Link to="/projects">PROJECTS</Link>
              <Link to="/contact">CONTACT ME</Link>
            </nav>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Router>
        <footer>
          <p>Check out my online presence!</p>
          <div className="icon-container">
            <a href="https://github.com/natasha-robarge"><img className="github" src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="github logo" /></a>
            <a href="https://www.linkedin.com/in/natasha-robarge/"><img className="linkedIn" src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="LinkedIn logo" /></a>
            <a href="https://twitter.com/NatTheCoderBat"><img className="twitter" src="http://www.twittericon.com/wp-content/uploads/2010/08/glossy-cute-blue1.png" alt="Twitter logo" /></a>
            <a href="https://medium.com/@natasharobarge"><img className="medium" src="http://www.iconninja.com/files/757/850/542/medium-blog-icon.png" alt="Medium logo" /></a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
