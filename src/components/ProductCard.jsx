import React from "react";

const ProductCard = ({ product, onImageClick, onAddToCart, isInCart }) => {
  return (
    <div className="border rounded-xl p-3 shadow-md bg-green text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover rounded-lg mb-1.5 cursor-pointer" // image height আগের মতো
        onClick={() => onImageClick(product.image)}
      />
      <h2 className="text-base font-semibold">{product.name}</h2>
      {product.quality && (
        <p className="text-xs text-gray-700">Quality: {product.quality}</p>
      )}
      <p className="text-xs text-gray-700">Fabric: {product.fabric}</p>
      <p className="text-xs text-gray-700">Code: {product.id}</p>
      <p className="text-xs text-green-600 font-bold">{product.price}</p>
      <p className="text-xs mt-1">{product.description}</p>
      <div className="flex justify-center gap-2 mt-2">
        <a
          href={`https://wa.me/8801738730573?text=${encodeURIComponent(
            `আমি এই প্রোডাক্টটি অর্ডার করতে চাই: ${product.name} (Code: ${product.id})`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 bg-green-500 text-white rounded-lg hover:bg-green-600 text-xs"
        >
          Order Now
        </a>
        <button
          className={`px-3 py-1.5 rounded-lg text-xs ${
            isInCart
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700 text-white"
          }`}
          onClick={() => onAddToCart(product)}
          disabled={isInCart}
        >
          {isInCart ? "In Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
