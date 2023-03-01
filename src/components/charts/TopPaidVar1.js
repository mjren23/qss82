import { Bar, CartesianGrid, XAxis, YAxis, Line, Label, Legend, LineChart, Tooltip } from 'recharts';

function TopPaidVar1(props) {
  const data = props.data;

  const salaryFormatter = (salary) => {
    return "$" + salary.toLocaleString("en-US");
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
        <Line type="monotone" stroke="#f0244d" dataKey="Landon Donovan" dot={{ strokeWidth: 2 }}/>
        <Line type="monotone" stroke="#00244d" dataKey="Federico Higuain" dot={{ strokeWidth: 2 }}/>
        <Line type="monotone" stroke="#3f34bf" dataKey="David Beckham" dot={{ strokeWidth: 2 }}/>
        <Line type="monotone" stroke="#28c738" dataKey="Robbie Keane" dot={{ strokeWidth: 2 }}/> 
        <Line type="monotone" stroke="#eda218" dataKey="Juan Pablo Angel" dot={{ strokeWidth: 2 }}/>
        <Legend></Legend>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );

}


export default TopPaidVar1;