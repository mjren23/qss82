import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';


function DroughtVar1(props) {
  const data = props.data;

  return (
    <LineChart width={800} height={400} data={data}>
      <text x={800 / 2} y={40} fill="black" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="14">Percentage of land in D3 and D4 drought status</tspan>
      </text>
      <Line type="monotone" stroke="#f0931a"  dataKey="D3" dot={false}/>
      <Line type="monotone" stroke="#f0244d"  dataKey="D4" dot={false}/>
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="ValidEnd" reversed={true}/>
      <YAxis type="number" domain={[0, 50]} />
      <Legend />
    </LineChart>
  );

}


export default DroughtVar1;