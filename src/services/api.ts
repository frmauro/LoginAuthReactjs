import axios from "axios";

// Definição do tipo para um produto (ajuste conforme necessário)
interface Product {
  id: number;
  name: string;
  description?: string;
  status: number;
  createdAt?: Date;
  amount: number;
}

export const fetchProducts = async (token: string): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>("http://localhost:5002/api/products", {
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
