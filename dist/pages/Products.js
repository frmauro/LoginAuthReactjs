var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import { useAuth } from "../context/AuthContext";
import "./Products.css";
const Products = () => {
    const { logout } = useAuth();
    const [products, setProducts] = useState([]);
    const token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "/login";
    }
    useEffect(() => {
        const loadProducts = () => __awaiter(void 0, void 0, void 0, function* () {
            if (token) {
                const data = yield fetchProducts(token);
                setProducts(data);
            }
        });
        loadProducts();
    }, []);
    return (_jsxs("div", { children: [_jsx("h1", { children: "Products" }), _jsx("ul", { children: products.map((product) => (_jsxs("li", { children: [product.name, " - ", product.amount] }, product.id))) }), _jsx("button", Object.assign({ onClick: logout }, { children: "Logout" }))] }));
};
export default Products;
