import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5002/api/products");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
};
