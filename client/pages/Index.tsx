import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Eye, EyeOff, Lock, Mail, HelpCircle } from "lucide-react";

export default function Index() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log("Sign in attempt:", { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Logo and Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-2xl mb-4 sm:mb-6 shadow-lg">
              <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">ezEMRx</h1>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-1">Welcome back</h2>
            <p className="text-sm sm:text-base text-gray-600 px-2">Sign in to access your Electronic Health Record system</p>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
            <form onSubmit={handleSignIn} className="space-y-5 sm:space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-11 sm:h-12 border-gray-200 focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <button
                    type="button"
                    className="text-sm text-primary hover:text-primary/80 font-medium"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-11 sm:h-12 border-gray-200 focus:border-primary focus:ring-primary"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  className="border-gray-300"
                />
                <Label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                  Remember me for 30 days
                </Label>
              </div>

              {/* Sign In Button */}
              <Button 
                type="submit" 
                className="w-full h-11 sm:h-12 bg-primary hover:bg-primary/90 text-white font-semibold text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                Sign in to ezEMRx
              </Button>
            </form>

            {/* Help Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Having trouble signing in?{" "}
                <button className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1">
                  <HelpCircle className="w-4 h-4" />
                  Contact IT support
                </button>
              </p>
            </div>
          </div>

          {/* HIPAA Compliance Notice */}
          <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-green-800 mb-1">
                  HIPAA Compliant System
                </h3>
                <p className="text-sm text-green-700">
                  This system complies with HIPAA regulations. All access is monitored and logged for security purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-4 text-center">
        <p className="text-sm text-gray-500">
          © 2025 ezEMRx. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
