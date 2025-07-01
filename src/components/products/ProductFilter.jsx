const ProductFilter = ({ selected, onSelect, categories }) => {
    return (
      <div className="flex flex-wrap gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              selected === cat
                ? "bg-black text-white"
                : "bg-white border-gray-300 text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    );
  };
  
  export default ProductFilter;