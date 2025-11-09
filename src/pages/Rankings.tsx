import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Trophy, Medal, Award } from "lucide-react";
import { rankings } from "@/lib/mockData";

const Rankings = () => {
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-6 w-6 text-warning" />;
    if (rank === 2) return <Medal className="h-6 w-6 text-muted-foreground" />;
    if (rank === 3) return <Award className="h-6 w-6 text-warning/60" />;
    return null;
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return "from-warning/20 to-warning/5";
    if (rank === 2) return "from-muted/20 to-muted/5";
    if (rank === 3) return "from-warning/10 to-warning/5";
    return "from-card to-card";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 p-4">
      <div className="container mx-auto max-w-3xl">
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Leaderboard</h1>
          <p className="text-muted-foreground">
            See how you rank against other learners
          </p>
        </div>

        {/* Rankings List */}
        <div className="space-y-3">
          {rankings.map((user) => (
            <Card
              key={user.username}
              className={`border-border transition-all hover:shadow-md bg-gradient-to-r ${getRankColor(
                user.rank
              )}`}
            >
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                    {user.rank <= 3 ? (
                      getRankIcon(user.rank)
                    ) : (
                      <span>{user.rank}</span>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {user.username}
                      {user.username === "SecureUser123" && (
                        <span className="ml-2 text-xs text-primary">(You)</span>
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Rank #{user.rank}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {user.points}
                  </p>
                  <p className="text-xs text-muted-foreground">points</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Motivation Card */}
        <Card className="mt-8 border-border bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle className="text-lg">Keep Learning!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Complete more lessons, quizzes, and simulations to climb the leaderboard!
            </p>
            <div className="flex gap-3">
              <Link to="/learn">
                <Button variant="outline">Learn More</Button>
              </Link>
              <Link to="/quiz">
                <Button variant="gradient">Take Quiz</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Rankings;
