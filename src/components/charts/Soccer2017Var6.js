import { Bar, CartesianGrid, XAxis, YAxis, BarChart, Label, Tooltip } from 'recharts';
import CustomAxisTick from './CustomAxisTick';

function Soccer2017Var6(props) {
  const data = props.data;

  const dataCopy = [];


  if (data != null) {
    data.forEach((element) => {
      if (element.club !== "") {
        dataCopy.push(element);
      }
    })
  }
  
  return (
    <div>
      <div style={{"textAlign": "center", "fontSize": "larger"}}>
        Highest Major League Soccer salaries in 2017 per team 
      </div>
      <BarChart width={1200} height={600} data={dataCopy} margin={{ top: 10, right: 50, left: 20, bottom: 20 }} layout='vertical'>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis dataKey="club" type='category' interval={0}/>
        <XAxis interval={0} type='number' domain={[0, 7500000]} >
          <Label value="Highest salary paid, USD" position='insideBottom' offset={-10}></Label>
        </XAxis>
        {/* <XAxis domain={[0, 7500000]} ticks={[0,500000,1500000,2500000,3500000,4500000,5500000,6500000,7500000]}>
          <Label value="Highest salary paid"/>
        </XAxis> */}
        <Tooltip></Tooltip>
        <Bar dataKey="max_salary" fill="#8884d8" />
      </BarChart>
    </div>
  );

}


export default Soccer2017Var6;