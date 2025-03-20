import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import { useAuth } from "../context/AuthContext";

import "./Products.css";

interface Product {
  id: number;
  name: string;
  amount: number;
  price: number;
}

const Products: React.FC = () => {
  const { logout } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);

    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }

    useEffect(() => {
        const loadProducts = async () => {
          if (token) {
            const data  = await fetchProducts(token);
            setProducts(data);
          }
        };
        loadProducts();
      }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                <li key={product.id}>{product.name} - {product.amount} - R$ {product.price}</li>
                ))}
            </ul>
            <button onClick={logout}>Logout</button>
      </div>
    );
}

export default Products;
