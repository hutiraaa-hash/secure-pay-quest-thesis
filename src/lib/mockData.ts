import { User, QuizQuestion, Lesson, SimulationScenario, Badge } from "@/types/user";

export const mockUser: User = {
  id: "1",
  username: "SecureUser123",
  points: 250,
  badges: [
    {
      id: "1",
      name: "First Steps",
      description: "Completed your first lesson",
      icon: "🎯",
      earnedAt: new Date("2024-01-15"),
    },
    {
      id: "2",
      name: "Quiz Master",
      description: "Scored 100% on a quiz",
      icon: "⭐",
      earnedAt: new Date("2024-01-20"),
    },
  ],
  completedLessons: ["lesson1"],
  completedQuizzes: ["quiz1"],
  lastActivity: new Date(),
};

export const lessons: Lesson[] = [
  {
    id: "lesson1",
    title: "Understanding NFC Payment Security",
    content: `NFC (Near Field Communication) is a wireless technology that enables secure, contactless payments by transmitting encrypted payment data over short distances (typically 4cm or less).

**How NFC Payment Works:**

1. **Tokenization**: When you add your card to a mobile wallet, your actual card number is replaced with a unique digital token. This token is what gets transmitted during payment, not your real card details.

2. **Authentication**: Before each payment, you must authenticate using biometrics (fingerprint, face recognition) or a PIN. This ensures only you can authorize transactions.

3. **Encryption**: All data transmitted between your phone and the payment terminal is encrypted, making it extremely difficult for attackers to intercept.

4. **Limited Range**: NFC only works within 4cm, making it nearly impossible for someone to secretly access your payment information from a distance.

**Key Security Benefits:**
- Your actual card number is never shared with merchants
- Each transaction uses a unique, one-time code
- Lost phones can be remotely locked or wiped
- Transactions require authentication

**Best Practices:**
- Always lock your phone with a strong PIN or biometric
- Only use NFC in trusted locations
- Monitor your transactions regularly
- Keep your mobile wallet app updated`,
    imageUrl: undefined,
  },
  {
    id: "lesson2",
    title: "Recognizing Suspicious Messages",
    content: `Phishing attacks through fake bank messages are increasingly common. Learning to identify suspicious communications is crucial for your financial security.

**Warning Signs of Suspicious Messages:**

1. **Urgency and Threats**: Messages claiming your account will be closed or locked unless you act immediately

2. **Suspicious Links**: URLs that don't match your bank's official domain (e.g., "secure-bank-verify.com" instead of "yourbank.com")

3. **Requests for Personal Information**: Legitimate banks never ask for passwords, PINs, or full card numbers via text or email

4. **Poor Grammar and Spelling**: Professional communications from banks are carefully proofread

5. **Unfamiliar Sender**: Check the sender's email address or phone number carefully

**What to Do:**
- Never click links in suspicious messages
- Contact your bank directly using official numbers
- Report phishing attempts to your bank
- Delete suspicious messages immediately
- Enable two-factor authentication on your accounts`,
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "What does tokenization do in mobile payments?",
    options: [
      "Stores your actual card number on your phone",
      "Replaces your card number with a unique digital token",
      "Makes payments faster",
      "Allows payments without authentication",
    ],
    correctAnswer: 1,
    explanation: "Tokenization replaces your real card number with a unique digital token, ensuring your actual card details are never shared during transactions.",
  },
  {
    id: "q2",
    question: "What is the typical range for NFC payment communication?",
    options: ["About 4 centimeters", "About 1 meter", "About 5 meters", "Up to 10 meters"],
    correctAnswer: 0,
    explanation: "NFC works within approximately 4 centimeters, which prevents unauthorized access from a distance and ensures secure, intentional transactions.",
  },
  {
    id: "q3",
    question: "Which of the following is a red flag in a potentially fraudulent bank message?",
    options: [
      "A message informing you about a new feature",
      "A request for your account balance",
      "An urgent demand to click a link to avoid account closure",
      "A notification about a successful transaction",
    ],
    correctAnswer: 2,
    explanation: "Urgent threats demanding immediate action via a link are classic phishing tactics. Legitimate banks never use such pressure tactics.",
  },
  {
    id: "q4",
    question: "What should you do if you receive a suspicious message claiming to be from your bank?",
    options: [
      "Click the link to verify it's real",
      "Reply with your account number to confirm",
      "Contact your bank directly using their official number",
      "Forward it to your friends to get their opinion",
    ],
    correctAnswer: 2,
    explanation: "Always contact your bank directly through official channels. Never interact with suspicious messages or click their links.",
  },
  {
    id: "q5",
    question: "What is the purpose of authentication (PIN, fingerprint, face recognition) before NFC payment?",
    options: [
      "To make the payment process slower",
      "To ensure only the authorized user can make payments",
      "To collect biometric data",
      "It's optional and not important",
    ],
    correctAnswer: 1,
    explanation: "Authentication ensures that only you, the authorized user, can approve transactions, even if someone else has physical access to your phone.",
  },
];

