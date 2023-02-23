import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Label } from 'recharts';


function DroughtVar3(props) {
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
         Percentage of U.S. land in status D3 or D4 drought 
      </div>
      <LineChart width={1000} height={400} data={data} margin={{ top: 10, right: 30, left: 30, bottom: 60 }}>
        <Line type="monotone" stroke="#767794"  dataKey="D3" dot={false}/>
        <Line type="monotone" stroke="#a3c9ae"  dataKey="D4" dot={false}/>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="ValidEnd" reversed={true} angle="-30" tickFormatter={formatXAxis} style={{ textAnchor: 'end' }}>
          <Label value="Year" position='insideBottom' offset={-40} angle='0'/>
        </XAxis>
        <YAxis type="number" domain={[0, 40]} >
          <Label value="Percentage of land" position='insideLeft' offset={0} angle='-90' style={{ textAnchor: 'middle' }}/>
        </YAxis>
        <Legend layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ paddingLeft: "20px", paddingBottom: "50px"}}/>
      </LineChart>
    </div>
  );

}


export default DroughtVar3;