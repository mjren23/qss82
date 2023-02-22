import { Bar, CartesianGrid, XAxis, YAxis, BarChart, Label, Tooltip } from 'recharts';
import CustomAxisTick from './CustomAxisTick';

function Soccer2017Var2(props) {
  const data = props.data;
  
  return (
    <div>
      <div style={{"textAlign": "center", "fontSize": "larger"}}>
        Highest Major League Soccer salaries in 2017 per team 
      </div>
      <BarChart width={1200} height={400} data={data} margin={{ top: 10, right: 30, left: 100, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="club" interval={0} tick={<CustomAxisTick></CustomAxisTick>}/>
        <YAxis domain={[0, 7500000]} tickCount={6}>
          <Label value="Highest salary paid" position='insideLeft' offset={-50} angle='-90'/>
        </YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey="max_salary" fill="#8884d8" />
      </BarChart>
    </div>
  );

}


export default Soccer2017Var2;