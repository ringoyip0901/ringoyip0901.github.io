import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { about, experience, education, portfolio } from '../actions/actions.js'
import Navigation from './children/Navigation';
import Info from './children/Info'
import Textline from './children/Textline'
import Bar from './children/Bar'
import '../css/index.css'
import cover from '../css/images/cover.jpg'
import profile from '../css/images/profile.jpg'


//"The most selfish thing that an engineer can do is to keep all the knowledge to himself/herself."

export const Display = (props) => {
  const { state, about, experience, education, portfolio, intro } = props;
  
  const style = {
    cover: {
      position: "fixed"
    }
  }

  return (    
    <MuiThemeProvider>
    <div id='navigation'>
      <Navigation />
    </div>
    <div id="frame">
      <img id="coverPhoto" src={cover}></img>
      <img id="profilePhoto" src={profile}></img>
      <div id="transbox">
        <div id="info">
          <div id="name">Ringo Yip</div>
          <div id="title">Software Engineer</div>
          <div id="Phone">Phone:</div>
          <div id="phoneNumber">917-974-0812</div>
          <div id="Email">Email:</div>
          <div id="emailAddress">ringoyip0901@gmail.com</div>
          <div id="Skills">Skills:</div>
          <div id="skillsList">
          <ul>
            <li>Javascript</li>
            <li>React/Redux/Node</li>
            <li>SQL/NoSQL</li>
            <li>TDD</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="quote">
      <div id="quoteFrame">
        <div id="intro">
          <p>
            {state.intro}
          </p>
        </div>
        <div id="teaching">
          <p>
            "Learning through teaching is the best way to learn."
          </p>
        </div>
      </div>
    </div>
    {/* <div id="display">
      <div id="about">
        <div id="experience">
          <h1>Experience</h1>
          <div>
          <ul id="experiencelist">
            <li>Software Engineer specializing in Javascript/React/Node</li>
            <br></br>
            <li>Co-creator of React-Scope, a professional React developer-tool featured on React Newsletter with 1000+ users</li>
          </ul>
          </div>
        </div>
        <div id="skills">
          <h1>Skills</h1>
          <ul id="skillsList">
            <li>Javascript</li>
            <br></br>
            <li>React/Redux/Node</li>
            <br></br>
            <li>SQL and NoSQL</li>
            <br></br>
            <li>TDD</li>
          </ul>
        </div>
        <div id="education">
          <h1>Education</h1>
          <ul>
            <li>B.S Chemical Engineering from USC</li>
          </ul>
        </div>
      </div> */}
      {/* <div id="emptySpace">
      </div>
    </div> */}
    <div id="emptySpace">
    </div>
    </MuiThemeProvider>
  )
}