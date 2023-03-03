import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './VisualizationContainer.css';
import Button from 'react-bootstrap/Button';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useState, useEffect, useRef } from 'react';
import Papa from 'papaparse';
import { doc, setDoc, updateDoc, increment, getFirestore, getDoc } from "firebase/firestore";
import DroughtVar1 from './charts/DroughtVar1';
import DroughtVar2 from './charts/DroughtVar2';
import DroughtVar3 from './charts/DroughtVar3';
import SoccerVar1 from './charts/SoccerVar1';
import SoccerVar2 from './charts/SoccerVar2';
import Soccer2017Var1 from './charts/Soccer2017Var1';
import Soccer2017Var2 from './charts/Soccer2017Var2';
import Soccer2017Var3 from './charts/Soccer2017Var3';
import Soccer2017Var4 from './charts/Soccer2017Var4';
import QuestionContainer from './QuestionContainer';
import ResponseTimesVar1 from './charts/ResponseTimesVar1';
import ResponseTimesVar2 from './charts/ResponseTimesVar2';
import ResponseTimesVar3 from './charts/ResponseTimesVar3';
import ResponseTimesVar4 from './charts/ResponseTimesVar4';
import TopPaidVar1 from './charts/TopPaidVar1';
import TopPaidVar2 from './charts/TopPaidVar2';
import Soccer2017Var5 from './charts/Soccer2017Var5';
import Soccer2017Var6 from './charts/Soccer2017Var6';



function VisualizationContainer(props) {

  const [data, setData] = useState(null);
  const [response, setResponse] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentQuestionText, setCurrentQuestionText] = useState(null);
  const [currentQuestionAnswers, setCurrentQuestionAnswers] = useState(null);
  const [currentQuestionVariant, setCurrentQuestionVariant] = useState(null);
  const [askFollowUp, setAskFollowUp] = useState(false);
  const [noMoreQuestions, setNoMoreQuestions] = useState(false);
  const unseenQuestions = useRef(null);
  const timeStarted = useRef(new Date());
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
    timeStarted.current = new Date();
    loadNextQuestion();
  }, [unseenQuestions]);

  useEffect(() => {
    if (currentQuestion != null && currentQuestion.dataFilePath != null) {
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
    console.log("in viz container, answer ", answer);
    setResponse(answer);
  }

  const onSubmit = async () => {
    if (currentQuestion == null) {
      return;
    }

    // get time spent on question 
    const endTime = new Date().getTime();
    const spentTime =(endTime - timeStarted.current.getTime())/1000;

    // remove from unseen 
    const index = unseenQuestions.current.indexOf(currentQuestion);
    if (index > -1) { 
      unseenQuestions.current.splice(index, 1); 
    }

    // submit to firebase db 
    var responseDocRef = doc(db, currentQuestionVariant.saveResponsePath);

    console.log("saving to", currentQuestionVariant.saveResponsePath);

    if (currentQuestionText.includes("Think back")) {
      responseDocRef = doc(db, "responses/followUp/var_" + currentQuestionVariant.variantId + "/responseCounts");
      console.log("inside here");
    }
    await updateDoc(responseDocRef, {
      [response]: increment(1),
    }).then((response) => {
      console.log("submitted response");
      timeStarted.current = new Date();
      loadNextQuestion();
    });

    // submit time to firebasedb 
    var timeDocRef = doc(db, currentQuestionVariant.saveResponsePath.slice(0, (currentQuestionVariant.saveResponsePath.length - 14)) + "timeSpent");

    if (askFollowUp) {
      timeDocRef = doc(db, "responses/followUp/var_" + currentQuestionVariant.variantId + "/timeSpent");
    }

    const docSnap = await getDoc(timeDocRef);

    if (docSnap.exists()) {
      const array = docSnap.data()['seconds'];
      array.push(spentTime);
      await setDoc(timeDocRef, {
        seconds: array,
      });
    } else {
      console.log("No such document!");
    }

    setAskFollowUp(false);
    
  }

  const loadNextQuestion = () => {
    window.scrollTo(0, 0);
    if (askFollowUp) {
      setData(null);
      const followUp = currentQuestion.followUp;
      
      setCurrentQuestion(followUp);
      setCurrentQuestionAnswers(followUp.answerOptions);
      setCurrentQuestionText(followUp.questionText);
    }
    else if (unseenQuestions.current.length === 0) {
      setNoMoreQuestions(true);
      return;
    }
    else {
      const nextQuestion = getRandomArrayElement(unseenQuestions.current); 
      setCurrentQuestion(nextQuestion);
      setCurrentQuestionVariant(getRandomArrayElement(nextQuestion.variants));
      setCurrentQuestionAnswers(nextQuestion.answerOptions);
      setCurrentQuestionText(nextQuestion.questionText);
    }
  }

  const getChartComponent = (chartData) => {
    if (currentQuestion == null || currentQuestionVariant == null || chartData == null) {
      if (chartData == null) {
        return (<p></p>)
      }
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
      case 2:
        switch (currentQuestionVariant.variantId) {
          case 1:
            return (<SoccerVar1 data={chartData}></SoccerVar1>);
          case 2:
            return (<SoccerVar2 data={chartData}></SoccerVar2>)
          default: 
            return (<SoccerVar1 data={chartData}></SoccerVar1>);
        }
      case 3:
        switch (currentQuestionVariant.variantId) {
          case 1:
            return (<Soccer2017Var1 data={chartData}></Soccer2017Var1>);
          case 2:
            return (<Soccer2017Var2 data={chartData}></Soccer2017Var2>);
          case 3:
            return (<Soccer2017Var3 data={chartData}></Soccer2017Var3>);
          case 4:
            return (<Soccer2017Var4 data={chartData}></Soccer2017Var4>);
          case 5:
            return (<Soccer2017Var5 data={chartData}></Soccer2017Var5>);
          case 6:
            return (<Soccer2017Var6 data={chartData}></Soccer2017Var6>);
          default: 
            return (<Soccer2017Var1 data={chartData}></Soccer2017Var1>);
      }
      case 4:
        switch (currentQuestionVariant.variantId) {
          case 1:
            return (<SoccerVar1 data={chartData}></SoccerVar1>);
          case 2:
            return (<SoccerVar2 data={chartData}></SoccerVar2>);
          default: 
            return (<SoccerVar1 data={chartData}></SoccerVar1>);
        }
      case 5:
        switch (currentQuestionVariant.variantId) {
          case 1:
            return (<ResponseTimesVar1 data={chartData}></ResponseTimesVar1>);
          case 2:
            return (<ResponseTimesVar2 data={chartData}></ResponseTimesVar2>);
          case 3:
            return (<ResponseTimesVar3 data={chartData}></ResponseTimesVar3>);
          case 4:
            return (<ResponseTimesVar4 data={chartData}></ResponseTimesVar4>);
          default: 
            return (<ResponseTimesVar1 data={chartData}></ResponseTimesVar1>);
        }
      case 6:
        if (!askFollowUp) {
          setAskFollowUp(true);
        }
        switch (currentQuestionVariant.variantId) {
          case 1:
            return (<TopPaidVar1 data={chartData}></TopPaidVar1>);
          default: 
            return (<TopPaidVar2 data={chartData}></TopPaidVar2>);
        }
      default:
        return (<DroughtVar1 data={chartData}></DroughtVar1>);
    }
  }

  const getRandomArrayElement = (array, forceQuestion=false, questionIndex=null, isQuestion=true) => {
    if (forceQuestion && isQuestion) {
      return array[questionIndex];
    }
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