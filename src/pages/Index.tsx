import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, CheckCircle, Clock, HeadphonesIcon, Sparkles, Award, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import LoginModal from "@/components/LoginModal";
import heroImage from "@/assets/hero-luxury.jpg";

const Index = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const userName = localStorage.getItem("userName");
    if (userName) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const features = [
    {
      icon: Award,
      title: "Premium Protection",
      description: "Elite coverage designed for discerning clients who demand excellence",
    },
    {
      icon: Sparkles,
      title: "Seamless Experience",
      description: "Sophisticated digital platform with instant claim processing",
    },
    {
      icon: Lock,
      title: "Absolute Security",
      description: "Bank-grade encryption and data protection for complete peace of mind",
    },
  ];

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
      <header className="relative bg-white/80 backdrop-blur-glass border-b border-border/50 shadow-card sticky top-0 z-50">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-luxury rounded-lg shadow-soft">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-foreground tracking-tight">Icosnet Assurance</h1>
              <p className="text-xs text-muted-foreground font-light tracking-wide">Premium Protection</p>
            </div>
          </div>
          <Button variant="luxury" size="lg" onClick={() => setLoginOpen(true)} className="gap-2">
            <Lock className="w-4 h-4" />
            Client Access
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-luxury opacity-95" />
        
        {/* Hero image */}
        <img
          src={heroImage}
          alt="Premium insurance protection"
          className="absolute inset-0 w-full h-full object-cover mix-blend-soft-light opacity-40"
        />
        
        {/* Floating orbs for luxury effect */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="relative container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl animate-fade-up">
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-white/90 font-light tracking-wider text-sm">ESTABLISHED EXCELLENCE SINCE 1995</p>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Elevate Your <br />
              <span className="bg-gradient-gold bg-clip-text text-transparent">Peace of Mind</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/85 mb-12 font-light leading-relaxed max-w-2xl">
              Experience unparalleled protection with Icosnet Assurance — where sophistication meets absolute security.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="gold" 
                size="lg" 
                onClick={() => setLoginOpen(true)} 
                className="text-lg px-10 py-7 shadow-gold"
              >
                Access Your Account
              </Button>
              <Button 
                variant="glass" 
                size="lg" 
                className="text-lg px-10 py-7"
              >
                Discover More
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="relative container mx-auto px-6 py-32">
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-block mb-4 px-5 py-1.5 bg-gradient-gold/10 rounded-full border border-gold/20">
            <p className="text-gold font-medium tracking-wider text-sm">UNMATCHED EXCELLENCE</p>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            The Icosnet Distinction
          </h3>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Where traditional values meet innovative solutions, creating an insurance experience beyond compare.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group p-10 bg-gradient-glass backdrop-blur-sm border border-border/50 hover:border-gold/30 shadow-card hover:shadow-luxury transition-all duration-700 animate-scale-in text-center relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-luxury rounded-2xl mb-6 shadow-soft group-hover:shadow-gold transition-all duration-700 group-hover:scale-110">
                  <feature.icon className="w-9 h-9 text-white" />
                </div>
                <h4 className="text-2xl font-serif font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-500">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed font-light">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-luxury py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
        <div className="relative container mx-auto px-6 text-center animate-fade-up">
          <div className="max-w-4xl mx-auto">
            <Sparkles className="w-12 h-12 text-gold mx-auto mb-6 animate-glow" />
            
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Begin Your Journey to <br />Complete Protection
            </h3>
            
            <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Join an exclusive community of clients who have discovered the perfect balance of luxury and security.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="gold" 
                size="lg" 
                onClick={() => setLoginOpen(true)} 
                className="text-lg px-12 py-7 shadow-gold"
              >
                <Lock className="w-5 h-5 mr-2" />
                Client Portal
              </Button>
              <Button 
                variant="glass" 
                size="lg" 
                className="text-lg px-12 py-7"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-card border-t border-border/50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-luxury rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-serif font-bold text-foreground">Icosnet Assurance</h4>
                <p className="text-xs text-muted-foreground font-light tracking-wide">Premium Protection Since 1995</p>
              </div>
            </div>
            
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-border to-transparent" />
            
            <div className="text-center space-y-2">
              <p className="text-muted-foreground font-light">© 2025 Icosnet Assurance. All rights reserved.</p>
              <p className="text-sm text-muted-foreground/70 font-light italic">
                Demonstration Platform — Showcasing Excellence in Digital Insurance
              </p>
            </div>
          </div>
        </div>
      </footer>

      <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />
    </div>
  );
};

export default Index;
