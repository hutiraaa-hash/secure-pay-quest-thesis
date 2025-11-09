import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Brain, Gamepad2, Trophy, User, BarChart3, Shield } from "lucide-react";
import { mockUser } from "@/lib/mockData";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">SecurePay Learn</h1>
            </div>
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* User Info Card */}
        <Card className="mb-8 overflow-hidden border-border bg-gradient-to-br from-card to-card/80 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Welcome back,</p>
                <h2 className="text-2xl font-bold text-foreground">{mockUser.username}</h2>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Total Points</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {mockUser.points}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link to="/learn" className="group">
            <Card className="h-full border-border bg-card transition-all hover:shadow-lg hover:-translate-y-1">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Learn</h3>
                  <p className="text-sm text-muted-foreground">
                    Interactive lessons on mobile payment security
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/quiz" className="group">
            <Card className="h-full border-border bg-card transition-all hover:shadow-lg hover:-translate-y-1">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 transition-colors group-hover:bg-secondary/20">
                  <Brain className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Quiz</h3>
                  <p className="text-sm text-muted-foreground">
                    Test your knowledge and earn points
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/simulation" className="group">
            <Card className="h-full border-border bg-card transition-all hover:shadow-lg hover:-translate-y-1">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <Gamepad2 className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Simulation</h3>
                  <p className="text-sm text-muted-foreground">
                    Practice real-world scenarios
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/rankings" className="group">
            <Card className="h-full border-border bg-card transition-all hover:shadow-lg hover:-translate-y-1">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-warning/10 transition-colors group-hover:bg-warning/20">
                  <Trophy className="h-8 w-8 text-warning" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Rankings</h3>
                  <p className="text-sm text-muted-foreground">
                    See how you compare with others
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/profile" className="group">
            <Card className="h-full border-border bg-card transition-all hover:shadow-lg hover:-translate-y-1">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Profile</h3>
                  <p className="text-sm text-muted-foreground">
                    View your progress and achievements
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/results" className="group">
            <Card className="h-full border-border bg-card transition-all hover:shadow-lg hover:-translate-y-1">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 transition-colors group-hover:bg-success/20">
                  <BarChart3 className="h-8 w-8 text-success" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Review your quiz and simulation results
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
