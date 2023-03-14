import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Legend, Label } from 'recharts';


function DroughtVar2(props) {
  const data = props.data;

  const formatXAxis = (value) => {
    if (value == null || value === "") {
      return ""
    }
    return (value.split("-"))[0] + "-" + (value.split("-"))[1];
  }


  return (
    <div>
      <div style={{"textAlign": "center", "fontSize": "larger"}}>
        Percentage of U.S. land in status D3 or D4 drought by year and month
      </div>
      <AreaChart width={1000} height={400} data={data} margin={{ top: 10, right: 30, left: 30, bottom: 60 }}>
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
        <XAxis dataKey="ValidEnd" reversed={true} angle="-30" tickFormatter={formatXAxis} style={{ textAnchor: 'end' }}>
          <Label value="Year" position='insideBottom' offset={-40} angle='0'/>
        </XAxis>
        <YAxis type="number" domain={[0, 40]} >
          <Label value="Percentage of land" position='insideLeft' offset={0} angle='-90' style={{ textAnchor: 'middle' }}/>
        </YAxis>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Area type="monotone" dataKey="D3" stroke="#f0931a" fillOpacity={1} fill="url(#colorD3)" />
        <Area type="monotone" dataKey="D4" stroke="#f0244d" fillOpacity={1} fill="url(#colorD4)" />
        <Legend layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ paddingLeft: "20px", paddingBottom: "50px"}}/>
      </AreaChart>
    </div>
  );

}


export default DroughtVar2;