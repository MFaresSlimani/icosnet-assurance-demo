import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, ArrowLeft, Camera, CheckCircle2 } from "lucide-react";
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-card">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Icosnet Assurance</h1>
          </div>
          <Button variant="ghost" onClick={() => navigate("/dashboard")} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {step === "form" && (
            <Card className="p-8 shadow-card animate-scale-in">
              <h2 className="text-2xl font-bold text-foreground mb-2">Declare an Incident</h2>
              <p className="text-muted-foreground mb-6">
                Please provide details about the incident you wish to report.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="incidentType">Incident Type *</Label>
                  <Select
                    value={formData.incidentType}
                    onValueChange={(value) => setFormData({ ...formData, incidentType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select incident type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="car-accident">Car Accident</SelectItem>
                      <SelectItem value="property-damage">Property Damage</SelectItem>
                      <SelectItem value="theft">Theft</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Date of Incident *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    placeholder="Where did the incident occur?"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Please describe what happened in detail..."
                    rows={6}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  Continue to Verification
                </Button>
              </form>
            </Card>
          )}

          {step === "verify" && (
            <Card className="p-8 shadow-card animate-scale-in text-center">
              <div className="mb-6">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                  <Camera className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Identity Verification</h2>
                <p className="text-muted-foreground mb-6">
                  We need to verify your identity to process this claim.
                </p>
              </div>

              <div className="mb-8 flex justify-center">
                <img
                  src={profilePlaceholder}
                  alt="Profile verification"
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary animate-float"
                />
              </div>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Verifying your identity using saved profile data...
                </p>
                <Button variant="hero" size="lg" onClick={handleVerify} className="w-full">
                  Complete Verification
                </Button>
              </div>
            </Card>
          )}

          {step === "success" && (
            <Card className="p-8 shadow-card animate-scale-in text-center">
              <div className="mb-6">
                <div className="inline-block p-4 bg-accent/10 rounded-full mb-4">
                  <CheckCircle2 className="w-16 h-16 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Declaration Received!</h2>
                <p className="text-muted-foreground mb-6">
                  Your declaration has been successfully submitted.
                </p>
              </div>

              <div className="bg-muted rounded-lg p-6 mb-6 text-left">
                <h3 className="font-semibold text-foreground mb-4">Incident Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="text-foreground font-medium">{formData.incidentType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="text-foreground font-medium">{formData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="text-foreground font-medium">{formData.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Submitted by:</span>
                    <span className="text-foreground font-medium">{userName}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Our team will review your submission and contact you within 24 hours.
              </p>

              <Button variant="success" size="lg" onClick={handleBackToDashboard} className="w-full">
                Return to Dashboard
              </Button>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default DeclareIncident;
