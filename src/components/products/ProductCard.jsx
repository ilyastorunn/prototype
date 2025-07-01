const ProductCard = ({ data }) => {
    return (
      <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
        <img
          src="https://images.unsplash.com/photo-1620987278429-ab178d6eb547?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={data.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-[#111111]">{data.name}</h3>
        </div>
      </div>
    );
  };
  
  export default ProductCard;