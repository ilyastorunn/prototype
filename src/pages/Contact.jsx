import { useState } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    verification: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submit işlemi buraya gelecek
    console.log("Form Submitted:", form);
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* MAP & INFO */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-[#001F4D]">ARSKAR</h2>
            <p>
              Aşağıpınarbaşı 5. Osb Mahallesi, 516. Sokak No : 16 - Selçuklu /
              Konya / TÜRKİYE
            </p>
            <a
              href="https://www.google.com/maps?q=ARSKAR,+Aşağıpınarbaşı+5.+Osb+Mahallesi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-4 py-2 rounded"
            >
              Directions
            </a>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Tel:</strong> +90 332 345 09 23
              </p>
              <p>
                <strong>Fax:</strong> +90 332 345 09 25
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:export@arskar.com.tr" className="text-blue-700">
                  export@arskar.com.tr
                </a>
              </p>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.9173797642925!2d32.46000031550393!3d38.04900060000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a9715c8495!2sARSKAR!5e0!3m2!1str!2str!4v1680000000000"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="rounded"
            ></iframe>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div>
          <h2 className="text-xl font-semibold text-[#001F4D] mb-6">
            Contact Form
          </h2>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Firstname & Lastname *"
              className="border px-4 py-2 rounded w-full"
              required
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="border px-4 py-2 rounded w-full"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail *"
              className="border px-4 py-2 rounded w-full"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              className="border px-4 py-2 rounded w-full"
              required
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your message *"
              className="md:col-span-2 border px-4 py-2 rounded w-full h-32"
              required
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 bg-[#001F4D] hover:bg-[#002f6b] text-white px-6 py-2 rounded font-semibold w-full"
            >
              SEND →
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
