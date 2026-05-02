import { motion } from "framer-motion";
import { assetPath } from "@/lib/assetPath";

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container-tight">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <img
              src={assetPath("./images/IMG-20250519-WA0072-1.jpg")}
              alt="ASMICA community"
              className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-xl flex items-center justify-center">
              <img
                src={assetPath("./images/cropped-cropped-asmica-logo.png")}
                alt="ASMICA"
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-body uppercase tracking-widest text-primary font-semibold mb-2">About Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            YOU Are the Creator of Your Own Destiny
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            ASMICA — Asha Supported Mental Illness Caregivers Association — was founded in May 2023 by Sri M. Rama Mohan Rao & his wife Mrs. M. Anuradha, with active support from similar family caregivers across Hyderabad.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Initial members include Mr. Roopesh (their son), Mr. Gopa Rao and Dr. Jaganath, a kind and philosophical doctor. The journey started in November 2022 through a WhatsApp group called "Destiny."
          </p>

          <div className="flex items-center gap-2">
            <a href="#goals" className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-body font-semibold hover:opacity-90 transition-opacity">
              Our Goals
            </a>
            <a href="#contact" className="inline-flex items-center px-5 py-2.5 border border-border text-foreground rounded-lg text-sm font-body font-semibold hover:bg-muted transition-colors">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
