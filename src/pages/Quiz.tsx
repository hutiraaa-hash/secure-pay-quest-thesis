import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { quizQuestions } from "@/lib/mockData";
import { toast } from "sonner";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      toast.error("Please select an answer");
      return;
    }

    setShowFeedback(true);
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore(score + 20);
      toast.success("Correct! +20 points", {
        description: currentQuestion.explanation,
      });
    } else {
      toast.error("Incorrect", {
        description: currentQuestion.explanation,
      });
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setCompleted(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  if (completed) {
    const percentage = (score / (quizQuestions.length * 20)) * 100;
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 p-4">
        <div className="container mx-auto max-w-2xl py-12">
          <Card className="border-border shadow-lg">
            <CardContent className="flex flex-col items-center gap-6 p-12 text-center">
              <div
                className={`flex h-24 w-24 items-center justify-center rounded-full ${
                  percentage >= 80
                    ? "bg-success/20"
                    : percentage >= 60
                    ? "bg-warning/20"
                    : "bg-destructive/20"
                }`}
              >
                <CheckCircle2
                  className={`h-12 w-12 ${
                    percentage >= 80
                      ? "text-success"
                      : percentage >= 60
                      ? "text-warning"
                      : "text-destructive"
                  }`}
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Quiz Complete!
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  You scored {score} out of {quizQuestions.length * 20} points
                </p>
                <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {percentage.toFixed(0)}% Correct
                </p>
              </div>
              {percentage >= 80 && (
                <p className="text-success font-medium">
                  Excellent work! You've mastered mobile payment security! 🎉
                </p>
              )}
              {percentage >= 60 && percentage < 80 && (
                <p className="text-warning font-medium">
                  Good job! Review the lessons to improve further.
                </p>
              )}
              {percentage < 60 && (
                <p className="text-destructive font-medium">
                  Keep learning! Try reviewing the lessons again.
                </p>
              )}
              <div className="flex gap-3">
                <Link to="/learn">
                  <Button variant="outline" size="lg">
                    Review Lessons
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="gradient" size="lg">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 p-4">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="text-sm text-muted-foreground">
            Question {currentQuestionIndex + 1} of {quizQuestions.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full bg-gradient-to-r from-secondary to-accent transition-all duration-500"
            style={{
              width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`,
            }}
          />
        </div>

        {/* Score Display */}
        <div className="mb-6 text-center">
          <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Current Score: {score}
          </p>
        </div>

        {/* Question Card */}
        <Card className="mb-6 border-border shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              const showCorrect = showFeedback && isCorrect;
              const showIncorrect = showFeedback && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showFeedback}
                  className={`w-full rounded-lg border-2 p-4 text-left transition-all ${
                    showCorrect
                      ? "border-success bg-success/10"
                      : showIncorrect
                      ? "border-destructive bg-destructive/10"
                      : isSelected
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card hover:border-primary/50 hover:bg-accent/50"
                  } ${showFeedback ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">{option}</span>
                    {showCorrect && <CheckCircle2 className="h-5 w-5 text-success" />}
                    {showIncorrect && <XCircle className="h-5 w-5 text-destructive" />}
                  </div>
                </button>
              );
            })}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          {!showFeedback ? (
            <Button
              variant="gradient"
              size="lg"
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
            >
              Submit Answer
            </Button>
          ) : (
            <Button variant="gradient" size="lg" onClick={handleNext}>
              {isLastQuestion ? "View Results" : "Next Question"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
