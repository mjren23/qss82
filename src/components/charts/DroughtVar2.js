import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';


function DroughtVar2(props) {
  const data = props.data;

  return (
    <AreaChart width={800} height={400} data={data}>
      <defs>
        <linearGradient id="colorD3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#f0931a" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#f0931a" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorD4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#f0244d" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#f0244d" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis dataKey="ValidEnd" reversed={true} />
      <YAxis type='number' domain={[0, 50]}/>
      <CartesianGrid strokeDasharray="3 3" />
      <Area type="monotone" dataKey="D3" stroke="#f0931a" fillOpacity={1} fill="url(#colorD3)" />
      <Area type="monotone" dataKey="D4" stroke="#f0244d" fillOpacity={1} fill="url(#colorD4)" />
      <Legend></Legend>
    </AreaChart>
  );

}


export default DroughtVar2;