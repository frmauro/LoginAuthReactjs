import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import { useAuth } from "../context/AuthContext";

const Products = () => {
    const { logout } = useAuth();
    const [products, setProducts] = useState([]);

    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }

    useEffect(() => {
        const loadProducts = async () => {
          const data = await fetchProducts(token);
          setProducts(data);
        };
        loadProducts();
      }, []);

    return (
        <div>
            <h1>Lista de Produtos</h1>
            <ul>
                {products.map((product) => (
                <li key={product.id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
            <button onClick={logout}>Logout</button>
      </div>
    );
}

export default Products;
