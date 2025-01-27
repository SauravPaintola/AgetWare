// AddToCartButton.tsx (Client-Side Component)
"use client"; // Mark this as a client-side component

import { useCart } from "@/context/CartContext"; 

interface AddToCartButtonProps {
  productId: number;
  title: string;
  price: number;
  image: string;
}

const AddToCartButton = ({
  productId,
  title,
  price,
  image,
}: AddToCartButtonProps) => {
  const { addItemToCart } = useCart(); // Use the cart context to manage the cart

  const handleAddToCart = () => {
    console.log("Adding to cart:", productId);
    addItemToCart({
      id: productId,
      title: title,
      price: price,
      quantity: 1,
      image: image,
    });
  };

  return (
    <button
      onClick={handleAddToCart} // Trigger add to cart when clicked
      className="mt-6 w-full bg-black text-white py-2 rounded-lg"
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
