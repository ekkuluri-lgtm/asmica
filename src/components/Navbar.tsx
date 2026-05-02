import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { assetPath } from "@/lib/assetPath";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Goals", href: "#goals" },
  { label: "Gallery", href: "#gallery" },
  { label: "Team", href: "#team" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-ngo-dark text-primary-foreground text-sm hidden md:block">
        <div className="container-tight flex items-center justify-between py-2 px-4">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> 9908859065</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> asmicagb@gmail.com</span>
          </div>
          <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> 1st Floor, Venkat Nagar, Banjara Hills, Hyd, TS</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container-tight flex items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={assetPath("./images/cropped-cropped-asmica-logo.png")}
              alt="ASMICA Logo"
              className="h-12 w-12 object-contain"
            />
            <div>
              <span className="font-heading text-lg font-bold text-foreground leading-tight block">ASMICA</span>
              <span className="text-xs text-muted-foreground leading-tight">Mental Illness Caregivers</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="px-3 py-2 text-sm font-body font-medium text-foreground hover:text-primary transition-colors rounded-md">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href="#contact" className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold font-body hover:opacity-90 transition-opacity">
              Donate Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-card border-t border-border px-4 pb-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2.5 text-sm font-body font-medium text-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="mt-2 block text-center px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold font-body">
              Donate Now
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
