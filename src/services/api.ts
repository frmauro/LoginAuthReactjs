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

export const updateProduct = async (product: Product, token: string): Promise<void> => {
  try {
    console.log(product);
    console.log("Token: ", token);
  } catch (error) {}
};


export const getProductById = async (id: string, token: string) => {
  console.log(`Buscando produto com ID: ${id}`);

  // Simulando um atraso de rede (como se fosse uma requisição real)
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Simulando um produto retornado pela API
  return {
    id: Number(id),
    name: "Produto Teste",
    description: "Descrição do produto teste",
    status: 1,
    createdAt: new Date(),
    amount: 10,
    price: 99.99,
  };
};
