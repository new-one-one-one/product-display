import axios from "axios";

const apiUrl = "https://qr328n-8000.csb.app/api";

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${apiUrl}/products`);
    return response.data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
};

export const getProductById = async (productId: number) => {
  try {
    const response = await axios.get(`${apiUrl}/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (productData: any) => {
  try {
    const response = await axios.post(`${apiUrl}/products`, productData);
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error("Failed to create product");
    }
  } catch (error) {
    throw error;
  }
};
