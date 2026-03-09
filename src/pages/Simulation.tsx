import { useState } from "react";

type Option = {
  text: string;
  next: string;
  risk: number;
};

type Step = {
  title: string;
  description: string;
  options: Option[];
};

const simulation: Record<string, Step> = {

  start: {
    title: "QR Code Payment",
    description:
      "You are paying at a café. A QR code appears on the counter.",
    options: [
      {
        text: "Check the merchant name before paying",
        next: "merchant",
        risk: -10
      },
      {
        text: "Scan and pay immediately",
        next: "otp",
        risk: 20
      }
    ]
  },

  merchant: {
    title: "Merchant Verification",
    description:
      "The merchant name looks slightly unusual. It says 'Coffe-Bar' instead of 'Coffee-Bar'.",
    options: [
      {
        text: "Cancel the transaction",
        next: "safe",
        risk: -20
      },
      {
        text: "Continue anyway",
        next: "sms",
        risk: 10
      }
    ]
  },

  sms: {
    title: "Suspicious SMS",
    description:
      "You receive an SMS: 'Confirm your payment immediately using this link.'",
    options: [
      {
        text: "Click the link",
        next: "fraud",
        risk: 40
      },
      {
        text: "Ignore and check your banking app",
        next: "otp",
        risk: -10
      }
    ]
  },

  otp: {
    title: "OTP Request",
    description:
      "Your banking app requests an OTP confirmation for the payment.",
    options: [
      {
        text: "Enter OTP immediately",
        next: "fraud",
        risk: 30
      },
      {
        text: "Verify the transaction first",
        next: "safe",
        risk: -10
      }
    ]
  },

  safe: {
    title: "Safe Outcome",
    description: "You avoided a potential fraud attempt.",
    options: []
  },

  fraud: {
    title: "Fraud Outcome",
    description: "You exposed yourself to a payment fraud risk.",
    options: []
  }

};

export default function Simulation() {

  const [step, setStep] = useState("start");
  const [risk, setRisk] = useState(0);

  const current = simulation[step];

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f3f4f6"
      }}
    >

      {/* PHONE FRAME */}

      <div
        style={{
          width: 300,
          height: 600,
          background: "black",
          borderRadius: 35,
          padding: 8,
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
        }}
      >

        {/* PHONE SCREEN */}

        <div
          style={{
            width: "100%",
            height: "100%",
            background: "white",
            borderRadius: 28,
            padding: 16,
            boxSizing: "border-box",
            overflowY: "auto"
          }}
        >

          <h2>{current.title}</h2>

          <p>{current.description}</p>

          {/* QR VISUAL */}

          {step === "start" && (
            <div
              style={{
                height: 160,
                background: "#000",
                borderRadius: 12,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20
              }}
            >
              <div
                style={{
                  width: 120,
                  height: 120,
                  background: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                QR
              </div>
            </div>
          )}

          {/* OTP VISUAL */}

          {step === "otp" && (
            <div
              style={{
                display: "flex",
                gap: 8,
                justifyContent: "center",
                marginBottom: 20
              }}
            >
              {[1,2,3,4,5,6].map(i => (
                <div
                  key={i}
                  style={{
                    width: 35,
                    height: 40,
                    border: "1px solid #cbd5f5",
                    borderRadius: 6
                  }}
                />
              ))}
            </div>
          )}

          {/* OPTIONS */}

          {current.options.map((option, index) => (

            <button
              key={index}
              style={{
                marginTop: 10,
                padding: 12,
                width: "100%",
                borderRadius: 10,
                border: "none",
                background: "#2563eb",
                color: "white"
              }}
              onClick={() => {
                setRisk(risk + option.risk);
                setStep(option.next);
              }}
            >
              {option.text}
            </button>

          ))}

          {/* RESULT */}

          {current.options.length === 0 && (

            <div style={{ marginTop: 20 }}>

              <h3>Your Risk Score: {risk}</h3>

              {risk <= 0 && (
                <p style={{ color: "green" }}>
                  Excellent! You made safe decisions.
                </p>
              )}

              {risk > 0 && risk < 40 && (
                <p style={{ color: "orange" }}>
                  Moderate risk behaviour detected.
                </p>
              )}

              {risk >= 40 && (
                <p style={{ color: "red" }}>
                  High fraud vulnerability detected.
                </p>
              )}

            </div>

          )}

        </div>
      </div>

    </div>
  );
}
