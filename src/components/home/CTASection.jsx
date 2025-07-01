import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F5F7FA] py-20 md:py-28 px-6 md:px-12 lg:px-24 border-t">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] mb-6">
          Let’s Work Together
        </h2>
        <p className="text-[#4B5563] text-lg mb-8 max-w-2xl mx-auto">
          Whether you’re looking to collaborate or request a quote, our team is ready to help you with high-quality tissue paper solutions.
        </p>
        <Button
          size="lg"
          className="px-8 py-4 text-base"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </Button>
      </motion.div>
    </section>
  );
};

export default CTASection;