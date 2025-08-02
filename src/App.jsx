import React, { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import OrderModal from "./components/OrderModal";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white min-h-screen p-4 space-y-2 hidden md:block">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        {[
          { label: "All", value: "all" },
          { label: "Male Dress", value: "male" },
          { label: "Female Dress", value: "female" },
          { label: "Baby Dress", value: "baby" },
          { label: "Adult Dress", value: "adult" },
          { label: "Emitession", value: "emitession" },
          { label: "Other Collection", value: "other" },
        ].map((cat) => (
          <button
            key={cat.value}
            className={`block w-full text-left px-4 py-2 rounded hover:bg-gray-700 ${
              selectedCategory === cat.value ? "bg-gray-700" : ""
            }`}
            onClick={() => setSelectedCategory(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Hero Section */}
        <div className="mb-6">
          <img
            src="https://drive.google.com/uc?export=view&id=YOUR_IMAGE_ID_HERE"
            alt="Poster"
            className="w-full h-auto rounded-lg shadow-md object-cover max-h-[400px]"
          />
        </div>

        <h1 className="text-3xl font-bold text-center mb-6 text-purple-800">
          🛍️ Madina Unique Fashion Marketplace
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredProducts.length ? (
            filteredProducts.map((product, idx) => (
              <ProductCard
                key={product.id + "-" + idx}
                product={product}
                onImageClick={setSelectedImage}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">
              এই ক্যাটাগরিতে কোনো পণ্য নেই।
            </p>
          )}
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
    </div>
  );
};

export default App;

