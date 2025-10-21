import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginModal = ({ open, onOpenChange }: LoginModalProps) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim()) {
      localStorage.setItem("userName", name.trim());
      toast({
        title: "Welcome!",
        description: `Successfully logged in as ${name.trim()}`,
      });
      onOpenChange(false);
      navigate("/dashboard");
    } else {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gradient-glass backdrop-blur-glass border-border/50">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-3xl font-serif">
            <div className="p-2 bg-gradient-luxury rounded-lg shadow-soft">
              <Lock className="w-6 h-6 text-white" />
            </div>
            Client Portal Access
          </DialogTitle>
          <DialogDescription className="text-muted-foreground font-light">
            Enter your name to access your premium insurance dashboard.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-6">
          <div className="space-y-3">
            <Label htmlFor="name" className="text-foreground font-medium">Your Name</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="h-12 bg-white/50 border-border/50 focus:border-primary/50"
            />
          </div>
          <Button variant="luxury" size="lg" className="w-full shadow-luxury" onClick={handleLogin}>
            Access Dashboard
          </Button>
          <p className="text-xs text-center text-muted-foreground font-light">
            Demonstration environment — No password required
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
