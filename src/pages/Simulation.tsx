import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { paymentSimulationSteps } from "../data/paymentSimulation";

export default function Simulation(){

const navigate = useNavigate();

const [stepIndex,setStepIndex] = useState(0);
const [riskScore,setRiskScore] = useState(0);
const [feedback,setFeedback] = useState("");

const step = paymentSimulationSteps[stepIndex];

function handleChoice(option:any){

setRiskScore(riskScore + option.riskDelta);
setFeedback(option.feedback);

setTimeout(()=>{

setFeedback("");

if(stepIndex < paymentSimulationSteps.length-1){
setStepIndex(stepIndex+1);
}

},1500)

}

function renderScreen(){

switch(step.screen){

case "qr":

return(

<div style={{
height:160,
background:"#000",
borderRadius:12,
display:"flex",
justifyContent:"center",
alignItems:"center"
}}>

<div style={{
width:120,
height:120,
background:"white",
display:"flex",
justifyContent:"center",
alignItems:"center"
}}>
QR
</div>

</div>

)

case "merchant":

return(

<div style={{
background:"#f8fafc",
padding:16,
borderRadius:12,
boxShadow:"0 4px 12px rgba(0,0,0,0.1)"
}}>

<h4 style={{marginBottom:8}}>Payment Details</h4>

<div style={{
background:"white",
borderRadius:10,
padding:12,
border:"1px solid #e5e7eb"
}}>

<p style={{fontWeight:"bold"}}>Merchant</p>
<p>C0ffee House</p>

<p style={{marginTop:6,fontWeight:"bold"}}>Amount</p>
<p>$3.50</p>

<p style={{marginTop:6,fontWeight:"bold"}}>Payment Method</p>
<p>Mobile QR Payment</p>

</div>

</div>

)

case "auth":

return(

<div style={{textAlign:"center"}}>

<h3>Authenticate Payment</h3>

<button style={{
padding:10,
marginTop:10,
background:"#2563eb",
border:"none",
borderRadius:8,
color:"white"
}}>
Use Fingerprint
</button>

</div>

)

case "sms":

return(

<div style={{
background:"#e5e7eb",
padding:14,
borderRadius:12
}}>

<div style={{
display:"flex",
flexDirection:"column",
gap:10
}}>

<div style={{
alignSelf:"flex-start",
background:"white",
padding:10,
borderRadius:12,
maxWidth:220,
boxShadow:"0 2px 6px rgba(0,0,0,0.1)"
}}>

<b>Bank Alert</b><br/>

Unusual activity detected on your account.  
Tap the link below to verify your identity.

<br/><br/>

<span style={{color:"#2563eb"}}>
secure-bank-verification.com
</span>

</div>

</div>

</div>

)

case "otp":

return(

<div style={{textAlign:"center"}}>

<h3>Enter OTP</h3>

<div style={{
display:"flex",
gap:8,
justifyContent:"center",
marginTop:10
}}>

{[1,2,3,4,5,6].map(i=>(

<div key={i} style={{
width:35,
height:40,
border:"1px solid #cbd5f5",
borderRadius:6,
background:"#f8fafc"
}}/>

))}

</div>

<p style={{
marginTop:8,
fontSize:12,
color:"#64748b"
}}>
Verification code sent to your phone
</p>

</div>

)

case "result":

let message=""
let color=""

if(riskScore<=0){
message="Excellent! You demonstrated strong mobile payment security awareness."
color="green"
}
else if(riskScore<40){
message="Good job, but some decisions increased your fraud risk."
color="orange"
}
else{
message="Warning: Your behaviour indicates high vulnerability to payment fraud."
color="red"
}

return(

<div style={{textAlign:"center"}}>

<h2>Simulation Result</h2>

<div style={{fontSize:45}}>📊</div>

<p style={{
color:color,
fontWeight:"bold",
marginTop:15
}}>
{message}
</p>

<p style={{marginTop:6}}>
Final Risk Score: {riskScore}
</p>

</div>

)

default:
return null

}

}

return(

<div style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
height:"100vh",
background:"#f3f4f6"
}}>

<div style={{
width:300,
height:600,
background:"black",
borderRadius:35,
padding:8,
boxShadow:"0 20px 40px rgba(0,0,0,0.3)",
display:"flex",
flexDirection:"column"
}}>

<div style={{
flex:1,
background:"white",
borderRadius:28,
padding:16,
boxSizing:"border-box",
overflowY:"auto"
}}>

{/* 🔙 Back */}
<button 
onClick={() => navigate("/")}
style={{
background:"none",
border:"none",
color:"#2563eb",
marginBottom:6,
cursor:"pointer"
}}
>
← Back to Home
</button>

{/* 📊 Progress */}
<p style={{fontSize:12, color:"#64748b"}}>
Step {stepIndex + 1} of {paymentSimulationSteps.length}
</p>

<h4>{step.phase}</h4>

<h2>{step.icon} {step.title}</h2>

{renderScreen()}

<p>{step.description}</p>

<div style={{marginTop:14}}>

{step.options.map(option => (

<button
key={option.id}
onClick={()=>handleChoice(option)}
style={{
display:"block",
width:"100%",
padding:10,
marginBottom:8,
borderRadius:10,
border:"none",
background:"#2563eb",
color:"white"
}}
>

{option.text}

</button>

))}

</div>

{feedback && (

<div style={{
marginTop:14,
padding:10,
background:"#f1f5f9",
borderRadius:10
}}>

{feedback}

</div>

)}

<div style={{marginTop:14}}>

<strong>Risk Score:</strong> {riskScore}

</div>

</div>

</div>

</div>

)

}
