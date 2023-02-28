import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useState, useEffect, useRef } from 'react';
import Papa from 'papaparse';
import { doc, updateDoc, increment, getFirestore } from "firebase/firestore";
import DroughtVar1 from './charts/DroughtVar1';
import DroughtVar2 from './charts/DroughtVar2';
import DroughtVar3 from './charts/DroughtVar3';
import SoccerVar1 from './charts/SoccerVar1';
import SoccerVar2 from './charts/SoccerVar2';
import Soccer2017Var1 from './charts/Soccer2017Var1';
import Soccer2017Var2 from './charts/Soccer2017Var2';
import QuestionContainer from './QuestionContainer';
import questions from '../data/questions.json';
import Soccer2017Var3 from './charts/Soccer2017Var3';
import Soccer2017Var4 from './charts/Soccer2017Var4';
import ResponseTimesVar1 from './charts/ResponseTimesVar1';
import ResponseTimesVar2 from './charts/ResponseTimesVar2';
import ResponseTimesVar3 from './charts/ResponseTimesVar3';
import ResponseTimesVar4 from './charts/ResponseTimesVar4';



function ChartTesting(props) {

  const storage = getStorage();
  const db = getFirestore(props.fireBaseApp);

  const [droughtData, setDroughtData] = useState();
  const [soccerData, setSoccerData] = useState();
  const [positionData, setPositionData] = useState();
  const [fireData, setFireData] = useState();

  useEffect(() => {
    const parsed = JSON.parse(JSON.stringify(questions));
    console.log(parsed);

    const droughtDataPath = parsed[0].dataFilePath;
    const positionDataPath = parsed[1].dataFilePath;
    const soccerDataPath = parsed[2].dataFilePath;
    const fireDataPath = parsed[4].dataFilePath;
    
    var dataRef = ref(storage, droughtDataPath);
    getDownloadURL(dataRef)
      .then((url) => {
    
        Papa.parse(url, {
          header: true,
          download: true,
          complete: response => {
            setDroughtData(response.data);
          }
        });
        
      })
      .catch((error) => {

      });

    dataRef = ref(storage, soccerDataPath);
    getDownloadURL(dataRef)
      .then((url) => {
    
        Papa.parse(url, {
          header: true,
          download: true,
          complete: response => {
            setSoccerData(response.data);
          }
        });
        
      })
      .catch((error) => {

      });

    dataRef = ref(storage, positionDataPath);
    getDownloadURL(dataRef)
      .then((url) => {
    
        Papa.parse(url, {
          header: true,
          download: true,
          complete: response => {
            setPositionData(response.data);
          }
        });
        
      })
      .catch((error) => {

      });

    dataRef = ref(storage, fireDataPath);
    getDownloadURL(dataRef)
      .then((url) => {
    
        Papa.parse(url, {
          header: true,
          download: true,
          complete: response => {
            setFireData(response.data);
          }
        });
        
      })
      .catch((error) => {

      });
  }, []);

  return(
    <div className="ChartTestingContainer">
      <DroughtVar1 data={droughtData}></DroughtVar1>
      <DroughtVar2 data={droughtData}></DroughtVar2>
      <DroughtVar3 data={droughtData}></DroughtVar3>
      <Soccer2017Var1 data={soccerData}></Soccer2017Var1>
      <Soccer2017Var2 data={soccerData}></Soccer2017Var2>
      <Soccer2017Var3 data={soccerData}></Soccer2017Var3>
      <Soccer2017Var4 data={soccerData}></Soccer2017Var4>
      <SoccerVar1 data={positionData}></SoccerVar1>
      <SoccerVar2 data={positionData}></SoccerVar2>
      <ResponseTimesVar1 data={fireData}></ResponseTimesVar1>
      <ResponseTimesVar2 data={fireData}></ResponseTimesVar2>
      <ResponseTimesVar3 data={fireData}></ResponseTimesVar3>
      <ResponseTimesVar4 data={fireData}></ResponseTimesVar4>
    </div>
  );
}


export default ChartTesting;