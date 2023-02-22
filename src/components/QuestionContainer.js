import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './QuestionContainer.css';
import QuestionAnswer from './QuestionAnswer';
import { useState, useEffect, useRef } from 'react';

function QuestionContainer(props) {
  const questionText = props.questionText;
  const questionAnswers = props.questionAnswers;
  const onChange = props.onChange;

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const updateAnswer = (answer) => {
    setSelectedAnswer(answer);
    onChange(answer);
  }

  if (props.questionText == null) {
    return <div></div>
  }

  return(
    <div className="QuestionContainer">
      <div className="question-text">
        {questionText}
      </div>
      {questionAnswers.map(answer => (
        <QuestionAnswer 
          answer={answer}
          key={answer}
          onAnswerSelected={(answer) => updateAnswer(answer)}
          selected={selectedAnswer === answer}
        ></QuestionAnswer>
      ))}
      <div>
      </div>
    </div>
  );
}


export default QuestionContainer;