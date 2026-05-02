import { motion } from "framer-motion";
import { assetPath } from "@/lib/assetPath";

const images = [
  { src: assetPath("./images/image-1.jpg"), alt: "ASMICA community event 1" },
  { src: assetPath("./images/image-2.jpg"), alt: "ASMICA community event 2" },
  { src: assetPath("./images/image-3.jpg"), alt: "ASMICA community event 3" },
  { src: assetPath("./images/image-4.jpg"), alt: "ASMICA community event 4" },
  { src: assetPath("./images/image-5.jpg"), alt: "ASMICA community event 5" },
  { src: assetPath("./images/image-6.jpg"), alt: "ASMICA recent activity" },
];

const dharnaImages = [
  { src: assetPath("./images/dharna/1.jpeg"), alt: "Dharna event 1" },
  { src: assetPath("./images/dharna/2.jpeg"), alt: "Dharna event 2" },
  { src: assetPath("./images/dharna/3.jpeg"), alt: "Dharna event 3" },
  { src: assetPath("./images/dharna/4.jpeg"), alt: "Dharna event 4" },
  { src: assetPath("./images/dharna/5.jpeg"), alt: "Dharna event 5" },
  { src: assetPath("./images/dharna/6.jpeg"), alt: "Dharna event 6" },
  { src: assetPath("./images/dharna/7.jpeg"), alt: "Dharna event 7" },
  { src: assetPath("./images/dharna/8.jpeg"), alt: "Dharna event 8" },
  { src: assetPath("./images/dharna/9.jpeg"), alt: "Dharna event 9" },
];

const spoortyInnaugrationImages = [
  { src: assetPath("./images/spoorty-innaguration/spoorty-innaguration.jpeg"), alt: "Spoorty inauguration 1" },
  { src: assetPath("./images/spoorty-innaguration/2.jpeg"), alt: "Spoorty inauguration 2" },
  { src: assetPath("./images/spoorty-innaguration/3.jpeg"), alt: "Spoorty inauguration 3" },
  { src: assetPath("./images/spoorty-innaguration/4.jpeg"), alt: "Spoorty inauguration 4" },
  { src: assetPath("./images/spoorty-innaguration/5.jpeg"), alt: "Spoorty inauguration 5" },
  { src: assetPath("./images/spoorty-innaguration/6.jpeg"), alt: "Spoorty inauguration 6" },
  { src: assetPath("./images/spoorty-innaguration/7.jpeg"), alt: "Spoorty inauguration 7" },
  { src: assetPath("./images/spoorty-innaguration/8.jpeg"), alt: "Spoorty inauguration 8" },
];



const GallerySection = () => (
  <section id="gallery" className="section-padding bg-muted">
    <div className="container-tight">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <p className="text-sm font-body uppercase tracking-widest text-primary font-semibold mb-2">Gallery</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Community In Action</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="overflow-hidden rounded-xl aspect-[4/3] group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
    <div className="gallery-heading"> </div>
    <div className="container-tight">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Dharna at Indira park Hyderabad</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {dharnaImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="overflow-hidden rounded-xl aspect-[4/3] group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
    <div className="gallery-heading"> </div>
    <div className="container-tight">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Inauguration photos of DayCare Centre in collaboration with Spoorthy Foundation</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {spoortyInnaugrationImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="overflow-hidden rounded-xl aspect-[4/3] group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
