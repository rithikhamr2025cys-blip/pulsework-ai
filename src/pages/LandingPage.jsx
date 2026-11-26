
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  BrainCircuit,
  Zap,
  BarChart3,
  Lock,
  Cloud,
  Sparkles
} from "lucide-react";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";

const features = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Intelligence",
    description: "Use intelligent AI capabilities to simplify your everyday workflow."
  },
  {
    icon: ShieldCheck,
    title: "Advanced Security",
    description: "Protect your digital workspace with modern security-focused tools."
  },
  {
    icon: Zap,
    title: "Faster Workflows",
    description: "Automate repetitive tasks and improve your productivity."
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Understand your progress through clear and useful insights."
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Access your workspace and resources from anywhere."
  },
  {
    icon: Lock,
    title: "Secure Access",
    description: "Keep your workspace organized with secure account access."
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#100d20] text-white">

      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative px-6 py-24 md:py-36">
        <div className="pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center">

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            <Sparkles size={16} />
            The future of intelligent productivity
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Work Smarter.
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Think Beyond.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Welcome to PulseWorks-AI. Bring intelligence, productivity
            and innovation together in one powerful digital workspace.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/register">
              <Button className="w-full sm:w-auto">
                Get Started <ArrowRight size={18} />
              </Button>
            </Link>

            <Link to="/login">
              <Button variant="outline" className="w-full sm:w-auto">
                Login to Workspace
              </Button>
            </Link>
          </div>

          <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-indigo-500/5 p-5 shadow-2xl shadow-violet-950/40">
            <div className="rounded-2xl border border-white/10 bg-[#19142b] p-6 md:p-10">
              <div className="flex items-center gap-2 border-b border-white/10 pb-5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 text-sm text-slate-400">PulseWorks AI Workspace</span>
              </div>

              <div className="grid gap-5 py-8 text-left sm:grid-cols-3">
                <div className="rounded-2xl bg-violet-500/10 p-6">
                  <BrainCircuit className="mb-4 text-violet-400" size={30} />
                  <h3 className="font-semibold">AI Intelligence</h3>
                  <p className="mt-2 text-sm text-slate-400">Smarter digital experiences.</p>
                </div>

                <div className="rounded-2xl bg-indigo-500/10 p-6">
                  <ShieldCheck className="mb-4 text-indigo-400" size={30} />
                  <h3 className="font-semibold">Secure Workspace</h3>
                  <p className="mt-2 text-sm text-slate-400">Security-focused environment.</p>
                </div>

                <div className="rounded-2xl bg-fuchsia-500/10 p-6">
                  <Zap className="mb-4 text-fuchsia-400" size={30} />
                  <h3 className="font-semibold">Productivity</h3>
                  <p className="mt-2 text-sm text-slate-400">Streamlined workflows.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-[#151126] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-violet-400">
              Our Features
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Everything you need to work smarter
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Explore a collection of intelligent tools designed
              to make your digital experience better.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-400/40 hover:bg-violet-500/[0.07]"
                >
                  <div className="mb-6 inline-flex rounded-xl bg-violet-500/15 p-4 text-violet-400 group-hover:bg-violet-500 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-violet-400/20 bg-gradient-to-r from-violet-700/30 to-indigo-700/30 px-7 py-16 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Ready to experience smarter work?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-slate-300">
            Start your journey with PulseWorks-AI and explore a smarter
            way to manage your digital workspace.
          </p>

          <Link to="/register" className="mt-8 inline-block">
            <Button>
              Create Your Account <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} PulseWorks-AI. All rights reserved.
      </footer>

    </div>
  );
}
