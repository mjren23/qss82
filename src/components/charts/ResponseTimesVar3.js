import { useEffect, useState } from 'react';
import { Bar, CartesianGrid, XAxis, YAxis, BarChart, Label, Legend } from 'recharts';
import CustomAxisTick from './CustomAxisTick';

function ResponseTimesVar3(props) {
  const data = props.data;
  var clean = [];
  if (data != null) {
    clean = structuredClone(data);

    clean.splice(clean.length - 1, 1);
  
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return minutes.toString() + ":" + seconds.toString().padStart(2, '0'); 
  }
  
  return (
    <div>
      <div style={{"textAlign": "center", "fontSize": "larger"}}>
        Response times by category, Boulder CO Fire Department  
      </div>
      <BarChart width={1200} height={400} data={clean} margin={{ top: 10, right: 30, left: 100, bottom: 20 }} >
        <XAxis dataKey="year" interval={0} />
        <YAxis dataKey="time" type="number" domain={[0, 800]} tickCount={6} tickFormatter={time => formatTime(time)}>
          <Label value="Minutes" position='insideLeft' offset={-20} angle='-90' style={{ textAnchor: 'middle' }}/>
        </YAxis>
        <Bar dataKey="Alarm Handling" fill="#0c375e" />
        <Bar dataKey="Turnout Time" fill="#0a8494" />
        <Bar dataKey="First Arriving Travel Time" fill="#7a0420" />
        <Bar dataKey="ERF Travel Time" fill="#c41a1a" />
        <Bar dataKey="First Arriving Total Time" fill="#f28a3a" />
        <Bar dataKey="ERF Total Time" fill="#f2eb5c" />
        <Legend></Legend>
      </BarChart>
    </div>
  );

}


export default ResponseTimesVar3;