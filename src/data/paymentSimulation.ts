import type { SimulationStep } from "../types/simulation";

export const paymentSimulationSteps: SimulationStep[] = [

{
id:"qr",
phase:"Step 1 of 6",
title:"QR Payment",
icon:"📷",
screen:"qr",
description:"You are paying at a café. A QR code is displayed on the counter.",

options:[

{
id:"check",
text:"Inspect the QR sticker first",
riskDelta:-10,
feedback:"Great! Fake QR stickers are a common scam.",
isSecure:true
},

{
id:"scan",
text:"Scan immediately",
riskDelta:20,
feedback:"Risky. Fraudsters may replace the QR code.",
isSecure:false
}

]

},

{
id:"merchant",
phase:"Step 2 of 6",
title:"Merchant Verification",
icon:"🏪",
screen:"merchant",
description:"The payment app shows merchant name 'C0ffee House' with a zero instead of O.",

options:[

{
id:"verify",
text:"Verify merchant name with the shop",
riskDelta:-10,
feedback:"Excellent. Character substitution fraud detected.",
isSecure:true
},

{
id:"continue",
text:"Proceed anyway",
riskDelta:20,
feedback:"You may be paying a fraud account.",
isSecure:false
}

]

},

{
id:"auth",
phase:"Step 3 of 6",
title:"Authentication",
icon:"🔐",
screen:"auth",
description:"The banking app asks for authentication.",

options:[

{
id:"bio",
text:"Use biometric authentication",
riskDelta:-10,
feedback:"Secure authentication used.",
isSecure:true
},

{
id:"skip",
text:"Use quick pay without authentication",
riskDelta:25,
feedback:"Authentication skipped. High fraud risk.",
isSecure:false
}

]

},

{
id:"sms",
phase:"Step 4 of 6",
title:"Suspicious SMS",
icon:"💬",
screen:"sms",
description:"You receive an SMS: 'Unusual activity detected. Tap here to verify.'",

options:[

{
id:"ignore",
text:"Ignore and open bank app directly",
riskDelta:-15,
feedback:"Correct! Never trust links in SMS.",
isSecure:true
},

{
id:"click",
text:"Click the SMS link",
riskDelta:40,
feedback:"Phishing attack!",
isSecure:false
}

]

},

{
id:"otp",
phase:"Step 5 of 6",
title:"OTP Verification",
icon:"🔢",
screen:"otp",
description:"A page asks you to enter the OTP sent to your phone.",

options:[

{
id:"check",
text:"Check transaction details first",
riskDelta:-10,
feedback:"Smart. Always verify the request.",
isSecure:true
},

{
id:"enter",
text:"Enter OTP immediately",
riskDelta:30,
feedback:"Dangerous. OTP could authorise fraud.",
isSecure:false
}

]

},

{
id:"result",
phase:"Final Result",
title:"Simulation Complete",
icon:"📊",
screen:"result",
description:"Your mobile payment security behaviour has been evaluated.",

options:[]
}

];
