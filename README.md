================================================
File: README.md
================================================
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
https://agt-flax.vercel.app/
## Note
Already have done this type of work in freelancing www.traiderr.com which is working internationally have a look

All the basic amenities are fullfilled in this project and the major things you can check in the website i have mentioned

And about the problems i can use chat GPT for that but that will not be benifical for both of us. But i have a good thinking skill so i can do it on my own how ever it will take time for the first time in building logic but then it will be smooth like butter
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


================================================
File: eslint.config.mjs
================================================
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;


================================================
File: next.config.ts
================================================
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/**',
      },]
  }
  /* config options here */
};

export default nextConfig;


================================================
File: package.json
================================================
{
  "name": "agt",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@heroicons/react": "^2.2.0",
    "axios": "^1.7.9",
    "next": "15.1.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.1.6",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}


================================================
File: postcss.config.mjs
================================================
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;


================================================
File: tailwind.config.ts
================================================
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slides/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;


================================================
File: tsconfig.json
================================================
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}


================================================
File: src/app/globals.css
================================================
@tailwind base;
@tailwind components;
@tailwind utilities;



================================================
File: src/app/layout.tsx
================================================
import { CartProvider } from "@/context/CartContext";
import { Jost } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className}  antialiased  lg:p-20 pt-32 `}>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}


================================================
File: src/app/page.tsx
================================================
import Shop from "@/slides/Shop";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full h-[500px] flex relative ">
        <Image
          priority
          className="w-full h-full object-cover absolute top-0 right-0 z-0"
          src="/assets/hero.jpg"
          alt="hero"
          width={1000}
          height={1000}
        />
        <div className="flex flex-col z-10 justify-center p-5 lg:p-10 gap-4">
          <p className="font-medium">WINTER 2025 COLLECTION</p>
          <h1 className="text-7xl font-light">
            Valentin Paul <br /> Essential Collection
          </h1>
          <p className="text-sm text-[#7a7a7a]">
            Discover all the new arrivals of ready-to-wear and accessories
          </p>
          <Link
            className="font-medium flex items-center group"
            href={"/#products"}
          >
            {" "}
            <span>Shop Collection</span>
            <ArrowLongRightIcon className="w-5 group-hover:translate-x-4 transition-all" />
          </Link>
        </div>
      </div>
      <Shop />
    </div>
  );
};

export default page;


================================================
File: src/app/cart/page.tsx
================================================
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


================================================
File: src/app/payment/page.tsx
================================================
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


================================================
File: src/app/product/[slug]/page.tsx
================================================
import { Product } from "@/utils/data";
import getProductDetails from "@/utils/getProductDetails";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton"; // Import the client-side button component
type tParams = Promise<{ slug: string }>;
const ProductPage = async (props: { params: tParams }) => {
  const { slug } = await props.params;
  const data: Product = await getProductDetails({ slug });

  const colors = [
    { label: "Red", hex: "#8B0000" },
    { label: "Blue", hex: "#00008B" },
    { label: "Orange", hex: "#FFA500" },
    { label: "Green", hex: "#008000" },
    { label: "Pink", hex: "#FFC0CB" },
    { label: "Black", hex: "#000" },
    { label: "White", hex: "#FFF" },
  ];

  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image Section */}
      <div className="flex flex-col items-center overflow-hidden lg:h-[550px]">
        <Image
          priority
          src={data.image}
          alt={data.title}
          width={1000}
          height={1000}
          className="rounded-lg w-full h-full object-contain"
        />
      </div>

      {/* Details Section */}
      <div>
        <nav className="text-sm text-gray-500 mb-4">
          <span>
            <Link href={"/"}>Home</Link> / {data.category} /
          </span>{" "}
          <span className="text-black font-semibold">{data.title}</span>
        </nav>

        <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
        <p className="text-yellow-500">★★★★★ {data.rating.count} reviews</p>

        <div className="flex items-center mt-4 space-x-4">
          <span className="text-xl font-bold text-red-500">${data.price}</span>
        </div>

        <p className="text-gray-600 mt-4">{data.description}</p>

        <div className="mt-6">
          <p className="font-semibold">Color:</p>
          <div className="flex space-x-2 mt-2">
            {colors.map((color, index) => (
              <button
                key={index}
                style={{ backgroundColor: color.hex }}
                className="w-8 h-8 rounded-full border-2 border-transparent"
                title={color.label}
              ></button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Size:</p>
          <div className="flex space-x-2 mt-2">
            {sizes.map((size, index) => (
              <button
                key={index}
                className="px-4 py-2 border rounded-lg bg-gray-100"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Rating:</p>
          <span className="text-gray-600">{data.rating.rate} out of 5</span>
        </div>

        {/* AddToCartButton is now a client-side component */}
        <AddToCartButton
          image={data.image}
          productId={data.id}
          title={data.title}
          price={data.price}
        />

        <div className="flex items-center justify-between mt-4 text-gray-500">
          <Link href={"/cart"}>Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;


================================================
File: src/components/AddToCartButton.tsx
================================================
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


================================================
File: src/components/Cards.tsx
================================================
import { CardsProps } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cards: React.FC<CardsProps> = ({ id, title, price, image, rating }) => {
  return (
    <div className="w-64 bg-white shadow-lg p-3 h-[400px] group flex flex-col space-y-2 relative rounded-md overflow-hidden">
      <div className="w-full h-52">
        <Image
          className="w-full h-full object-contain group-hover:scale-105 transition-all duration-300"
          src={image}
          width={500}
          height={500}
          alt={title}
        />
      </div>
      <div className="flex items-center">
        <span>{rating.rate}</span>
        <span>/</span>
        <span>5 ⭐</span>
        <span className="ml-2 text-sm text-gray-600">
          {rating.count} review
        </span>
      </div>
      <h2 className="text-ellipsis line-clamp-2 min-h-[48px]">{title}</h2>
      <div className="flex items-center space-x-2">
        <span className="font-medium">₹{price}</span>
        <span className="text-gray-600 text-sm line-through">
          ₹{price + 100}
        </span>
      </div>
      <Link
        className="absolute bottom-0 left-0 w-full p-3 text-center text-white bg-black group-hover:opacity-100 transition-all duration-300"
        href={`/product/${id}`}
      >
        View Product
      </Link>
    </div>
  );
};

export default Cards;


================================================
File: src/components/FilteredProducts.tsx
================================================
"use client";

import React, { useState } from "react";
import Cards from "@/components/Cards";
import { CardsProps } from "@/utils/data";

interface FilteredProductsProps {
  products: CardsProps[]; // Accepts products from the parent
}

const FilteredProducts: React.FC<FilteredProductsProps> = ({ products }) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]); // Min and Max price range
  const [sort, setSort] = useState<string>("default"); // Sorting by price
  const [ratingFilter, setRatingFilter] = useState<number>(0); // Minimum rating filter
  const [searchQuery, setSearchQuery] = useState<string>(""); // Search query state

  // Filter logic
  const filteredProducts = products
    .filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1] // Filter by price range
    )
    .filter((product) => product.rating.rate >= ratingFilter) // Filter by rating
    .filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) // Filter by search query
    )
    .sort((a, b) => {
      if (sort === "low-to-high") return a.price - b.price;
      if (sort === "high-to-low") return b.price - a.price;
      return 0; // Default order
    });

  return (
    <div className="flex flex-col space-y-10">
      {/* Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Search Bar */}
        <div className="flex w-full lg:w-1/3 items-center space-x-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border rounded-md text-gray-800 bg-white"
          />
        </div>

        {/* Price Range */}
        <div className="flex items-center space-x-4">
          <label htmlFor="priceRange" className="font-medium text-gray-600">
            Price Range:
          </label>
          <input
            type="range"
            id="priceRange"
            min="0"
            max="1000"
            step="10"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="w-full max-w-xs"
          />
          <span className="font-medium text-gray-800">
            ₹{priceRange[0]} - ₹{priceRange[1]}
          </span>
        </div>

        {/* Sort by Price */}
        <div className="flex items-center space-x-4">
          <label htmlFor="sort" className="font-medium text-gray-600">
            Sort by:
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="p-2 border rounded-md text-gray-800 bg-white"
          >
            <option value="default">Default</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>

        {/* Rating Filter */}
        <div className="flex items-center space-x-4">
          <label htmlFor="rating" className="font-medium text-gray-600">
            Minimum Rating:
          </label>
          <select
            id="rating"
            value={ratingFilter}
            onChange={(e) => setRatingFilter(Number(e.target.value))}
            className="p-2 border rounded-md text-gray-800 bg-white"
          >
            <option value={0}>All Ratings</option>
            <option value={1}>1 Star & Above</option>
            <option value={2}>2 Stars & Above</option>
            <option value={3}>3 Stars & Above</option>
            <option value={4}>4 Stars & Above</option>
            <option value={5}>5 Stars Only</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 place-items-center lg:grid-cols-4 gap-y-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: CardsProps) => (
            <Cards key={product.id} {...product} />
          ))
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;


================================================
File: src/components/Navbar.tsx
================================================
"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between w-full h-16 shadow-md absolute top-0 left-0 px-10">
      <Link href="/">
        <p className="text-2xl font-bold text-gray-800">Valentin Paul</p>
      </Link>
      <button
        className="lg:hidden flex items-center px-3 py-2 border rounded text-gray-800 border-gray-300 hover:text-gray-900"
        onClick={toggleMenu}
      >
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0V15z" />
        </svg>
      </button>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:w-auto lg:space-x-6`}
      >
        <li>
          <Link href="/">
            <p className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-900">
              Shop
            </p>
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <p className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-900">
              Cart
            </p>
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;


