import { motion } from "framer-motion";
import { HeartHandshake, Megaphone, Building, Users } from "lucide-react";

const goals = [
  {
    icon: HeartHandshake,
    title: "Care & Support",
    description: "To care, help, guide and provide moral and necessary support to parents, caretakers and guardians of mentally ill persons.",
  },
  {
    icon: Megaphone,
    title: "Awareness",
    description: "To disseminate all types of information regarding the disease in order to bring awareness to members and the public in general.",
  },
  {
    icon: Building,
    title: "Resource Access",
    description: "To provide information regarding existing services — hospitals, psychiatrists, counselors, therapists and rehabilitation centers.",
  },
  {
    icon: Users,
    title: "Common Platform",
    description: "To provide a common platform to all members and stakeholders to work for common causes relating to mental health.",
  },
];

const GoalsSection = () => (
  <section id="goals" className="section-padding bg-muted">
    <div className="container-tight">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <p className="text-sm font-body uppercase tracking-widest text-primary font-semibold mb-2">Our Goals</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Our Goal Is Your Goal
        </h2>
        <p className="font-body text-muted-foreground">We work to find solutions to the questions in our minds and to support caregivers of those with mental illness.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {goals.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
          >
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
              <g.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">{g.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{g.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GoalsSection;
