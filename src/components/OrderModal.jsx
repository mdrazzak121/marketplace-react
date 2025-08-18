import React, { useState } from "react";


const OrderModal = ({ product, onClose, isCart, onRemoveFromCart }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    quantity: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    let message = '';
    if (isCart && Array.isArray(product)) {
      message = `🛒 কার্ট অর্ডার\n\n` + product.map((p, i) =>
        `#${i+1}\n🧾 প্রোডাক্ট: ${p.name}\n💵 প্রাইস: ${p.price}\n🔢 কোড: ${p.id}`
      ).join("\n\n");
      message += `\n\n👤 নাম: ${formData.name}\n📞 ফোন: ${formData.contact}\n🏠 ঠিকানা: ${formData.address}`;
    } else {
      message = `📦 নতুন অর্ডার\n\n🧾 প্রোডাক্ট: ${product.name}\n💵 প্রাইস: ${product.price}\n🔢 কোড: ${product.id}\n\n👤 নাম: ${formData.name}\n📞 ফোন: ${formData.contact}\n🔢 পরিমাণ: ${formData.quantity}\n🏠 ঠিকানা: ${formData.address}`;
    }
    const url = `https://wa.me/8801738730573?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">{isCart ? 'Order All Cart Items' : 'Order Now'}</h2>
        {isCart && Array.isArray(product) && product.length > 0 && (
          <div className="mb-4 max-h-40 overflow-y-auto border rounded p-2">
            {product.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-2 last:mb-0">
                <div>
                  <span className="font-semibold">{item.name}</span> <span className="text-xs text-gray-500">({item.id})</span>
                </div>
                <button
                  className="text-red-500 hover:underline text-xs ml-2"
                  onClick={() => onRemoveFromCart && onRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        <input
          name="name"
          onChange={handleChange}
          placeholder="Your Name"
          className="border p-2 mb-2 w-full"
        />
        <input
          name="contact"
          onChange={handleChange}
          placeholder="Contact Number"
          className="border p-2 mb-2 w-full"
        />
        {!isCart && (
          <input
            name="quantity"
            onChange={handleChange}
            placeholder="Quantity"
            className="border p-2 mb-2 w-full"
          />
        )}
        <textarea
          name="address"
          onChange={handleChange}
          placeholder="Delivery Address"
          className="border p-2 mb-2 w-full"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Send WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
    
