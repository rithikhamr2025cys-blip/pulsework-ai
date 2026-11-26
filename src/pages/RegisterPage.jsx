
import { useState } from "react";
import { Link } from "react-router-dom";
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

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [accepted, setAccepted] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);

    if (form.password.length < 8) {
      setMessage("Password must contain at least 8 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (!accepted) {
      setMessage("Please accept the Terms and Conditions.");
      return;
    }

    setSuccess(true);
    setMessage("Registration form completed successfully! Connect a backend to create your account.");

    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

    setAccepted(false);
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

          <p className="mt-2 text-slate-400">
            Create an account and get started.
          </p>
        </div>

        <Card className="border-white/10 bg-white p-2">
          <CardHeader>
            <CardTitle className="text-slate-900">Create your account</CardTitle>
            <CardDescription>
              Fill in your details to join PulseWorks-AI.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>

                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Minimum 8 characters"
                    value={form.password}
                    onChange={handleChange}
                    autoComplete="new-password"
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

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>

                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirm ? "text" : "password"}
                    placeholder="Re-enter your password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    autoComplete="new-password"
                    className="pr-12"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    aria-label="Toggle confirm password visibility"
                  >
                    {showConfirm ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              <label className="flex items-start gap-3 text-sm text-slate-600">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-violet-600"
                />
                <span>
                  I agree to the{" "}
                  <a href="#terms" className="font-semibold text-violet-600">
                    Terms and Conditions
                  </a>{" "}
                  and Privacy Policy.
                </span>
              </label>

              <Button type="submit" className="w-full">
                Create Account
              </Button>

              {message && (
                <p
                  role="status"
                  className={`rounded-lg p-3 text-center text-sm ${
                    success
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}

            </form>
          </CardContent>

          <CardFooter className="justify-center">
            <p className="text-sm text-slate-500">
              Already have an account?{" "}
              <Link to="/login" className="font-bold text-violet-600 hover:underline">
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>

      </div>
    </div>
  );
}
