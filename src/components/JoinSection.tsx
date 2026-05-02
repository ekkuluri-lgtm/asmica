import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, Building } from "lucide-react";

const ways = [
  { icon: MessageCircle, text: 'Say "Hello ASMICA" on WhatsApp: 9908859065' },
  { icon: Phone, text: "Call any Executive Member" },
  { icon: Mail, text: "Email ramamohanrao74@gmail.com" },
  { icon: Building, text: "Visit Help Desk at Asha Hospital, Road No 14, Banjara Hills" },
];

const JoinSection = () => (
  <section className="section-padding bg-background">
    <div className="container-tight">
      <div className="bg-accent rounded-2xl p-8 md:p-12 border border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">How to Join ASMICA</h2>
          <p className="font-body text-muted-foreground">Multiple ways to connect and become a member of our community.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {ways.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border"
            >
              <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <w.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-body text-sm text-foreground leading-relaxed">{w.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default JoinSection;
