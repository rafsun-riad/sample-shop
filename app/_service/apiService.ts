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

export async function register(data) {
  try {
    const response = await axios.post(`${BASE_URL}/api/user/register`, data);
    return response.data.user;
  } catch (error) {
    throw new Error(`Failed to register: ${error.message}`);
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

export async function getProduct(id) {
  try {
    const response = await axios.get(`${BASE_URL}/api/product/${id}`);
    return response.data.product;
  } catch (error) {
    throw new Error(`Failed to fetch product: ${error.message}`);
  }
}

export async function createProduct(data) {
  try {
    const response = await axios.post(`${BASE_URL}/api/product`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data.product;
  } catch (error) {
    throw new Error(`Failed to create product: ${error.message}`);
  }
}

export async function updateProduct(id, data) {
  try {
    const response = await axios.put(`${BASE_URL}/api/product/${id}`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data.product;
  } catch (error) {
    throw new Error(`Failed to update product: ${error.message}`);
  }
}

export async function deleteProduct(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/api/product/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to delete product: ${error.message}`);
  }
}
