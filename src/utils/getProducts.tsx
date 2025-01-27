import axios from "axios";

export default async function getProducts() {
  try {
    const {data} = await axios.get("https://fakestoreapi.com/products");
    return data;
  } catch (error) {
    console.log(error);
  }
}
