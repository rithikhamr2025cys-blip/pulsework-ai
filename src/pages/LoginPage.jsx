
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Sparkles, ArrowLeft } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Login form validated successfully! Connect a backend to authenticate.");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#100d20] px-5 py-12">

      <div className="fixed left-6 top-6">
        <Link to="/" className="flex items-center gap-2 text-slate-300 hover:text-white">
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>

      <div className="w-full max-w-md">

        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600">
            <Sparkles className="text-white" size={28} />
          </div>

          <h1 className="text-3xl font-bold text-white">
            PulseWorks<span className="text-violet-400">-AI</span>
          </h1>
          <p className="mt-2 text-slate-400">Welcome back! Sign in to continue.</p>
        </div>

        <Card className="border-white/10 bg-white p-2">
          <CardHeader>
            <CardTitle className="text-slate-900">Login to your account</CardTitle>
            <CardDescription>
              Enter your credentials to access your workspace.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="mailto:"
                    onClick={(e) => {
                      e.preventDefault();
                      setMessage("Password recovery requires a configured backend.");
                    }}
                    className="text-xs font-semibold text-violet-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    className="pr-12"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Login
              </Button>

              {message && (
                <p role="status" className="rounded-lg bg-violet-50 p-3 text-center text-sm text-violet-700">
                  {message}
                </p>
              )}

            </form>
          </CardContent>

          <CardFooter className="justify-center">
            <p className="text-sm text-slate-500">
              Don't have an account?{" "}
              <Link to="/register" className="font-bold text-violet-600 hover:underline">
                Create Account
              </Link>
            </p>
          </CardFooter>
        </Card>

      </div>
    </div>
  );
}
