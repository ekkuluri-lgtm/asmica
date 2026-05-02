import { Heart } from "lucide-react";
import { assetPath } from "@/lib/assetPath";

const Footer = () => (
  <footer className="bg-foreground py-8 px-4">
    <div className="container-tight flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img
          src={assetPath("./images/cropped-cropped-asmica-logo.png")}
          alt="ASMICA"
          className="h-10 w-10 object-contain"
        />
        <span className="font-heading text-sm font-bold text-background">ASMICA Foundation</span>
      </div>
      <p className="font-body text-xs text-background/50 flex items-center gap-1">
        © 2026 ASMICA. All rights reserved. Made with <Heart className="w-3 h-3 text-ngo-warm" /> in Hyderabad
      </p>
    </div>
  </footer>
);

export default Footer;
