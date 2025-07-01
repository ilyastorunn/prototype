import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const sections = [
  "ABOUT US",
  "OUR MISSION",
  "OUR VISION",
  "OUR QUALITY POLICY",
  "FAIR CALENDAR",
  "ARSKAR TV",
  "CERTIFICATES",
];

export default function Corporate() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.replace("#", ""));
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  const [activeSection, setActiveSection] = useState("ABOUT US");

  const renderContent = () => {
    switch (activeSection) {
      case "ABOUT US":
        return (
          <section id="about-us">
            <p className="mb-4">
              In 1996, a small lathe distribution partners worldwide since the beginning Arskar experience in
              workshops and workshop customers, Arskar benefit from the expertise and the experience from Turkey. As a
              full service provider of Truck and Bus parts, Arskar is the leading service partner of the automotive
              industry.
            </p>
            <p className="mb-4">
              In addition to the headquarters in Turkey, service and logistics centers and trained, authorized
              distribution partners with a global network of subsidiaries, reliable local support and spare parts for
              workshop customers in more than 30 countries provide supplies. Distribution partners and workshop
              customers benefit from Truck and Bus parts consisting of two product brands for various requirements
              with guaranteed quality.
            </p>
            <p>
              Regular and clear feedback from distribution partners and workshop customers in worldwide markets
              returns to the continuous further development of the product and service offering at Arskar. The result
              of this close collaboration throughout the entire value chain is to generate sustainable solutions for
              mutual growth.
            </p>
          </section>
        );
      case "OUR MISSION":
        return (
          <section id="our-mission">
            <p className="mb-4">
              To be a pioneering, dynamic, self-renewing brand company in the automotive sector and management
              understanding all over the world and to adopt a customer-oriented corporate structure.
            </p>
            <p>
              To provide the same quality products and services to all companies, big or small, without any
              discrimination. To be an exemplary company by making a global reputation with its investment,
              production, employment and quality understanding.
            </p>
          </section>
        );
      case "OUR VISION":
        return (
          <section id="our-vision">
            <p className="mb-4">
              To become a pioneering and exemplary company that is sensitive to people and the environment by
              increasing customer satisfaction, creating a new and more stable market structure.
            </p>
            <p>To make the ARSKAR brand a leading brand in the international arena ...</p>
          </section>
        );
      case "OUR QUALITY POLICY":
        return (
          <section id="our-quality-policy">
            <ul className="list-disc pl-5 space-y-2">
              <li>KEEPING CUSTOMER SATISFACTION IN THE FOREFRONT,</li>
              <li>TAKING THE PRINCIPLE OF CONTINUOUS IMPROVEMENT,</li>
              <li>PROVIDING THE DEVELOPMENT OF SUPPLIERS,</li>
              <li>WITH THE PARTICIPATION OF EMPLOYEES,</li>
              <li>FOLLOWING THE TECHNOLOGICAL DEVELOPMENTS,</li>
              <li>TO MAKE QUALITY PRODUCTION.</li>
            </ul>
          </section>
        );
      case "FAIR CALENDAR":
        return (
          <section id="fair-calendar">
            <img src="/assets/fair-calendar.png" alt="Fair Calendar" className="rounded-xl border" />
          </section>
        );
      case "ARSKAR TV":
        return (
          <section id="arskar-tv">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <iframe
                src="https://www.youtube.com/embed/Bhz6L0U4z8g"
                className="w-full aspect-video"
                allowFullScreen
              />
              <iframe
                src="https://www.youtube.com/embed/f1OmrDEIuqY"
                className="w-full aspect-video"
                allowFullScreen
              />
              <iframe
                src="https://www.youtube.com/embed/VJLMDFtiQTw"
                className="w-full aspect-video"
                allowFullScreen
              />
              <iframe
                src="https://www.youtube.com/embed/1h4UtlaT6K8"
                className="w-full aspect-video"
                allowFullScreen
              />
            </div>
          </section>
        );
      case "CERTIFICATES":
        return (
          <section id="certificates">
            <img
              src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=2116&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Certificates"
              className="rounded-xl border"
            />
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row gap-8 px-4 py-8 max-w-7xl mx-auto">
        <aside className="w-full md:w-1/4 space-y-2">
          {sections.map((section) => (
            <button
              key={section}
              className={`w-full text-left px-4 py-2 rounded-md border ${
                activeSection === section ? "bg-blue-900 text-white" : "bg-white text-black"
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </button>
          ))}
        </aside>
        <main className="w-full md:w-3/4">
          <h1 className="text-3xl font-semibold mb-6">{activeSection}</h1>
          {renderContent()}
        </main>
      </div>
      <Footer />
    </>
  );
}