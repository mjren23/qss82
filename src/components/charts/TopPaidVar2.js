import { Bar, CartesianGrid, XAxis, YAxis, Line, Label, Legend, LineChart, Tooltip } from 'recharts';
import CustomizedDot from './CustomizedDot';
import './TopPaidVar2.css';
import david from '../../resources/david.webp';
import federico from '../../resources/federico.jpeg';
import juan from '../../resources/juan.webp';
import landon from '../../resources/landon.jpeg';
import robbie from '../../resources/robbie.webp';

function TopPaidVar2(props) {
  const data = props.data;

  const salaryFormatter = (salary) => {
    return "$" + salary.toLocaleString("en-US");
  }

  const getId = (item) => {
    return "LA";
  }

  
  return (
    <div>
      <div style={{"textAlign": "center", "fontSize": "larger"}}>
        Top Paid MLS Players, 2007-2017 
      </div>
      <LineChart width={1200} height={400} data={data} margin={{ top: 10, right: 30, left: 100, bottom: 20 }} >
        <XAxis dataKey="year" interval={0} />
        <YAxis dataKey="base_salary" type="number" domain={[0, 8000000]} tickFormatter={salary => salaryFormatter(salary)}>
          <Label value="Salary" position='insideLeft' offset={-50} angle='-90' style={{ textAnchor: 'middle' }}/>
        </YAxis>
        <Line type="monotone" stroke="#f0244d" dataKey="Landon Donovan" isAnimationActive={false} dot={<CustomizedDot></CustomizedDot>}/>
        <Line type="monotone" stroke="#00244d" dataKey="Federico Higuain" isAnimationActive={false} dot={<CustomizedDot></CustomizedDot>}/>
        <Line type="monotone" stroke="#3f34bf" dataKey="David Beckham" isAnimationActive={false} dot={<CustomizedDot></CustomizedDot>}/>
        <Line type="monotone" stroke="#28c738" dataKey="Robbie Keane" isAnimationActive={false} dot={<CustomizedDot></CustomizedDot>}/> 
        <Line type="monotone" stroke="#eda218" dataKey="Juan Pablo Angel" isAnimationActive={false} dot={<CustomizedDot></CustomizedDot>}/>
        <Legend></Legend>
        <Tooltip></Tooltip>
      </LineChart>
      <div className='players'>
        <img src={landon} alt="david" width={100} ></img>
        <img src={federico} alt="david" width={100} ></img>
        <img src={david} alt="david" width={100} ></img>
        <img src={robbie} alt="david" width={100} ></img>
        <img src={juan} alt="david" width={100}></img>
      </div>
    </div>
  );

}


export default TopPaidVar2;