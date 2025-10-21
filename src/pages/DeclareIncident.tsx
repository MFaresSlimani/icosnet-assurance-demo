import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, ArrowLeft, Camera, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const DeclareIncident = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "Guest";
  const [step, setStep] = useState<"form" | "verify" | "success">("form");
  const [formData, setFormData] = useState({
    incidentType: "",
    date: "",
    location: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.incidentType || !formData.date || !formData.location || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    setStep("verify");
  };

  const handleVerify = () => {
    // Simulate liveness verification
    setTimeout(() => {
      setStep("success");
    }, 1500);
  };

  const handleBackToDashboard = () => {
    navigate("/dashboard");
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
              <p className="text-xs text-muted-foreground font-light tracking-wide">Claim Management</p>
            </div>
          </div>
          <Button variant="outline" onClick={() => navigate("/dashboard")} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Return to Dashboard
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          {step === "form" && (
            <div className="animate-scale-in space-y-8">
              <div>
                <div className="inline-block mb-3 px-4 py-1.5 bg-gradient-gold/10 rounded-full border border-gold/20">
                  <p className="text-gold font-medium tracking-wider text-xs">CLAIM SUBMISSION</p>
                </div>
                <h2 className="text-4xl font-serif font-bold text-foreground mb-3">File a Claim</h2>
                <p className="text-muted-foreground font-light text-lg">
                  Please provide comprehensive details about your incident for our review.
                </p>
              </div>

              <Card className="p-10 bg-gradient-glass backdrop-blur-sm border border-border/50 shadow-luxury">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-3">
                    <Label htmlFor="incidentType" className="text-foreground font-medium">Incident Category *</Label>
                    <Select
                      value={formData.incidentType}
                      onValueChange={(value) => setFormData({ ...formData, incidentType: value })}
                    >
                      <SelectTrigger className="h-12 bg-white/50 border-border/50 focus:border-primary/50">
                        <SelectValue placeholder="Select incident type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="car-accident">Vehicle Accident</SelectItem>
                        <SelectItem value="property-damage">Property Damage</SelectItem>
                        <SelectItem value="theft">Theft or Loss</SelectItem>
                        <SelectItem value="other">Other Incident</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="date" className="text-foreground font-medium">Date of Incident *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="h-12 bg-white/50 border-border/50 focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="location" className="text-foreground font-medium">Location *</Label>
                    <Input
                      id="location"
                      placeholder="Where did the incident occur?"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="h-12 bg-white/50 border-border/50 focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="description" className="text-foreground font-medium">Detailed Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Please provide a comprehensive description of what occurred..."
                      rows={7}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="bg-white/50 border-border/50 focus:border-primary/50 resize-none"
                    />
                  </div>

                  <Button type="submit" variant="luxury" className="w-full shadow-luxury" size="lg">
                    Proceed to Verification
                  </Button>
                </form>
              </Card>
            </div>
          )}

          {step === "verify" && (
            <Card className="p-12 bg-gradient-glass backdrop-blur-sm border border-border/50 shadow-luxury animate-scale-in text-center">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-luxury rounded-full mb-6 shadow-soft animate-float">
                  <Camera className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-3">Identity Verification</h2>
                <p className="text-muted-foreground font-light text-lg mb-8 max-w-md mx-auto">
                  For security, we need to verify your identity before processing this claim.
                </p>
              </div>

              <div className="mb-10 flex justify-center">
                <div className="relative">
                  <img
                    src={profilePlaceholder}
                    alt="Profile verification"
                    className="w-40 h-40 rounded-2xl object-cover border-4 border-gold/20 shadow-gold animate-float"
                  />
                  <div className="absolute -bottom-2 -right-2 p-2 bg-gradient-gold rounded-full shadow-gold">
                    <Sparkles className="w-5 h-5 text-foreground" />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-sm text-muted-foreground font-light">
                  Verifying identity using secure biometric data...
                </p>
                <Button variant="luxury" size="lg" onClick={handleVerify} className="w-full shadow-luxury">
                  Complete Verification
                </Button>
              </div>
            </Card>
          )}

          {step === "success" && (
            <Card className="p-12 bg-gradient-glass backdrop-blur-sm border border-gold/30 shadow-luxury animate-scale-in text-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-gold rounded-full mb-6 shadow-gold animate-float">
                    <CheckCircle2 className="w-14 h-14 text-foreground" />
                  </div>
                  <h2 className="text-4xl font-serif font-bold text-foreground mb-3">Claim Submitted</h2>
                  <p className="text-muted-foreground font-light text-lg mb-8 max-w-md mx-auto">
                    Your claim has been successfully filed and is now under review.
                  </p>
                </div>

                <Card className="p-8 bg-muted/30 border-muted mb-10 text-left">
                  <h3 className="font-serif font-semibold text-foreground mb-6 text-xl">Claim Summary</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-muted-foreground font-light">Type</span>
                      <span className="text-foreground font-medium">{formData.incidentType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-muted-foreground font-light">Date</span>
                      <span className="text-foreground font-medium">{formData.date}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-muted-foreground font-light">Location</span>
                      <span className="text-foreground font-medium">{formData.location}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-muted-foreground font-light">Submitted by</span>
                      <span className="text-foreground font-medium">{userName}</span>
                    </div>
                  </div>
                </Card>

                <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <p className="text-sm text-foreground font-medium">
                    Our premium team will contact you within 24 hours
                  </p>
                </div>

                <Button variant="gold" size="lg" onClick={handleBackToDashboard} className="w-full shadow-gold">
                  Return to Dashboard
                </Button>
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default DeclareIncident;
