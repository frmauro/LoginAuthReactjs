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
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        setError("");
        try {
            yield login(email, password);
            navigate("/home"); // Redireciona para a página Home após login bem-sucedido
        }
        catch (err) {
            setError("Falha na autenticação. Verifique suas credenciais.");
        }
    });
    return (_jsxs("div", { children: [_jsxs("form", Object.assign({ onSubmit: handleSubmit }, { children: [_jsx("input", { type: "email", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value), required: true }), _jsx("input", { type: "password", placeholder: "Senha", value: password, onChange: (e) => setPassword(e.target.value), required: true }), _jsx("button", Object.assign({ type: "submit" }, { children: "Login" }))] })), error && _jsx("p", Object.assign({ style: { color: "red" } }, { children: error }))] }));
};
export default Login;
