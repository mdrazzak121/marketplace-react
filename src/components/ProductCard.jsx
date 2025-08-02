import React from "react";

const ProductCard = ({ product, onImageClick }) => {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-white text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover rounded-lg mb-2 cursor-pointer"
        onClick={() => onImageClick(product.image)}
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      {product.quality && (
        <p className="text-sm text-gray-700">Quality: {product.quality}</p>
      )}
      <p className="text-sm text-gray-700">Fabric: {product.fabric}</p>
      <p className="text-sm text-gray-700">Code: {product.id}</p>
      <p className="text-sm text-green-600 font-bold">{product.price}</p>
      <p className="text-sm mt-1">{product.description}</p>
      <a
        href={`https://wa.me/8801738730573?text=${encodeURIComponent(
          `আমি এই প্রোডাক্টটি অর্ডার করতে চাই: ${product.name} (Code: ${product.id})`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Order Now
      </a>
    </div>
  );
};

export default ProductCard;
