import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './QuestionAnswer.css';
import { useState, useEffect } from 'react';

function QuestionAnswer(props) {
  const answerText = props.answer;

  const selectAnswer = () => {
    props.onAnswerSelected(answerText);
  }

  return(
    <div className="QuestionAnswer" onClick={() => selectAnswer()}>
      <div className={props.selected ? 'button-selected' : 'button-unselected'}>
      </div>
      {answerText}
    </div>
  );
}


export default QuestionAnswer;