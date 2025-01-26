import axios from "axios";

export default async function getProducts() {
  const data = axios.get("https://fakestoreapi.com/products");
  return data;
}
