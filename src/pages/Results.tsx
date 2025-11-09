import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Target, TrendingUp } from "lucide-react";

const Results = () => {
  const mockResults = [
    {
      id: 1,
      type: "Quiz",
      title: "Mobile Payment Security Basics",
      score: 80,
      maxScore: 100,
      date: "2024-01-20",
      status: "completed",
    },
    {
      id: 2,
      type: "Simulation",
      title: "Payment Terminal Scenario",
      score: 20,
      maxScore: 20,
      date: "2024-01-18",
      status: "completed",
    },
    {
      id: 3,
      type: "Quiz",
      title: "Phishing Detection",
      score: 60,
      maxScore: 100,
      date: "2024-01-15",
      status: "completed",
    },
  ];

  const totalPoints = mockResults.reduce((sum, result) => sum + result.score, 0);
  const averageScore =
    (mockResults.reduce((sum, result) => sum + (result.score / result.maxScore) * 100, 0) /
      mockResults.length).toFixed(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Title */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Your Results</h1>
          <p className="text-muted-foreground">
            Track your progress and review your performance
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card className="border-border">
            <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
              <Target className="h-8 w-8 text-primary" />
              <p className="text-sm text-muted-foreground">Total Points</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {totalPoints}
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
              <TrendingUp className="h-8 w-8 text-success" />
              <p className="text-sm text-muted-foreground">Average Score</p>
              <p className="text-2xl font-bold text-success">{averageScore}%</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
              <CheckCircle2 className="h-8 w-8 text-secondary" />
              <p className="text-sm text-muted-foreground">Completed</p>
              <p className="text-2xl font-bold text-secondary">
                {mockResults.length}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Results List */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Activity History</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockResults.map((result) => {
              const percentage = (result.score / result.maxScore) * 100;
              return (
                <div
                  key={result.id}
                  className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded ${
                          result.type === "Quiz"
                            ? "bg-secondary/20 text-secondary"
                            : "bg-accent/20 text-accent"
                        }`}
                      >
                        {result.type}
                      </span>
                      <p className="font-semibold text-foreground">{result.title}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Completed on {new Date(result.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-foreground">
                      {result.score}/{result.maxScore}
                    </p>
                    <p
                      className={`text-xs font-medium ${
                        percentage >= 80
                          ? "text-success"
                          : percentage >= 60
                          ? "text-warning"
                          : "text-destructive"
                      }`}
                    >
                      {percentage.toFixed(0)}%
                    </p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Action Card */}
        <Card className="mt-6 border-border bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground mb-4">
              Ready to improve your score? Take more quizzes and practice with simulations!
            </p>
            <div className="flex gap-3 justify-center">
              <Link to="/learn">
                <Button variant="outline">Review Lessons</Button>
              </Link>
              <Link to="/quiz">
                <Button variant="gradient">Take New Quiz</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Results;
