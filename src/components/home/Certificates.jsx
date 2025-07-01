import { motion } from "framer-motion";

const certificates = [
  {
    name: "ISO 9001",
    image: "/src/assets/Certificates-Corporate-ARSKAR-AIR-BRAKE-CLUTCH-SYSTEM-07-01-2025_08_49_PM.png"
  },/* 
  {
    name: "SGS Certified",
    image: "/assets/images/cert-sgs.png"
  },
  {
    name: "FDA Approved",
    image: "/assets/images/cert-fda.png"
  } */
  // Daha fazla eklenebilir
];

const Certificates = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 border-t">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] mb-4">
          Certified Quality
        </h2>
        <p className="text-[#4B5563] text-lg max-w-2xl mx-auto mb-12">
          Arskar’s production process complies with global quality standards, backed by industry-leading certifications.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="h-20 w-auto grayscale hover:grayscale-0 transition"
              />
              <span className="text-sm text-[#4B5563] mt-2">{cert.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
