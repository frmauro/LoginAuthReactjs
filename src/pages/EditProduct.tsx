import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateProduct, getProductById } from "../services/api";

interface Product {
  id: number;
  name: string;
  description?: string;
  status: number;
  createdAt?: Date;
  amount: number;
  price: number;
}

const onSave = async (updatedProduct: Product | null) => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  }
  //console.log(updatedProduct);

  if (updatedProduct) {
    if (token) {
      await updateProduct(updatedProduct, token);
      window.location.href = "/products";
      return;
    } else {
      console.error("Token is null");
    }
  }
  // let msg = updatedProduct ? `Saved product: ${updatedProduct.name}` : 'No product to save';
  // alert(msg)
};

const EditProduct: React.FC = () => {
  const [editedProduct, setEditedProduct] = useState<Product | null>(null);
  const { id } = useParams<{ id: string }>();


// Buscar os dados do produto ao montar o componente
  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;

      try {
        const token = localStorage.getItem("token");
        if (!token) {
          window.location.href = "/login";
          return;
        }

        const product = await getProductById(id, token);
        setEditedProduct(product);
      } catch (error) {
        console.error("Erro ao buscar o produto:", error);
      }
    };

    fetchProduct();
  }, [id]);



  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setEditedProduct((prevProduct) => (
      prevProduct === null
        ? null
        :
      {
      ...prevProduct,
      [name]: name === "amount" || name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await onSave(editedProduct);
  };

  if (!editedProduct) {
    return <p>Carregando...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: 
        <input
          type="text"
          name="name"
          value={editedProduct?.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          name="amount"
          value={editedProduct?.amount}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={editedProduct?.price}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditProduct;
