import React from 'react';
import './Explanation.css';
import 'bootstrap/dist/css/bootstrap.css';

function Explanation(props) {
  return(
    <div className="Explanation">
        <div className='greeting'>
            Hi there! Thanks for stopping by. 
        </div>
        <br></br>
        <br></br>
        <div className='paragraph'>
          This is a project to help us better understand how data visualizations can subtly change our perceptions of the world around us. Please help out by looking at as many of these visualizations you feel like, and answering the questions that follow. You can stop whenever you feel like you’re done!
        </div>
        <button className='go-button' onClick={() => props.onGoClick()}>
          Let's go!
        </button>
    </div>
  );
}

export default Explanation;