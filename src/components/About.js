import React from 'react';
import NavHeader from './NavHeader';
import './About.css';
import 'bootstrap/dist/css/bootstrap.css';

function About() {
  return(
    <div className="About">
      <NavHeader></NavHeader>
      <div class="text-container">
        <p>
          This is a project completed for QSS 82 (Major One Quarter Project) at Dartmouth College, 23W. 
          <br></br>
          The goal of this project is to understand how changes to visual components in a graphic displaying data (a chart, plot, etc) can affect our perception of 
          the message. 
        </p>
      </div>
    </div>
  );
}

export default About;