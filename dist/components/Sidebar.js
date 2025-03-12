import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const Sidebar = () => (_jsx("nav", Object.assign({ style: { width: "200px", background: "#ddd", padding: "10px" } }, { children: _jsxs("ul", Object.assign({ style: { listStyle: "none", padding: 0 } }, { children: [_jsx("li", { children: _jsx(Link, Object.assign({ to: "/home" }, { children: "Home" })) }), _jsx("li", { children: _jsx(Link, Object.assign({ to: "/products" }, { children: "Products" })) }), _jsx("li", { children: _jsx(Link, Object.assign({ to: "/login" }, { children: "Login" })) })] })) })));
export default Sidebar;
