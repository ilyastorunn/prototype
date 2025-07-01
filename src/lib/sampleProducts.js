const categories = [
    "Clutch Systems",
    "Brake Systems",
    "Caliper Repair Kits",
    "Gearbox Systems",
    "Air Brake Equipments",
    "Brake Chambers",
    "Heavy Duty Braking Equipments"
  ];
  
  const getRandomCategory = () =>
    categories[Math.floor(Math.random() * categories.length)];
  
  const sampleProducts = Array.from({ length: 1978 }, (_, i) => ({
    id: (i + 1).toString(),
    name: `Product ${i + 1}`,
    image: "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: getRandomCategory()
  }));
  
  export default sampleProducts;