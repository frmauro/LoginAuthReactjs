import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <nav style={{ width: "200px", background: "#ddd", padding: "10px" }}>
    <ul style={{ listStyle: "none", padding: 0 }}>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/products">Products</Link></li>
    </ul>
  </nav>
);

export default Sidebar;
