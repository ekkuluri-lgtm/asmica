import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const VisionSection = () => (
  <section className="section-padding bg-background">
    <div className="container-tight">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-accent rounded-2xl p-8 border border-border"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <Eye className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
          <p className="font-body text-muted-foreground leading-relaxed">
            A society where every caregiver of a person with mental illness is empowered, supported, and valued ♥.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-ngo-dark rounded-2xl p-8"
        >
          <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-ngo-warm" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">Our Mission</h3>
          <p className="font-body text-primary-foreground/80 leading-relaxed">
            To advocate for the rights, well-being, and dignity of caregivers of persons with mental illness by providing support, education, and a collective voice to influence policy, reduce stigma, and promote accessible, compassionate mental health care.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default VisionSection;
