
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";
import { Shield } from "lucide-react";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const correctPassword = "admin1234"; // In a real app, this would be stored securely
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === correctPassword) {
      // Store the auth state in sessionStorage so it persists during the session
      sessionStorage.setItem("adminAuthenticated", "true");
      navigate("/admin");
    } else {
      toast({
        title: t("incorrectPassword"),
        variant: "destructive",
      });
    }
  };
  
  return (
    <div className="max-w-md mx-auto py-12">
      <div className="text-center mb-8">
        <Shield className="h-12 w-12 mx-auto mb-2" />
        <h1 className="text-3xl font-bold">{t("admin")}</h1>
      </div>
      
      <div className="border rounded-lg p-6 shadow-sm">
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium">
              {t("enterAdminPassword")}
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <Button type="submit" className="w-full">
            {t("login")}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
