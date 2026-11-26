
import React from "react";

export function Button({
  children,
  className = "",
  variant = "primary",
  type = "button",
  ...props
}) {
  const styles = {
    primary:
      "bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-500/20",
    outline:
      "border border-white/20 text-white hover:bg-white/10",
    secondary:
      "bg-violet-50 text-violet-700 hover:bg-violet-100",
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 disabled:opacity-50 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

