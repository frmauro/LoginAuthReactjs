var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
import axios from "axios";
const AuthContext = createContext(undefined);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("token"));
    const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios.post("http://localhost:5000/api/auth/login", { email, password }, { headers: { "Content-Type": "application/json" } });
            const token = response.data.token;
            localStorage.setItem("token", token);
            setUser(token);
        }
        catch (error) {
            //console.error("Erro na autenticação:", error.response?.data || error);
            //alert("Erro ao autenticar");
            throw error;
        }
    });
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };
    return (_jsx(AuthContext.Provider, Object.assign({ value: { user, login, logout } }, { children: children })));
};
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
};
