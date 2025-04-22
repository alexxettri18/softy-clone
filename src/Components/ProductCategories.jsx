
const products = [
    {
      id: 1,
      name: "Diaper",
      image: "/7.png",
      bg: "bg-pink-50",
    },
    {
      id: 2,
      name: "Wipes",
      image: "/6.png",
      bg: "bg-purple-50",
    },
    {
      id: 3,
      name: "Sanitary Napkins",
      image: "/4.png",
      bg: "bg-blue-50",
    },
    {
      id: 4,
      name: "Tissue Papers",
      image: "/5.png",
      bg: "bg-green-50",
    },
  ];
  
  const ProductCategories = () => {
    return (
      <div className="py-16 mx-auto max-w-7xl bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className={`${product.bg} rounded-xl p-6 text-center transition-transform hover:scale-105`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-purple-900">{product.name}</h3>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCategories;