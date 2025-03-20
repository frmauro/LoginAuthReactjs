import React, { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

interface AuthContextType {
  user: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem("token"));

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post("http://authserver_container/api/auth/login", 
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      setUser(token);
    } catch (error) {
      //console.error("Erro na autenticação:", error.response?.data || error);
      //alert("Erro ao autenticar");
      throw error;
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

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
