import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Award, BookOpen, Brain, TrendingUp } from "lucide-react";
import { mockUser } from "@/lib/mockData";

const Profile = () => {
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

        {/* Profile Header */}
        <Card className="mb-6 border-border bg-gradient-to-br from-card to-card/80 shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-3xl font-bold text-primary-foreground">
                {mockUser.username.charAt(0)}
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-foreground mb-1">
                  {mockUser.username}
                </h1>
                <p className="text-muted-foreground mb-3">
                  Learning mobile payment security
                </p>
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                  <div className="text-center">
                    <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {mockUser.points}
                    </p>
                    <p className="text-xs text-muted-foreground">Total Points</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">
                      {mockUser.badges.length}
                    </p>
                    <p className="text-xs text-muted-foreground">Badges Earned</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">
                      {mockUser.completedLessons.length}
                    </p>
                    <p className="text-xs text-muted-foreground">Lessons Done</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Badges Section */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Your Badges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockUser.badges.map((badge) => (
                <div
                  key={badge.id}
                  className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-3"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                    {badge.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{badge.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {badge.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Earned {badge.earnedAt.toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
              {mockUser.badges.length === 0 && (
                <p className="text-center text-muted-foreground py-8">
                  Complete lessons and quizzes to earn badges!
                </p>
              )}
            </CardContent>
          </Card>

          {/* Progress Section */}
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-secondary" />
                  Learning Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">
                        Lessons Completed
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {mockUser.completedLessons.length}/2
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all"
                        style={{
                          width: `${(mockUser.completedLessons.length / 2) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">
                        Quizzes Completed
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {mockUser.completedQuizzes.length}/1
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full bg-gradient-to-r from-secondary to-accent transition-all"
                        style={{
                          width: `${(mockUser.completedQuizzes.length / 1) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-gradient-to-br from-success/5 to-success/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-success" />
                  Keep Going!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  You're making great progress! Continue learning to improve your mobile payment security knowledge.
                </p>
                <div className="flex gap-2">
                  <Link to="/learn" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Continue Learning
                    </Button>
                  </Link>
                  <Link to="/quiz" className="flex-1">
                    <Button variant="gradient" className="w-full">
                      Take Quiz
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
