import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Membership",
    price: "₹100",
    period: "/month",
    items: ["Active Member ₹100", "Affected Member ₹100", "Institutional Member ₹100", "Honorary Member ₹0", "Patron Member ₹0"],
    featured: false,
  },
  {
    title: "Admission Fee",
    price: "₹100",
    period: "one-time",
    items: ["Active Member ₹100", "Affected Member ₹100", "Institutional Member ₹100", "Honorary Member ₹0", "Patron Member ₹0"],
    featured: true,
  },
  {
    title: "Yearly Subscription",
    price: "₹500",
    period: "/year",
    items: ["Active Member ₹500", "Affected Member ₹500", "Institutional ₹1000", "Honorary Member ₹0", "Patron Member ₹0"],
    featured: false,
  },
];

const MembershipSection = () => (
  <section id="membership" className="section-padding bg-muted">
    <div className="container-tight">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <p className="text-sm font-body uppercase tracking-widest text-primary font-semibold mb-2">Support Us</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Become a Member of ASMICA</h2>
        <p className="font-body text-muted-foreground">We take care of YOU! Join our community of caregivers.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-2xl p-6 border ${p.featured ? 'bg-ngo-dark border-ngo-dark text-primary-foreground shadow-xl scale-105' : 'bg-card border-border'}`}
          >
            <h3 className={`font-heading text-xl font-bold mb-1 ${p.featured ? 'text-primary-foreground' : 'text-foreground'}`}>{p.title}</h3>
            <div className="mb-5">
              <span className={`font-heading text-3xl font-bold ${p.featured ? 'text-ngo-warm' : 'text-primary'}`}>{p.price}</span>
              <span className={`text-sm font-body ${p.featured ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}> {p.period}</span>
            </div>
            <ul className="space-y-2.5 mb-6">
              {p.items.map((item) => (
                <li key={item} className={`flex items-center gap-2 text-sm font-body ${p.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  <Check className={`w-4 h-4 flex-shrink-0 ${p.featured ? 'text-ngo-warm' : 'text-primary'}`} />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`block text-center py-2.5 rounded-lg font-body text-sm font-semibold transition-opacity hover:opacity-90 ${
                p.featured ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-primary-foreground'
              }`}
            >
              Choose Plan
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MembershipSection;
