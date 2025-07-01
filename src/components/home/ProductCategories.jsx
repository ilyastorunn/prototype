import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Tissue Paper",
    image: "https://plus.unsplash.com/premium_photo-1677612031058-e90a2a6c03ed?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/products?tissue=true"
  },
  {
    title: "Napkins",
    image: "https://plus.unsplash.com/premium_photo-1675371421686-d092d62b75d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/products?napkin=true"
  },
  {
    title: "Towels",
    image: "https://plus.unsplash.com/premium_photo-1675371421509-d6df83959778?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/products?towel=true"
  }
];

const ProductCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-20 md:py-32 px-6 md:px-12 lg:px-24 border-t">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] mb-4">
          Explore Our Product Range
        </h2>
        <p className="text-[#4B5563] text-lg max-w-2xl mx-auto mb-12">
          We offer a wide variety of high-quality paper products tailored to meet every need.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              onClick={() => navigate(cat.link)}
              className="cursor-pointer bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-medium text-[#111111]">
                  {cat.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
