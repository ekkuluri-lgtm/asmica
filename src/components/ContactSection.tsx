import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <section id="contact" className="section-padding bg-ngo-dark">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-body uppercase tracking-widest text-ngo-warm font-semibold mb-2">Contact Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-8">Get In Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-ngo-warm" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-primary-foreground text-sm">Location</h4>
                  <p className="font-body text-sm text-primary-foreground/60">1st Floor, inside Asha Hospital, Venkat Nagar, Banjara Hills, Hyderabad, Telangana 500034</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-ngo-warm" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-primary-foreground text-sm">Phone</h4>
                  <p className="font-body text-sm text-primary-foreground/60">8374741780 / 9908859065 / 6302419986</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-ngo-warm" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-primary-foreground text-sm">Email</h4>
                  <p className="font-body text-sm text-primary-foreground/60">asmicagb@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg text-sm font-body text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary"
              />
              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg text-sm font-body text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg text-sm font-body text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary"
              />
              <textarea
                rows={4}
                placeholder="Your message (optional)"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg text-sm font-body text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-secondary text-secondary-foreground rounded-lg font-body font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
