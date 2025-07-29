import React, { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import ProductCard from "./components/OrderModal";
const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-800">
        🛍️ Madina Unique Fashion Marketplace
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onImageClick={setSelectedImage}
          />
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full Size"
            className="max-w-full max-h-full rounded-xl shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default App;
