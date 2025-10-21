import { useNavigate } from "react-router-dom";
import { Shield, FileText, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const Dashboard = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "Guest";

  const handleLogout = () => {
    localStorage.removeItem("userName");
    navigate("/");
  };

  const handleDeclareIncident = () => {
    navigate("/declare-incident");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-card">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Icosnet Assurance</h1>
          </div>
          <Button variant="ghost" onClick={handleLogout} className="gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Welcome Message */}
          <div className="animate-fade-up">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, {userName}
            </h2>
            <p className="text-muted-foreground">
              Manage your insurance profile and report incidents with ease.
            </p>
          </div>

          {/* Profile Card */}
          <Card className="p-8 shadow-card animate-scale-in">
            <div className="flex items-start gap-6">
              <img
                src={profilePlaceholder}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <User className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Your Profile</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-4">
                    <span className="text-muted-foreground font-medium">Name:</span>
                    <span className="text-foreground">{userName}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-muted-foreground font-medium">Member ID:</span>
                    <span className="text-foreground">IC-{Math.floor(Math.random() * 100000).toString().padStart(5, '0')}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-muted-foreground font-medium">Policy Status:</span>
                    <span className="text-accent font-semibold">Active</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-muted-foreground font-medium">Coverage:</span>
                    <span className="text-foreground">Comprehensive Protection</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Action Card */}
          <Card className="p-8 shadow-card bg-gradient-card animate-fade-up">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-lg">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Need to Report an Incident?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Quickly report any incident such as car accidents, property damage, or other claims. 
                  Our team will review your submission and contact you within 24 hours.
                </p>
                <Button variant="hero" size="lg" onClick={handleDeclareIncident} className="gap-2">
                  <FileText className="w-5 h-5" />
                  Declare an Incident
                </Button>
              </div>
            </div>
          </Card>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-up">
            <Card className="p-6 shadow-card hover:shadow-soft transition-all">
              <h4 className="font-semibold text-foreground mb-2">24/7 Support</h4>
              <p className="text-sm text-muted-foreground">
                Our dedicated team is available around the clock to assist you with any questions or concerns.
              </p>
            </Card>
            <Card className="p-6 shadow-card hover:shadow-soft transition-all">
              <h4 className="font-semibold text-foreground mb-2">Fast Claims Processing</h4>
              <p className="text-sm text-muted-foreground">
                Most claims are reviewed within 24 hours, ensuring you get the support you need quickly.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
