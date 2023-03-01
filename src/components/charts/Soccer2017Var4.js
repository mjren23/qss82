import { Bar, CartesianGrid, XAxis, YAxis, BarChart, Label, Cell, LabelList } from 'recharts';
import CustomAxisTick from './CustomAxisTick';
import ImageAxisTick from './ImageAxisTick';
import mlsLogo from '../../resources/mls_logo.jpg';

function Soccer2017Var4(props) {
  const data = props.data;

  // const barColors = ["#d11a17", "#1429b3", '#ffffff']

  if (data == null) {
    return (<div></div>);
  }
  
  return (
    <div>
      <div style={{"textAlign": "center", "fontSize": "larger"}}>
        <img src={mlsLogo} alt="mls logo" style={{"width": "50px", "height": "50"}}></img>
        Highest Major League Soccer salaries in 2017 per team 
        <img src={mlsLogo} alt="mls logo" style={{"width": "50px", "height": "50"}}></img>
      </div>
      <BarChart width={1200} height={460} data={data} margin={{ top: 10, right: 30, left: 100, bottom: 65 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="club" interval={0} tick={<ImageAxisTick></ImageAxisTick>}/>
        <YAxis domain={[0, 7500000]} tickCount={6}>
          <Label value="Highest salary paid" position='insideLeft' offset={-50} angle='-90' style={{ textAnchor: 'middle' }}/>
        </YAxis>
        <Bar dataKey="max_salary" >
          {
              data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="#8884d8" />
              ))
          }
        </Bar>
      </BarChart>
    </div>
  );

}


export default Soccer2017Var4;