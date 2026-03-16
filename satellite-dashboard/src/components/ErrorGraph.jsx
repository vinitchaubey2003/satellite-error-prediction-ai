import { useEffect,useState } from "react";
import axios from "axios";
import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
CartesianGrid,
ResponsiveContainer
} from "recharts";

function ErrorGraph(){

const [data,setData] = useState([]);

useEffect(()=>{

axios.get("http://127.0.0.1:8000/error-trend")
.then(res=>{

const formatted = res.data.time.map((t,i)=>({
time:t,
error:res.data.error[i]
}));

setData(formatted);

})
.catch(err=>{
console.log(err);
});

},[]);

return(

<div style={{
width:"80%",
margin:"40px auto",
background:"#1e293b",
padding:"20px",
borderRadius:"10px",
boxShadow:"0px 0px 10px rgba(0,0,0,0.6)"
}}>

<h2 style={{textAlign:"center",marginBottom:"20px"}}>
📡 Satellite Error Trend
</h2>


<ResponsiveContainer width="100%" height={350}>

<LineChart data={data}>

<CartesianGrid stroke="#475569" strokeDasharray="3 3"/>

<XAxis
dataKey="time"
tick={{fill:"white",fontSize:12}}
/>

<YAxis
tick={{fill:"white"}}
/>

<Tooltip/>

<Line
type="monotone"
dataKey="error"
stroke="#38bdf8"
strokeWidth={2}
/>

</LineChart>

</ResponsiveContainer>

</div>

);

}

export default ErrorGraph;