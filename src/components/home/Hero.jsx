import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="w-full bg-white py-20 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-[#111111]">
              We Shape Paper <br />
              with Precision and Passion
            </h1>
            <p className="mt-6 text-[#4B5563] text-lg max-w-xl mx-auto md:mx-0">
              Arskar manufactures high-quality tissue products with world-class
              technology and sustainability at its core.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                className="px-6 py-4 text-base"
                onClick={() => navigate("/products")}
              >
                Explore Products
              </Button>
              <Button
                variant="outline"
                className="px-6 py-4 text-base border-gray-300"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1664392316407-10189f207a56?q=80&w=1637&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tissue paper rolls"
              className="w-full h-auto rounded-2xl shadow-sm"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
