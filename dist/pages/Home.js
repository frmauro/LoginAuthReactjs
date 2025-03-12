import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAuth } from "../context/AuthContext";
const Home = () => {
    const { logout } = useAuth();
    return (_jsxs("div", { children: [_jsx("h1", { children: "Bem-vindo!" }), _jsx("button", Object.assign({ onClick: logout }, { children: "Logout" }))] }));
};
export default Home;
