import { motion } from "framer-motion";

const stats = [
  { value: "6+", label: "Programs" },
  { value: "50+", label: "Members" },
  { value: "10+", label: "Volunteers" },
  { value: "2+", label: "Years of Service" },
];

const StatsSection = () => (
  <section className="relative py-16 overflow-hidden">
    <div className="absolute inset-0 bg-primary" />
    <div className="relative z-10 container-tight px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="text-center"
          >
            <p className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">{s.value}</p>
            <p className="font-body text-sm text-primary-foreground/70 mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
