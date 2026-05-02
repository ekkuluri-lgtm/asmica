import { motion } from "framer-motion";

const executive = [
  { name: "Sri M. Rama Mohan Rao", role: "President" },
  { name: "Mr. Sri Anjaneyulu", role: "Vice President" },
  { name: "Mrs. Rafath Razia", role: "Secretary" },
  { name: "Mr. Srikanth", role: "Joint Secretary" },
  { name: "Sri Bhairav", role: "Treasurer" },
  { name: "Dr. Jagannath G", role: "Executive Committee" },
  { name: "Sri Shivkumar", role: "Executive Committee" },
  { name: "Sri KV Ramana Reddy", role: "Executive Committee" },
];

const volunteers = ["Mrs. Vaishali", "Mrs. Bharathy", "Mrs. Danteswari", "Mr. Balakrishna", "Mrs. Vijayalakshmi"];

const TeamSection = () => (
  <section id="team" className="section-padding bg-background">
    <div className="container-tight">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <p className="text-sm font-body uppercase tracking-widest text-primary font-semibold mb-2">Our Team</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Executive Members</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {executive.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-xl p-5 text-center border border-border hover:border-primary/30 transition-colors"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-accent flex items-center justify-center mb-3">
              <span className="font-heading text-lg font-bold text-primary">{m.name.charAt(m.name.indexOf(' ') + 1) || m.name[0]}</span>
            </div>
            <h4 className="font-heading text-base font-bold text-foreground">{m.name}</h4>
            <p className="font-body text-sm text-muted-foreground">{m.role}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-accent rounded-2xl p-8"
      >
        <h3 className="font-heading text-xl font-bold text-foreground mb-4 text-center">Our Volunteers</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {volunteers.map((v) => (
            <span key={v} className="px-4 py-2 bg-card rounded-full text-sm font-body text-foreground border border-border">{v}</span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default TeamSection;
