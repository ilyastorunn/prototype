import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AboutPreview = () => {
  return (
    <section className="bg-white py-20 md:py-32 px-6 md:px-12 lg:px-24 border-t">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://obs.hmist.com.tr/files/upload/exhibition-logo/6452725d79c5e_arskar.jpeg"
            alt="Arskar factory"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] mb-6">
            Who We Are
          </h2>
          <p className="text-[#4B5563] text-lg mb-8 max-w-prose">
            With over 30 years of experience in the tissue paper industry, Arskar continues to grow with its commitment to quality, sustainability, and customer satisfaction.
          </p>
          <Button variant="ghost" className="text-primary hover:underline px-0">
            Read More →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
