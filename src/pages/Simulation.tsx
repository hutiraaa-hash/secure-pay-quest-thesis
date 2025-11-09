import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { simulationScenarios } from "@/lib/mockData";
import { toast } from "sonner";

const Simulation = () => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentScenario = simulationScenarios[currentScenarioIndex];
  const isLastScenario = currentScenarioIndex === simulationScenarios.length - 1;

  const handleChoiceSelect = (choiceIndex: number) => {
    if (showFeedback) return;
    setSelectedChoice(choiceIndex);
    setShowFeedback(true);

    const choice = currentScenario.choices[choiceIndex];
    setTotalPoints(totalPoints + choice.points);

    if (choice.isCorrect) {
      toast.success(`Great choice! +${choice.points} points`, {
        description: choice.feedback,
      });
    } else {
      toast.error("Consider another approach", {
        description: choice.feedback,
      });
    }
  };

  const handleNext = () => {
    if (isLastScenario) {
      setCompleted(true);
    } else {
      setCurrentScenarioIndex(currentScenarioIndex + 1);
      setSelectedChoice(null);
      setShowFeedback(false);
    }
  };

  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 p-4">
        <div className="container mx-auto max-w-2xl py-12">
          <Card className="border-border shadow-lg">
            <CardContent className="flex flex-col items-center gap-6 p-12 text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-accent/20">
                <CheckCircle2 className="h-12 w-12 text-accent" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Scenarios Complete!
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  You've practiced real-world security situations
                </p>
                <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Total Points: {totalPoints}
                </p>
              </div>
              <p className="text-muted-foreground max-w-md">
                Remember these lessons when making real mobile payments. Stay vigilant and always prioritize your security!
              </p>
              <div className="flex gap-3">
                <Link to="/quiz">
                  <Button variant="outline" size="lg">
                    Take a Quiz
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
            Scenario {currentScenarioIndex + 1} of {simulationScenarios.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full bg-gradient-to-r from-accent to-secondary transition-all duration-500"
            style={{
              width: `${((currentScenarioIndex + 1) / simulationScenarios.length) * 100}%`,
            }}
          />
        </div>

        {/* Points Display */}
        <div className="mb-6 text-center">
          <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Total Points: {totalPoints}
          </p>
        </div>

        {/* Scenario Card */}
        <Card className="mb-6 border-border shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">{currentScenario.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 leading-relaxed mb-6">
              {currentScenario.description}
            </p>
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground mb-3">
                What would you do?
              </p>
              {currentScenario.choices.map((choice, index) => {
                const isSelected = selectedChoice === index;
                const showResult = showFeedback && isSelected;

                return (
                  <button
                    key={index}
                    onClick={() => handleChoiceSelect(index)}
                    disabled={showFeedback}
                    className={`w-full rounded-lg border-2 p-4 text-left transition-all ${
                      showResult && choice.isCorrect
                        ? "border-success bg-success/10"
                        : showResult && !choice.isCorrect
                        ? "border-warning bg-warning/10"
                        : isSelected
                        ? "border-primary bg-primary/10"
                        : "border-border bg-card hover:border-primary/50 hover:bg-accent/50"
                    } ${showFeedback ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-foreground">{choice.text}</span>
                      {showResult && choice.isCorrect && (
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                      )}
                      {showResult && !choice.isCorrect && (
                        <XCircle className="h-5 w-5 text-warning flex-shrink-0" />
                      )}
                    </div>
                    {showResult && (
                      <p className="mt-3 text-sm text-muted-foreground border-t border-border pt-3">
                        {choice.feedback}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        {showFeedback && (
          <div className="flex justify-end">
            <Button variant="gradient" size="lg" onClick={handleNext}>
              {isLastScenario ? "Complete Scenarios" : "Next Scenario"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Simulation;
