import { Bar, CartesianGrid, XAxis, YAxis, BarChart, Label, Tooltip } from 'recharts';
import CustomAxisTick from './CustomAxisTick';

function Soccer2017Var5(props) {
  const data = props.data;

  const dataCopy = structuredClone(data);

  if (dataCopy != null) {
    dataCopy.sort((a,b) => b.max_salary - a.max_salary);
  }

  
  return (
    <div>
      <div style={{"textAlign": "center", "fontSize": "larger"}}>
        Highest Major League Soccer salaries in 2017 per team 
      </div>
      <BarChart width={1200} height={400} data={dataCopy} margin={{ top: 10, right: 30, left: 100, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="club" interval={0} tick={<CustomAxisTick></CustomAxisTick>}/>
        <YAxis domain={[0, 7500000]} ticks={[0,500000,1500000,2500000,3500000,4500000,5500000,6500000,7500000]}>
          <Label value="Highest salary paid" position='insideLeft' offset={-50} angle='-90' style={{ textAnchor: 'middle' }}/>
        </YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey="max_salary" fill="#8884d8" />
      </BarChart>
    </div>
  );

}


export default Soccer2017Var5;