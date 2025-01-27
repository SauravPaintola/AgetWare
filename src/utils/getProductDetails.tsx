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
