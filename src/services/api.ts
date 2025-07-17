import axios from "axios";

// Definição do tipo para um produto (ajuste conforme necessário)
interface Product {
  id: number;
  name: string;
  description?: string;
  status: number;
  createdAt?: Date;
  amount: number;
  price: number;
}

export const updateProduct = async (product: Product, token: string): Promise<void> => {
  try {
     await axios.put<Product>(
      `http://localhost:5002/api/products/${product.id}`,
      product,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};

export const fetchProducts = async (token: string): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(
      "http://localhost:5002/api/products",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
};


export const getProductById = async (id: string, token: string): Promise<Product> => {
  console.log(`Buscando produto com ID: ${id}`);

  // Simulando um atraso de rede (como se fosse uma requisição real)
  //await new Promise((resolve) => setTimeout(resolve, 500));

try {
    const response = await axios.get<Product>(
      `http://localhost:5002/api/products/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //console.log("Produto encontrado:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar o produto:", error);
    return {} as Product;
  }
};
