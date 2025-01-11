import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function login(data) {
  try {
    const response = await axios.post(`${BASE_URL}/api/user/login`, data);
    return response.data.user;
  } catch (error) {
    throw new Error(`Failed to login: ${error.message}`);
  }
}

export async function getProducts() {
  try {
    const response = await axios.get(`${BASE_URL}/api/product`);
    return response.data.products;
  } catch (error) {
    throw new Error(`Failed to fetch products: ${error.message}`);
  }
}

export async function createProduct(data) {
  try {
    const response = await axios.post(`${BASE_URL}/api/product`, data);
    return response.data.product;
  } catch (error) {
    throw new Error(`Failed to create product: ${error.message}`);
  }
}
