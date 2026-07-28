import React from "react";
import {
  Zap,
  // Github,
  // Linkedin,
  Mail,
  Heart,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-zinc-800 ">

    <div className="h-30 w-full flex flex-col gap-1 items-center justify-center">
      <p className="text-lg text-lime-400">
        SkyMart
      </p>
      <p className="flex items-center gap-2 text-xs text-zinc-500">
         © 2026 SkyMart • Built with React
      </p>
    </div>

    </footer>
  );
}

export default Footer;