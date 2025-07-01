import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Link key={product.id} to={`/products/${product.id}`}>
          <ProductCard data={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;