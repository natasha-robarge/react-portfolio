import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
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
      </div>
    );
  }
}

export default App;
