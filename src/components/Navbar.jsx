
import { Link } from "react-router-dom";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-20 border-b border-white/10 bg-[#100d20]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-xl bg-violet-600 p-2">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-white">
            PulseWorks<span className="text-violet-400">-AI</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a href="/#home" className="text-sm text-slate-300 hover:text-white">Home</a>
          <a href="/#features" className="text-sm text-slate-300 hover:text-white">Features</a>
          <a href="/#about" className="text-sm text-slate-300 hover:text-white">About</a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/register">
            <Button>Get Started</Button>
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-white/10 bg-[#100d20] p-6 md:hidden">
          <a href="/#home" onClick={() => setOpen(false)} className="text-white">Home</a>
          <a href="/#features" onClick={() => setOpen(false)} className="text-white">Features</a>
          <a href="/#about" onClick={() => setOpen(false)} className="text-white">About</a>
          <Link to="/login" onClick={() => setOpen(false)}>
            <Button variant="outline" className="w-full">Login</Button>
          </Link>
          <Link to="/register" onClick={() => setOpen(false)}>
            <Button className="w-full">Get Started</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
