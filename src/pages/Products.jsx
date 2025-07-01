import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import ProductFilter from "@/components/products/ProductFilter";
import ProductGrid from "@/components/products/ProductGrid";
import allProducts from "@/lib/sampleProducts";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const getPageNumbers = (totalPages, currentPage) => {
  const pages = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    let left = currentPage - 1;
    let right = currentPage + 1;

    if (currentPage <= 4) {
      left = 2;
      right = 5;
    } else if (currentPage >= totalPages - 3) {
      left = totalPages - 4;
      right = totalPages - 1;
    }

    if (left > 2) {
      pages.push("...");
    }

    for (let i = left; i <= right; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    if (right < totalPages - 1) {
      pages.push("...");
    }

    pages.push(totalPages);
  }

  return pages;
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    return filteredProducts.slice(startIndex, startIndex + productsPerPage);
  }, [filteredProducts, currentPage]);

  const pageNumbers = getPageNumbers(totalPages, currentPage);

  return (
    <>
      <Header />
      <div className="px-6 md:px-12 lg:px-24 py-16">
        <h1 className="text-4xl font-semibold text-[#111111] mb-6">
          Our Products
        </h1>
        <ProductFilter
          selected={selectedCategory}
          onSelect={setSelectedCategory}
          categories={[
            "All",
            "Clutch Systems",
            "Brake Systems",
            "Caliper Repair Kits",
            "Gearbox Systems",
            "Air Brake Equipments",
            "Brake Chambers",
            "Heavy Duty Braking Equipments",
          ]}
        />
        <ProductGrid
          products={currentProducts}
          renderProduct={(product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto"
                />
                <h3 className="mt-2 text-lg font-medium">{product.name}</h3>
              </div>
            </Link>
          )}
        />
        <div className="flex justify-center mt-8 space-x-3">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>
          {pageNumbers.map((page, index) =>
            page === "..." ? (
              <span key={index} className="px-4 py-2 text-gray-500 select-none">
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {page}
              </button>
            )
          )}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
