import React, { useState } from "react";

const OrderModal = ({ product, onClose }) => {
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
    const message = `📦 নতুন অর্ডার\n\n🧾 প্রোডাক্ট: ${product.name}\n💵 প্রাইস: ${product.price}\n🔢 কোড: ${product.id}\n\n👤 নাম: ${formData.name}\n📞 ফোন: ${formData.contact}\n🔢 পরিমাণ: ${formData.quantity}\n🏠 ঠিকানা: ${formData.address}`;
    const url = `https://wa.me/8801738730573?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Order Now</h2>
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
        <input
          name="quantity"
          onChange={handleChange}
          placeholder="Quantity"
          className="border p-2 mb-2 w-full"
        />
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
    
