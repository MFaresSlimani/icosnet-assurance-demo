import { useNavigate } from "react-router-dom";
import { Shield, FileText, User, LogOut, Sparkles } from "lucide-react";
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Elegant background pattern */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(215, 70%, 35%) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Header */}
      <header className="relative bg-white/80 backdrop-blur-glass border-b border-border/50 shadow-card">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-luxury rounded-lg shadow-soft">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-foreground tracking-tight">Icosnet Assurance</h1>
              <p className="text-xs text-muted-foreground font-light tracking-wide">Client Dashboard</p>
            </div>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Welcome Message */}
          <div className="animate-fade-up">
            <div className="inline-block mb-3 px-4 py-1.5 bg-gradient-gold/10 rounded-full border border-gold/20">
              <p className="text-gold font-medium tracking-wider text-xs">PREMIUM CLIENT PORTAL</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3">
              Welcome back, <span className="bg-gradient-gold bg-clip-text text-transparent">{userName}</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              Your comprehensive insurance management center
            </p>
          </div>

          {/* Profile Card */}
          <Card className="group p-10 bg-gradient-glass backdrop-blur-sm border border-border/50 hover:border-gold/30 shadow-card hover:shadow-luxury transition-all duration-700 animate-scale-in relative overflow-hidden">
            {/* Hover gradient effect */}
            <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
            
            <div className="relative flex items-start gap-8">
              <div className="relative">
                <img
                  src={profilePlaceholder}
                  alt="Profile"
                  className="w-32 h-32 rounded-2xl object-cover border-4 border-gold/20 shadow-gold"
                />
                <div className="absolute -bottom-2 -right-2 p-2 bg-gradient-gold rounded-full shadow-gold">
                  <Sparkles className="w-4 h-4 text-foreground" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <User className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-serif font-semibold text-foreground">Your Profile</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Full Name</p>
                    <p className="text-foreground font-medium text-lg">{userName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Member ID</p>
                    <p className="text-foreground font-medium text-lg font-mono">IC-{Math.floor(Math.random() * 100000).toString().padStart(5, '0')}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Policy Status</p>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-gold/20 text-gold border border-gold/30 rounded-full text-sm font-semibold">
                      <span className="w-2 h-2 bg-gold rounded-full animate-glow" />
                      Active Premium
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Coverage Type</p>
                    <p className="text-foreground font-medium text-lg">Elite Comprehensive</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Action Card */}
          <Card className="group p-10 bg-gradient-luxury border-0 shadow-luxury hover:shadow-gold transition-all duration-700 animate-fade-up relative overflow-hidden">
            {/* Decorative orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
            
            <div className="relative flex items-start gap-8">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-soft">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-serif font-semibold text-white mb-3">
                  Report an Incident
                </h3>
                <p className="text-white/80 mb-6 font-light leading-relaxed max-w-2xl">
                  Initiate a claim for vehicle accidents, property damage, or any covered incident. 
                  Our dedicated team will review and respond within 24 hours.
                </p>
                <Button variant="gold" size="lg" onClick={handleDeclareIncident} className="gap-2 shadow-gold">
                  <FileText className="w-5 h-5" />
                  File a Claim
                </Button>
              </div>
            </div>
          </Card>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-8 animate-fade-up">
            <Card className="group p-8 bg-gradient-glass backdrop-blur-sm border border-border/50 hover:border-primary/30 shadow-card hover:shadow-soft transition-all duration-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-luxury opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
              <div className="relative">
                <h4 className="text-xl font-serif font-semibold text-foreground mb-3">Concierge Support</h4>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Our elite support team is available 24/7 to provide personalized assistance for all your insurance needs.
                </p>
              </div>
            </Card>
            
            <Card className="group p-8 bg-gradient-glass backdrop-blur-sm border border-border/50 hover:border-primary/30 shadow-card hover:shadow-soft transition-all duration-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-luxury opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
              <div className="relative">
                <h4 className="text-xl font-serif font-semibold text-foreground mb-3">Expedited Processing</h4>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Premium members receive priority claim review with most cases resolved within 24 hours.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
