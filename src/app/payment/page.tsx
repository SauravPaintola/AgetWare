"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext"; // Adjust the path as needed

const PaymentPage: React.FC = () => {
  const { cartItems, clearCart } = useCart();

  // State for dummy card details
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  // Calculate total price
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    if (!cardNumber || !cardHolder || !expiryDate || !cvv) {
      alert("Please fill in all card details.");
      return;
    }

    // Mock payment logic
    console.log("Payment data:", {
      items: cartItems,
      total: totalAmount.toFixed(2),
      cardDetails: { cardNumber, cardHolder, expiryDate, cvv },
    });

    // Simulate successful payment and clear cart
    alert("Payment successful! Thank you for your purchase.");
    clearCart();
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Payment Page</h1>

      {/* Order Summary */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-2 mb-2"
            >
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity} | Price: ${item.price}
                </p>
              </div>
              <p className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))
        )}
        <div className="flex justify-between mt-4">
          <p className="font-semibold text-lg">Total:</p>
          <p className="font-semibold text-lg">${totalAmount.toFixed(2)}</p>
        </div>
      </div>

      {/* Card Details Form */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Card Details</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              maxLength={16}
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Card Holder Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <input
                type="text"
                maxLength={5}
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="password"
                maxLength={3}
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Button */}
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-lg w-full font-semibold hover:bg-blue-600"
        onClick={handlePayment}
      >
        Pay ${totalAmount.toFixed(2)}
      </button>
    </div>
  );
};

export default PaymentPage;
