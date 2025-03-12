import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
const Layout = ({ children }) => (_jsxs("div", Object.assign({ style: { display: "flex", flexDirection: "column", height: "100vh" } }, { children: [_jsx(Header, {}), _jsxs("div", Object.assign({ style: { display: "flex", flex: 1 } }, { children: [_jsx(Sidebar, {}), _jsx("main", Object.assign({ style: { flex: 1, padding: "20px" } }, { children: children }))] })), _jsx(Footer, {})] })));
const App = () => {
    return (_jsx(AuthProvider, { children: _jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/home", element: _jsx(PrivateRoute, { children: _jsx(Layout, { children: _jsx(Home, {}) }) }) }), _jsx(Route, { path: "/products", element: _jsx(PrivateRoute, { children: _jsx(Layout, { children: _jsx(Products, {}) }) }) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/login" }) })] }) }) }));
};
export default App;
