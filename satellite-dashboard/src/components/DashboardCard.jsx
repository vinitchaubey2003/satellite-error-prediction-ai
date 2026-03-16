function DashboardCard({title,value}){

return(

<div style={{
background:"#3575e3",
color:"white",
padding:"20px",
borderRadius:"10px",
width:"200px",
textAlign:"center"
}}>

<h3>{title}</h3>

<h2>{value}</h2>

</div>

);

}

export default DashboardCard;