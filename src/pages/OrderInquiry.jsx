import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default function OrderInquiry() {
  const [orderCode, setOrderCode] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder sorgu – gerçek API ile entegre edilecekse burada fetch yapılmalı
    if (orderCode === "ARS123456") {
      setResult({
        status: "Shipped",
        estimatedDelivery: "2025-07-05",
        carrier: "DHL Express",
      });
    } else {
      setResult("notfound");
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <h2 className="text-lg bg-gray-200 text-gray-700 py-3 px-4 rounded mb-6 font-medium">
          You can query by entering the order code
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={orderCode}
            onChange={(e) => setOrderCode(e.target.value)}
            placeholder="ORDER CODE"
            className="w-full border border-gray-300 px-4 py-2 rounded text-center tracking-widest"
          />
          <button
            type="submit"
            className="w-full bg-[#001F4D] hover:bg-[#002f6b] text-white py-2 rounded font-semibold flex items-center justify-center gap-2"
          >
            GO <FaArrowRight />
          </button>
        </form>

        {result === "notfound" && (
          <p className="text-red-600 mt-6">
            Order not found. Please check the code.
          </p>
        )}

        {result && result !== "notfound" && (
          <div className="mt-10 bg-white p-6 rounded shadow-md text-left">
            <h3 className="text-lg font-semibold text-[#001F4D] mb-2">
              Order Details
            </h3>
            <p>
              <strong>Status:</strong> {result.status}
            </p>
            <p>
              <strong>Estimated Delivery:</strong> {result.estimatedDelivery}
            </p>
            <p>
              <strong>Carrier:</strong> {result.carrier}
            </p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
