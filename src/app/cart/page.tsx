"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

const Cart: React.FC = () => {
  const { cartItems, removeItemFromCart, updateItemQuantity } = useCart();

  const shippingCost = 15.0;
  const freeShippingThreshold = 250;
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = subtotal + shippingCost;
  const remainingForFreeShipping = freeShippingThreshold - subtotal;

  const handleRemoveItem = (id: number) => {
    removeItemFromCart(id);
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    updateItemQuantity(id, quantity);
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-6">
        <p className="text-3xl font-semibold text-red-500">
          Oops, your cart is empty! 👀
        </p>
        <p className="text-gray-600 mt-4">
          You havent added any products to your cart yet. Please go back to the
          shop and add some products to your cart.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      {/* Left Side - Cart Items */}
      <div className="w-full lg:w-3/5">
        {/* Free Shipping Progress */}
        <div className="bg-gray-100 p-3 rounded-lg text-sm text-red-600 font-semibold">
          {remainingForFreeShipping > 0 ? (
            <>
              Add{" "}
              <span className="text-red-500 font-bold">
                ${remainingForFreeShipping.toFixed(2)}
              </span>{" "}
              to get free shipping!
              <div className="w-full bg-gray-200 h-2 rounded mt-2">
                <div
                  className="bg-red-500 h-2 rounded"
                  style={{
                    width: `${(subtotal / freeShippingThreshold) * 100}%`,
                  }}
                ></div>
              </div>
            </>
          ) : (
            <span className="text-green-600">
              You qualify for free shipping!
            </span>
          )}
        </div>

        {/* Cart Items */}
        <div className="bg-white shadow-md rounded-lg p-4 mt-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col lg:flex-row items-center justify-between border-b pb-4 mb-4"
            >
              {/* Product Image */}
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="flex items-center gap-4">
                  <button
                    className="text-red-500 hover:text-red-700 text-xl"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    ✖
                  </button>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={80}
                    className="rounded-lg"
                  />
                </div>

                <div>{item.title}</div>
              </div>
              {/* Quantity and Price */}
              <div className="flex items-center gap-3">
                <div className="flex items-center border rounded-lg">
                  <button
                    className="px-2 py-1 text-lg"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    −
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    className="px-2 py-1 text-lg"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Coupon Input */}
        <div className="flex mt-4">
          <input
            type="text"
            placeholder="Coupon code"
            className="border p-2 flex-1 rounded-l-lg focus:outline-none"
          />
          <button className="bg-gray-800 text-white px-4 py-2 rounded-r-lg hover:bg-black">
            Apply coupon
          </button>
        </div>
      </div>

      {/* Right Side - Cart Summary */}
      <div className="w-full lg:w-2/5 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold border-b pb-3">Cart totals</h2>

        <div className="flex justify-between py-3">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="border-b pb-3">
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="font-semibold">${shippingCost.toFixed(2)}</span>
          </div>
          <p className="text-sm text-gray-500">
            Shipping to <strong>AL</strong>
          </p>
          <button className="text-red-500 text-sm">Change address</button>
        </div>

        <div className="flex justify-between text-lg font-semibold mt-3">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button className="w-full bg-red-500 text-white py-3 mt-4 rounded-lg hover:bg-red-600">
          <Link href={"/payment"} className="w-full h-full text-center">
            Proceed to checkout
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Cart;
