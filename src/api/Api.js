import axios from "axios";

export async function ProductData() {
  const products = await axios.get(
    "https://fakestoreapiserver.reactbd.com/products"
  );
  return products;
}
