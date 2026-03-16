import React,{useState} from "react";
import axios from "axios";

function PredictionForm(){

const [x,setX]=useState("");
const [y,setY]=useState("");
const [z,setZ]=useState("");

const [result,setResult]=useState(null);
const [file,setFile]=useState(null);
const [tableData,setTableData]=useState([]);

const predict = async () =>{

const res = await axios.post("http://127.0.0.1:8000/predict",{
x_error:parseFloat(x),
y_error:parseFloat(y),
z_error:parseFloat(z)
});

setResult(res.data);

};

const uploadCSV = async () =>{

const formData = new FormData();

formData.append("file",file);

const res = await axios.post(
"http://127.0.0.1:8000/predict-csv",
formData,
{headers:{"Content-Type":"multipart/form-data"}}
);

setTableData(res.data.predictions);

};

return(

<div style={{marginTop:"30px"}}>

<h2 style={{color:"black"}}>
Satellite Prediction
</h2>

<div>

<input placeholder="X Error" onChange={(e)=>setX(e.target.value)}/>

<input placeholder="Y Error" onChange={(e)=>setY(e.target.value)} style={{marginLeft:"10px"}}/>

<input placeholder="Z Error" onChange={(e)=>setZ(e.target.value)} style={{marginLeft:"10px"}}/>

<button onClick={predict} style={{marginLeft:"10px"}}>Predict</button>

</div>

{result && (

<div style={{ marginTop:"20px", color:"black" }}>

<p>Error: {result.predicted_sat_clock_error}</p>

<p>Status: {result.status}</p>

</div>

)}

<hr style={{margin:"40px"}}/>

<h3 style={{color:"black"}}>
Test using CSV dataset
</h3>

<input type="file" onChange={(e)=>setFile(e.target.files[0])}/>

<button onClick={uploadCSV} style={{marginLeft:"10px"}}>Upload</button>

{tableData.length>0 &&(

<table border="1" style={{marginTop:"20px"}}>

<thead>

<tr>

<th>Index</th>
<th>Predicted Error</th>

</tr>

</thead>

<tbody>

{tableData.map((item,index)=>(

<tr key={index}>

<td>{index+1}</td>
<td>{item}</td>

</tr>

))}

</tbody>

</table>

)}

</div>

);

}

export default PredictionForm;