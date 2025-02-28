import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import { useAuth } from "../context/AuthContext";

const Products = () => {
    const { logout } = useAuth();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
          const data = await fetchProducts();
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
