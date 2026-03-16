import Header from "./components/Header";
import OrbitAnimation from "./components/OrbitAnimation";
import Footer from "./components/Footer";
import PredictionForm from "./components/PredictionForm";
import ErrorGraph from "./components/ErrorGraph";
import DashboardCard from "./components/DashboardCard";

function App(){

return(

<div style={{
background:"#eee4f0",
minHeight:"100vh",
color:"white"
}}>

<Header/>

<div style={{
display:"flex",
justifyContent:"center",
gap:"20px",
marginTop:"20px"
}}>

<DashboardCard title="Active Satellites" value="12"/>

<DashboardCard title="AI Status" value="Running"/>

<DashboardCard title="System Health" value="Good"/>

</div>

<div style={{
display:"flex",
flexDirection:"column",
alignItems:"center"
}}>

<PredictionForm/>
<OrbitAnimation/>

<ErrorGraph/>

</div>

<Footer/>

</div>

);

}

export default App;