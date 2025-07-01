import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const products = [
  {
    id: 1,
    name: "Product One",
    description: "This is product one.",
    brand: "Brand A",
    referenceNumber: "REF001",
    weight: "500g",
    packageUnit: "Box",
    availability: "In Stock",
    category: "Category 1",
    image:
      "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Product Two",
    description: "This is product two.",
    brand: "Brand B",
    referenceNumber: "REF002",
    weight: "1kg",
    packageUnit: "Bag",
    availability: "Limited Stock",
    category: "Category 1",
    image:
      "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Product Three",
    description: "This is product three.",
    brand: "Brand C",
    referenceNumber: "REF003",
    weight: "250g",
    packageUnit: "Pack",
    availability: "Out of Stock",
    category: "Category 2",
    image:
      "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Product Four",
    description: "This is product four.",
    brand: "Brand A",
    referenceNumber: "REF004",
    weight: "750g",
    packageUnit: "Box",
    availability: "In Stock",
    category: "Category 1",
    image:
      "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching product data by id
    const parsedId = parseInt(id, 10);
    const foundProduct = products.find((p) => p.id === parsedId);
    setProduct(foundProduct);

    if (foundProduct) {
      const related = products.filter(
        (p) => p.category === foundProduct.category && p.id !== foundProduct.id
      );
      setRelatedProducts(related);
    }
  }, [id]);

  if (!product) {
    return <div>Loading product details...</div>;
  }

  const handleDownload = () => {
    alert(`Downloading details for ${product.name}`);
  };

  const handleAddToBasket = () => {
    alert(`Added ${quantity} of ${product.name} to basket.`);
  };

  const handleQuantityChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (val >= 1) {
      setQuantity(val);
    }
  };

  return (
    <>
      <Header />
      <div
        style={{
          maxWidth: 900,
          margin: "40px auto",
          padding: 30,
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#fff",
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ display: "flex", gap: 30 }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: 320,
              height: 320,
              objectFit: "cover",
              borderRadius: 12,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          />
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 32, fontWeight: "700", marginBottom: 12 }}>
              {product.name}
            </h1>
            <p
              style={{
                fontStyle: "italic",
                color: "#555",
                fontSize: 18,
                marginBottom: 24,
              }}
            >
              {product.description}
            </p>
            <table
              style={{
                width: "100%",
                marginTop: 10,
                borderCollapse: "collapse",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      fontWeight: "700",
                      padding: "10px 6px",
                      fontSize: 16,
                      width: 140,
                    }}
                  >
                    Brand:
                  </td>
                  <td style={{ padding: "10px 6px", fontSize: 16 }}>
                    {product.brand}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontWeight: "700",
                      padding: "10px 6px",
                      fontSize: 16,
                    }}
                  >
                    Reference Number:
                  </td>
                  <td style={{ padding: "10px 6px", fontSize: 16 }}>
                    {product.referenceNumber}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontWeight: "700",
                      padding: "10px 6px",
                      fontSize: 16,
                    }}
                  >
                    Weight:
                  </td>
                  <td style={{ padding: "10px 6px", fontSize: 16 }}>
                    {product.weight}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontWeight: "700",
                      padding: "10px 6px",
                      fontSize: 16,
                    }}
                  >
                    Package Unit:
                  </td>
                  <td style={{ padding: "10px 6px", fontSize: 16 }}>
                    {product.packageUnit}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontWeight: "700",
                      padding: "10px 6px",
                      fontSize: 16,
                    }}
                  >
                    Availability:
                  </td>
                  <td
                    style={{
                      padding: "10px 6px",
                      fontSize: 16,
                      color:
                        product.availability === "Out of Stock"
                          ? "red"
                          : "green",
                    }}
                  >
                    {product.availability}
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              style={{
                marginTop: 30,
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <button
                onClick={handleDownload}
                style={{
                  padding: "10px 16px",
                  cursor: "pointer",
                  backgroundColor: "#f5f5f5",
                  border: "1px solid #ccc",
                  borderRadius: 6,
                  fontWeight: "600",
                  fontSize: 16,
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#e0e0e0")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f5f5f5")
                }
              >
                Download Details
              </button>
            </div>
            <div
              style={{
                marginTop: 30,
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <label
                htmlFor="quantity"
                style={{ fontWeight: "700", fontSize: 18 }}
              >
                Quantity:
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                style={{
                  width: 70,
                  padding: 6,
                  fontSize: 16,
                  borderRadius: 6,
                  border: "1px solid #ccc",
                }}
              />
              <button
                onClick={handleAddToBasket}
                style={{
                  padding: "10px 20px",
                  backgroundColor:
                    product.availability === "Out of Stock"
                      ? "#999"
                      : "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: 6,
                  cursor:
                    product.availability === "Out of Stock"
                      ? "not-allowed"
                      : "pointer",
                  fontWeight: "700",
                  fontSize: 16,
                  transition: "background-color 0.3s ease",
                }}
                disabled={product.availability === "Out of Stock"}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.disabled)
                    e.currentTarget.style.backgroundColor = "#0056b3";
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.disabled)
                    e.currentTarget.style.backgroundColor = "#007bff";
                }}
              >
                Add to Basket
              </button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div style={{ marginTop: 60 }}>
            <h2 style={{ fontSize: 26, fontWeight: "700", marginBottom: 24 }}>
              Related Products
            </h2>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {relatedProducts.map((rp) => (
                <div
                  key={rp.id}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: 12,
                    padding: 16,
                    width: 190,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                    cursor: "pointer",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 6px rgba(0,0,0,0.05)";
                  }}
                >
                  <img
                    src={rp.image}
                    alt={rp.name}
                    style={{
                      width: "100%",
                      height: 160,
                      objectFit: "cover",
                      borderRadius: 10,
                      marginBottom: 12,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: "700",
                      margin: "0 0 8px",
                    }}
                  >
                    {rp.name}
                  </h3>
                  <p style={{ fontSize: 14, color: "#666", margin: 0 }}>
                    {rp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
