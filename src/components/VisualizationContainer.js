import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './VisualizationContainer.css';
import Button from 'react-bootstrap/Button';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useState, useEffect, useRef } from 'react';
import Papa from 'papaparse';
import { doc, updateDoc, increment, getFirestore } from "firebase/firestore";
import DroughtVar1 from './charts/DroughtVar1';
import DroughtVar2 from './charts/DroughtVar2';
import DroughtVar3 from './charts/DroughtVar3';
import QuestionContainer from './QuestionContainer';


function VisualizationContainer(props) {

  const [data, setData] = useState(null);
  const [response, setResponse] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentQuestionText, setCurrentQuestionText] = useState(null);
  const [currentQuestionAnswers, setCurrentQuestionAnswers] = useState(null);
  const [currentQuestionVariant, setCurrentQuestionVariant] = useState(null);
  const [noMoreQuestions, setNoMoreQuestions] = useState(false);
  const unseenQuestions = useRef(null);
  // const currentQuestion = useRef(null);

  const storage = getStorage();
  const db = getFirestore(props.fireBaseApp);

  useEffect(() => {
    unseenQuestions.current = structuredClone(props.questions.current);
  }, [props.questions]);

  useEffect(() => {
    if (unseenQuestions.current == null) {
      return;
    }
    loadNextQuestion();
  }, [unseenQuestions]);

  useEffect(() => {
    if (currentQuestion != null) {
      const dataRef = ref(storage, currentQuestion.dataFilePath);
      getDownloadURL(dataRef)
        .then((url) => {
      
          Papa.parse(url, {
            header: true,
            download: true,
            complete: response => {
              setData(response.data);
            }
          });
          
        })
        .catch((error) => {

        });
    }
  }, [currentQuestion]);

  const onChange = (answer) => {
    setResponse(answer);
  }

  const onSubmit = async () => {
    if (currentQuestion == null) {
      return;
    }

    // remove from unseen 
    const index = unseenQuestions.current.indexOf(currentQuestion);
    if (index > -1) { 
      unseenQuestions.current.splice(index, 1); 
    }

    // submit to firebase db 
    const responseDocRef = doc(db, currentQuestionVariant.saveResponsePath);
    await updateDoc(responseDocRef, {
      [response]: increment(1),
    }).then((response) => {
      console.log("submitted response");
      loadNextQuestion();
    });
  }

  const loadNextQuestion = () => {
    if (unseenQuestions.current.length === 0) {
      setNoMoreQuestions(true);
      return;
    }
    const nextQuestion = getRandomArrayElement(unseenQuestions.current);
    setCurrentQuestion(nextQuestion);
    setCurrentQuestionVariant(getRandomArrayElement(nextQuestion.variants));
    setCurrentQuestionAnswers(nextQuestion.answerOptions);
    setCurrentQuestionText(nextQuestion.questionText);
  }

  const getChartComponent = (chartData) => {
    if (currentQuestion == null || currentQuestionVariant == null) {
      return (<p>Loading...</p>);
    }
    switch(currentQuestion.id) {
      case 1:
        switch (currentQuestionVariant.variantId) {
          case 1:
            return (<DroughtVar1 data={chartData}></DroughtVar1>);
          case 2:
            return (<DroughtVar2 data={chartData}></DroughtVar2>);
          case 3:
            return (<DroughtVar3 data={chartData}></DroughtVar3>);
          default:
            return (<DroughtVar1 data={chartData}></DroughtVar1>);
        }
      default:
        return (<DroughtVar1 data={chartData}></DroughtVar1>);
    }
  }

  const getRandomArrayElement = (array) => {
    return array[Math.floor(Math.random()*array.length)];
  }

  if (noMoreQuestions) {
    return (
      <div className="VisualizationContainer">
        You've answered all our questions!
      </div>
    )
  }

  return(
    <div className="VisualizationContainer">
      {getChartComponent(data)}
      <QuestionContainer questionText={currentQuestionText} questionAnswers={currentQuestionAnswers} onChange={(answer) => onChange(answer)}></QuestionContainer>
      <Button className='btn-submit' onClick={() => onSubmit()}>Submit</Button>
    </div>
  );
}


export default VisualizationContainer;