import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
    <Header />
    <div style={{ display: "flex", flex: 1 }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "20px" }}>{children}</main>
    </div>
    <Footer />
  </div>
);

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<PrivateRoute><Layout><Home /></Layout></PrivateRoute>} />
          <Route path="/products" element={<PrivateRoute><Layout><Products /></Layout></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;