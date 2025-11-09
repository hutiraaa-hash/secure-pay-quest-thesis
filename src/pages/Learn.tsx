import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { lessons } from "@/lib/mockData";
import { toast } from "sonner";

const Learn = () => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const currentLesson = lessons[currentLessonIndex];
  const isLastLesson = currentLessonIndex === lessons.length - 1;

  const handleNext = () => {
    if (isLastLesson) {
      setCompleted(true);
      toast.success("Congratulations! You completed all lessons!", {
        description: "You earned 50 points!",
      });
    } else {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    }
  };

  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 p-4">
        <div className="container mx-auto max-w-2xl py-12">
          <Card className="border-success bg-gradient-to-br from-success/5 to-success/10">
            <CardContent className="flex flex-col items-center gap-6 p-12 text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-success/20">
                <CheckCircle2 className="h-12 w-12 text-success" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Congratulations!
                </h2>
                <p className="text-lg text-muted-foreground">
                  You've completed all available lessons and earned 50 points!
                </p>
              </div>
              <div className="flex gap-3">
                <Link to="/quiz">
                  <Button variant="gradient" size="lg">
                    Take a Quiz
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="outline" size="lg">
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
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="text-sm text-muted-foreground">
            Lesson {currentLessonIndex + 1} of {lessons.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
            style={{
              width: `${((currentLessonIndex + 1) / lessons.length) * 100}%`,
            }}
          />
        </div>

        {/* Lesson Content */}
        <Card className="mb-6 border-border shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">{currentLesson.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose prose-slate max-w-none">
              {currentLesson.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.endsWith(':**')) {
                  return (
                    <h3 key={index} className="text-lg font-semibold text-foreground mt-6 mb-3">
                      {paragraph.replace(/\*\*/g, '').replace(':', '')}
                    </h3>
                  );
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h3 key={index} className="text-lg font-semibold text-foreground mt-6 mb-3">
                      {paragraph.replace(/\*\*/g, '')}
                    </h3>
                  );
                } else {
                  return (
                    <p key={index} className="text-foreground/90 leading-relaxed">
                      {paragraph.split('\n').map((line, lineIndex) => {
                        if (line.match(/^\d+\./)) {
                          return (
                            <span key={lineIndex} className="block ml-4 my-2">
                              <strong>{line.split(':')[0]}:</strong>
                              {line.split(':').slice(1).join(':')}
                            </span>
                          );
                        }
                        if (line.startsWith('-')) {
                          return (
                            <span key={lineIndex} className="block ml-4 my-1">
                              • {line.substring(1).trim()}
                            </span>
                          );
                        }
                        return <span key={lineIndex}>{line}<br /></span>;
                      })}
                    </p>
                  );
                }
              })}
            </div>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentLessonIndex === 0}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button variant="gradient" onClick={handleNext}>
            {isLastLesson ? "Complete" : "Next"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Learn;