================================================
File: src/context/CartContext.tsx
================================================
"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

// Define the structure of a cart item
interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

// Define the context value shape
interface CartContextType {
  cartItems: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (id: number) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Cart provider component to wrap your app
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    console.log("Cart items:", cartItems);
  }, [cartItems]);

  // Add item to cart
  const addItemToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);
      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        return [...prevItems, item];
      }
    });
  };

  // Remove item from cart
  const removeItemFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Update item quantity in cart
  const updateItemQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    });
  };

  // Clear all items from cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        updateItemQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


================================================
File: src/slides/Shop.tsx
================================================
import React from "react";
import FilteredProducts from "@/components/FilteredProducts";
import getProducts from "@/utils/getProducts";

const Shop = async () => {
  const products = await getProducts(); // Fetch products server-side

  return (
    <div className="flex flex-col w-full py-10 space-y-20 px-10">
      <div className="flex w-full justify-between">
        <h2 className="font-semibold text-3xl">Shop Products</h2>
      </div>

      {/* Pass the fetched products to the client component */}
      <FilteredProducts products={products} />
    </div>
  );
};

export default Shop;


================================================
File: src/utils/data.tsx
================================================
interface CardsProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface Rating {
  rate: number;
  count: number;
}

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}



export type { CardsProps, Product, Products };


================================================
File: src/utils/getProductDetails.tsx
================================================
import axios from "axios";
import { Product } from "./data";

export default async function getProductDetails({
  slug,
}: {
  slug: string;
}): Promise<Product> {
  try {
    const response = await axios.get<Product>(
      `https://fakestoreapi.com/products/${slug}`
    );
    return response.data; // Accessing the actual data returned by axios
  } catch (error) {
    console.error("Failed to fetch product details:", error);
    throw new Error("Unable to fetch product details"); // Throw an explicit error
  }
}


================================================
File: src/utils/getProducts.tsx
================================================
import axios from "axios";

export default async function getProducts() {
  try {
    const {data} = await axios.get("https://fakestoreapi.com/products");
    return data;
  } catch (error) {
    console.log(error);
  }
}


