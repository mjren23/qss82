import { Bar, CartesianGrid, XAxis, YAxis, BarChart, Label, Cell } from 'recharts';
import CustomAxisTick from './CustomAxisTick';
import mlsLogo from '../../resources/mls_logo.jpg';

function Soccer2017Var4(props) {
  const data = props.data;

  const barColors = ["#d11a17", "#1429b3", '#ffffff']
  
  return (
    <div>
      <div style={{"textAlign": "center", "fontSize": "larger"}}>
        <img src={mlsLogo} alt="mls logo" style={{"width": "50px", "height": "50"}}></img>
        Highest Major League Soccer salaries in 2017 per team 
        <img src={mlsLogo} alt="mls logo" style={{"width": "50px", "height": "50"}}></img>
      </div>
      <BarChart width={1200} height={400} data={data} margin={{ top: 10, right: 30, left: 100, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="club" interval={0} tick={<CustomAxisTick></CustomAxisTick>}/>
        <YAxis domain={[0, 7500000]} tickCount={6}>
          <Label value="Highest salary paid" position='insideLeft' offset={-50} angle='-90'/>
        </YAxis>
        <Bar dataKey="max_salary" stroke="#000000" strokeWidth={2} >
          {
              data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={barColors[index % 3]} />
              ))
          }
        </Bar>
      </BarChart>
    </div>
  );

}


export default Soccer2017Var4;