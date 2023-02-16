import { React, useEffect, useRef, useState } from 'react';
import NavHeader from './NavHeader';
import Explanation from './Explanation';
import VisualizationContainer from './VisualizationContainer';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import questions from '../data/questions.json';

function Home(props) {

  const [showExplanation, setShowExplanation] = useState(false);
  const questionsInfo = useRef(null);


  useEffect(() => {
    const explanationValue = localStorage.getItem("explanation")
    if (!explanationValue) {
        setShowExplanation(true);
        localStorage.setItem("explanation", "1");
    }
  }, []);

  useEffect(() => {
    const parsed = JSON.parse(JSON.stringify(questions));
    questionsInfo.current = parsed;
  }, []);

  const onGoClick = () => {
    setShowExplanation(false);
  }

  return(
    <div className='Home'>
      <NavHeader></NavHeader>
      <div className='main'>
        {showExplanation ? <Explanation onGoClick={() => onGoClick()}></Explanation> : <VisualizationContainer fireBaseApp={props.fireBaseApp} questions={questionsInfo}></VisualizationContainer>}
      </div>
    </div>
  );
}

export default Home;