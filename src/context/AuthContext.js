import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("token") || null);

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", 
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      setUser(token);
    } catch (error) {
      console.error("Erro na autenticação:", error.response?.data || error);
      alert("Erro ao autenticar");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
