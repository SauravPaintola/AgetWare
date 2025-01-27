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
