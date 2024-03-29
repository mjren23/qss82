import { Scatter, CartesianGrid, XAxis, YAxis, ZAxis, Legend, ScatterChart, Cell, Label } from 'recharts';
import './SoccerVar1.css';

function SoccerVar1(props) {
  const data = props.data;

  const positions = []
  if (data != null) {
    positions[0] = data.filter((d) => d.position === 'D')
    positions[1] = data.filter((d) => d.position === 'F')     
    positions[2] = data.filter((d) => d.position === 'GK')     
    positions[3] = data.filter((d) => d.position === 'M')     
    positions[4] = data.filter((d) => d.position === 'MF')     
  }

  const salaryFormatter = (salary) => {
    return "$" + salary.toLocaleString("en-US");
  }
  

  return (
    <div>
      <div className="graph-title" style={{"textAlign": "center", "fontSize": "larger", "color": "#4f4f4f", "marginLeft": "10%" }}>
        Average Major League Soccer salaries by position 
      </div>
      <ScatterChart width={1000} height={500} margin={{ top: 10, right: 50, left: 50, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" type="number" domain={[2006, 2018]} ticks={[2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]}/>
        <YAxis dataKey="avg" type="number" name="salary" domain={[0, 600000]} tickFormatter={salary => salaryFormatter(salary)}>
          <Label value="Salary, USD" position='insideLeft' offset={-40} angle='-90' style={{ textAnchor: 'middle' }}/>
        </YAxis>
        <Scatter name="Defenders" data={positions[0]} line fill="#8884d8"></Scatter>
        <Scatter name="Forwards" data={positions[1]} line fill='#82ca9d'></Scatter>
        <Scatter name="Goalkeepers" data={positions[2]} line fill="#ffc658" ></Scatter>
        <Scatter name="Midfielders" data={positions[3]} line fill="#eb4634"></Scatter>
        <Legend></Legend>
      </ScatterChart>
    </div>
  );

}


export default SoccerVar1;