export const simulationScenarios: SimulationScenario[] = [
  {
    id: "sim1",
    title: "Payment Terminal Not Working",
    description: "You're at a café trying to pay for your coffee. You hold your phone to the NFC terminal, but nothing happens. The terminal appears to be working, but your payment won't process. What should you do?",
    choices: [
      {
        text: "Try removing your phone case and try again",
        isCorrect: true,
        feedback: "Excellent! Phone cases, especially thick ones or those with metal components, can interfere with NFC signals. This is a safe first step.",
        points: 20,
      },
      {
        text: "Give your phone and PIN to the cashier to try",
        isCorrect: false,
        feedback: "Never share your phone or PIN with anyone, even store employees. This compromises your security significantly.",
        points: 0,
      },
      {
        text: "Click a link the cashier shows you to 'activate mobile payment'",
        isCorrect: false,
        feedback: "This could be a phishing attempt. Never click unknown links, especially in payment situations. Use official app stores or your bank's app.",
        points: 0,
      },
      {
        text: "Use a different payment method (card, cash) and check your mobile wallet settings later",
        isCorrect: true,
        feedback: "Smart choice! When technology fails, having a backup payment method is wise. You can troubleshoot your mobile payment at a safer time.",
        points: 15,
      },
    ],
  },
  {
    id: "sim2",
    title: "Suspicious Bank Message",
    description: "You receive a text message claiming to be from your bank: 'URGENT: Suspicious activity detected on your account. Click here immediately to verify your identity or your account will be locked within 2 hours: bit.ly/bank-verify-secure'",
    choices: [
      {
        text: "Click the link immediately to prevent account closure",
        isCorrect: false,
        feedback: "This is a phishing attempt! The urgency, shortened URL, and threat are all red flags. Never click such links.",
        points: 0,
      },
      {
        text: "Reply to the message asking if it's legitimate",
        isCorrect: false,
        feedback: "Don't engage with suspicious messages. Replying confirms your number is active and may lead to more scam attempts.",
        points: 0,
      },
      {
        text: "Delete the message and call your bank directly using the number on your card or their official website",
        isCorrect: true,
        feedback: "Perfect! This is the safest approach. Always contact your bank through official channels, not through links or numbers in messages.",
        points: 25,
      },
      {
        text: "Forward it to friends to see if they received the same message",
        isCorrect: false,
        feedback: "While checking with others isn't terrible, it spreads the phishing link. Better to contact your bank directly and report the scam.",
        points: 5,
      },
    ],
  },
];

export const rankings: Array<{ username: string; points: number; rank: number }> = [
  { username: "SecurePayMaster", points: 850, rank: 1 },
  { username: "SafetyFirst2024", points: 720, rank: 2 },
  { username: "DigitalGuardian", points: 680, rank: 3 },
  { username: "SecureUser123", points: 250, rank: 4 },
  { username: "PaymentPro", points: 540, rank: 5 },
  { username: "CyberSafe", points: 490, rank: 6 },
  { username: "SmartPayer", points: 445, rank: 7 },
  { username: "TechSavvy101", points: 410, rank: 8 },
];
