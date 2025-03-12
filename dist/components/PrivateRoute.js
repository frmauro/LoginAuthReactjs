import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    return user ? _jsx(_Fragment, { children: children }) : _jsx(Navigate, { to: "/login" });
};
export default PrivateRoute;
