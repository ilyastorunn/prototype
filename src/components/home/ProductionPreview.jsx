import { motion } from "framer-motion";

const steps = [
  {
    title: "Modern Machinery",
    description: "Our state-of-the-art machines ensure efficiency and precision at every stage of production.",
    image: "https://images.unsplash.com/photo-1583737097428-af53774819a2?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "High-Quality Raw Materials",
    description: "We use carefully selected materials to produce soft, strong, and sustainable tissue products.",
    image: "https://plus.unsplash.com/premium_photo-1682144661655-1f3ed161b24f?q=80&w=1692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Automated Packaging",
    description: "Final products are automatically packaged to preserve hygiene and product integrity.",
    image: "https://plus.unsplash.com/premium_photo-1661963449696-89b762c74a32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const ProductionPreview = () => {
  return (
    <section className="bg-white py-20 md:py-32 px-6 md:px-12 lg:px-24 border-t">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] mb-4">
          Our Production Process
        </h2>
        <p className="text-[#4B5563] text-lg max-w-2xl mx-auto mb-12">
          From raw material to final roll — Arskar ensures quality and consistency throughout the entire production cycle.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white shadow-sm rounded-xl overflow-hidden border hover:shadow-md transition"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[#111111] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#4B5563] text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionPreview;
