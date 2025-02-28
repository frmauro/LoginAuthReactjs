import axios from "axios";

export const fetchProducts = async (token) => {
  try {
    const response = await axios.get("http://localhost:5002/api/products", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
};
