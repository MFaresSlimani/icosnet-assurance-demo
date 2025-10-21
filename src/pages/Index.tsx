import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, CheckCircle, Clock, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import LoginModal from "@/components/LoginModal";
import heroImage from "@/assets/hero-insurance.jpg";

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
      icon: CheckCircle,
      title: "Comprehensive Coverage",
      description: "Protect what matters most with our all-inclusive insurance plans",
    },
    {
      icon: Clock,
      title: "24-Hour Claims",
      description: "Fast claims processing with support available around the clock",
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description: "Expert assistance whenever you need it, however you need it",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border shadow-card sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Icosnet Assurance</h1>
          </div>
          <Button variant="hero" onClick={() => setLoginOpen(true)}>
            Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <img
          src={heroImage}
          alt="Insurance protection"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl animate-fade-up">
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Protect what matters most
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              With Icosnet Assurance, peace of mind is just one click away.
            </p>
            <Button variant="hero" size="lg" onClick={() => setLoginOpen(true)} className="text-lg px-8">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12 animate-fade-up">
          <h3 className="text-3xl font-bold text-foreground mb-4">Why Choose Icosnet?</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine modern technology with personalized service to deliver insurance that truly protects you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 shadow-card hover:shadow-soft transition-all animate-scale-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-card py-20">
        <div className="container mx-auto px-6 text-center animate-fade-up">
          <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Get Protected?</h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Icosnet Assurance with their security.
          </p>
          <Button variant="hero" size="lg" onClick={() => setLoginOpen(true)} className="text-lg px-8">
            Access Your Account
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 Icosnet Assurance. All rights reserved.</p>
          <p className="text-sm mt-2">This is a demonstration platform for showcase purposes.</p>
        </div>
      </footer>

      <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />
    </div>
  );
};

export default Index;
