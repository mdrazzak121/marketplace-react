import React, { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import OrderModal from "./components/OrderModal";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };


  const handleOrderCart = () => {
    setShowCartModal(true);
  };

  const handleCloseCartModal = () => {
    setShowCartModal(false);
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };


  const categories = [
    { label: "All", value: "all" },
    { label: "Male Dress", value: "male" },
    { label: "Female Dress", value: "female" },
    { label: "Baby Dress", value: "baby" },
    { label: "Adult Dress", value: "adult" },
    { label: "Emitession", value: "emitession" },
    { label: "Other Collection", value: "other" },
  ];

  return (
    <div className="flex">
      {/* Always show sidebar on all devices */}
      <aside
        className="bg-gray-800 text-white min-h-screen p-2 z-40 w-32 fixed top-0 left-0 h-full"
        style={{ maxWidth: 130 }}
      >
        <h2 className="text-base font-bold mb-2">Categories</h2>
        <div className="flex flex-col gap-1 justify-center items-center">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`w-full text-left px-2 py-1 rounded text-xs hover:bg-gray-700 ${
                selectedCategory === cat.value ? "bg-gray-700" : ""
              }`}
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
          <button
            className="w-full mt-2 px-2 py-1 rounded text-xs bg-purple-600 hover:bg-purple-700 text-white font-semibold"
            onClick={handleOrderCart}
            disabled={cart.length === 0}
          >
            All Cart Items ({cart.length})
          </button>
        </div>
      </aside>

  {/* Main Content */}
  <div className="flex-1 p-4" style={{ minHeight: '100vh', marginLeft: 130 }}>
        {/* Sticky Poster & Hero Section */}
        <div className="sticky top-0 z-30 bg-white pb-2" style={{ boxShadow: '0 2px 8px #0001' }}>
          <div className="mb-2">
            <img
              src="https://drive.google.com/uc?export=view&id=1QNmbbgXPi2iEQ_YHO7Q8HXLrCJ-PmiiM"
              alt="Poster"
              className="w-full h-auto rounded-lg shadow-md object-cover max-h-[400px]"
            />
          </div>
          <h1 className="text-3xl font-bold text-center mb-2 text-purple-800">
            🛍️ Madina Unique Fashion Marketplace
          </h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
          {filteredProducts.length ? (
            filteredProducts.map((product, idx) => (
              <ProductCard
                key={product.id + "-" + idx}
                product={product}
                onImageClick={setSelectedImage}
                onAddToCart={handleAddToCart}
                isInCart={!!cart.find((item) => item.id === product.id)}
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

        {/* Cart Modal */}
        {showCartModal && cart.length > 0 && (
          <OrderModal
            product={cart}
            onClose={handleCloseCartModal}
            isCart={true}
            onRemoveFromCart={handleRemoveFromCart}
          />
        )}
      </div>
    </div>
  );
};

export default App;

