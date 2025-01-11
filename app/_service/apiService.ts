import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function getProducts() {
  try {
    const response = await axios.get(`${BASE_URL}/api/product`);
    return response.data.products;
  } catch (error) {
    throw new Error(`Failed to fetch products: ${error.message}`);
  }
}
