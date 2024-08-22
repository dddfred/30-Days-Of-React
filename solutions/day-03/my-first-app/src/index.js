// index.js
import React from "react";
import ReactDOM from "react-dom";

import asabenehImage from "./images/asabeneh.jpg";
import css_logo from "./images/css_logo.png";
import html_logo from "./images/html_logo.png";
import react_logo from "./images/react_logo.png";

/*
// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)
*/
const header = (
  <div className="header-wrapper">
    <header>
      
    </header>
  </div>
);

const mainStyle = {background:'border-box cyan', color:'black'}
const main = (
  <main style={mainStyle}>
    <div className="main-wrapper">
      <h1>
        <strong>Subscribe </strong>
      </h1>
      <p>
        <strong>
          Sign up with your email address to receive news and updates
        </strong>
      </p>
    </div>
  </main>
);

/*
const main = (
  <main>
    <div className="main-wrapper">
      <p>
        <strong>Subscribe</strong>
      </p>
    </div>
  </main>
);*/

/*
const main = (
  <main>
    <div className="main-wrapper">
      <p>
        Prerequisite to get started{" "}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      
    </div>
  </main>
);*/


const user = (
  <div>
    <img src={asabenehImage} alt="asabeneh" />
  </div>
);

const images = (
  <div>
    <img src={css_logo} alt="css_logo.png" />
    <img src={html_logo} alt="html_logo.png"/>
    <img src={react_logo} alt="react_logo"/>
  </div>
);

const app = (
  <div className="app">
    {main}
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
