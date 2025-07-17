import React, { useState } from "react";
import { useLocation } from "react-router-dom";


interface Product {
  id: number;
  name: string;
  description?: string;
  status: number;
  createdAt?: Date;
  amount: number;
  price: number;
}


const ProductDetails: React.FC = () => {
        const location = useLocation();
        const product = location.state?.product as Product | undefined;
    if (!product) {
        return <div>Product not found</div>;
    }

    // Format the createdAt date if it exists
    if (product.createdAt) {
        product.createdAt = new Date(product.createdAt);
    }
    return (
        <div>
            <h1>Product Details</h1>
            {product ? (
                <div>
                    <p><strong>ID:</strong> {product.id}</p>
                    <p><strong>Name:</strong> {product.name}</p>
                    <p><strong>Description:</strong> {product.description}</p>
                    <p><strong>Status:</strong> {product.status}</p>
                    <p><strong>Created At:</strong> {product.createdAt?.toLocaleDateString()}</p>
                    <p><strong>Amount:</strong> {product.amount}</p>
                    <p><strong>Price:</strong> R$ {product.price}</p>
                    <button>Add Cart</button>
                </div>
            ) : (
                <p>Loading product details...</p>
            )}
        </div>
    );
}

export default ProductDetails;