import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import { assetPath } from "@/lib/assetPath";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={assetPath("./images/parallax.jpg")}
          alt="Community gathering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ngo-dark/90 via-ngo-dark/70 to-ngo-dark/40" />
      </div>

      <div className="relative z-10 container-tight px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6 border border-primary/30">
            <Heart className="w-4 h-4 text-ngo-warm" />
            <span className="text-sm font-body font-medium text-primary-foreground/90">A Non-Profit NGO — For and By Caregivers</span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
            Asha Supported Mental Illness Caregivers Association
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 font-body leading-relaxed mb-8 max-w-xl">
            A society where every caregiver of a person with mental illness is empowered, supported, and valued.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#about" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-body font-semibold hover:opacity-90 transition-opacity">
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-body font-semibold hover:opacity-90 transition-opacity">
              Donate Now <Heart className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Event banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 max-w-xl bg-card/10 backdrop-blur-md rounded-xl p-5 border border-primary-foreground/10"
        >
          <p className="text-xs font-body uppercase tracking-widest text-ngo-warm mb-1"> Events</p>
          <p className="font-heading text-xl font-bold text-primary-foreground">
            Peaceful Dharma @ Indira Park
          </p>
          <p className="text-sm text-primary-foreground/70 font-body">Saturday, 23rd August 2025 · 11 AM – 2 PM</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
