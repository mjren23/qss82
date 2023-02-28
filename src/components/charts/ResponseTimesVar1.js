import { useEffect, useState } from 'react';
import { Bar, CartesianGrid, XAxis, YAxis, BarChart, Label, Legend } from 'recharts';
import CustomAxisTick from './CustomAxisTick';

function ResponseTimesVar1(props) {
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
        <Bar dataKey="Alarm Handling" fill="#8884d8" />
        <Bar dataKey="Turnout Time" fill="#323ca8" />
        <Bar dataKey="First Arriving Travel Time" fill="#ab2b31" />
        <Bar dataKey="ERF Travel Time" fill="#7da82c" />
        <Bar dataKey="First Arriving Total Time" fill="#bd710d" />
        <Bar dataKey="ERF Total Time" fill="#27a3c2" />
        <Legend></Legend>
      </BarChart>
    </div>
  );

}


export default ResponseTimesVar1;