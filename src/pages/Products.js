import React from "react";  
import { useAuth } from "../context/AuthContext";

const Products = () => {
    const { logout } = useAuth();
    return (
        <div>
            <h1>Produtos</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Products;
