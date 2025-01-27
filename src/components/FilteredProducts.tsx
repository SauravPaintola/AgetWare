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
