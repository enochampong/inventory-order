import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <Link to="/"> Home Page</Link>
        <Link to="/CustomerSupport">Customer Support</Link>
        <Link to="/Warehouse">warehouse</Link>
        <Link to="/MechanicPage">Mechanics</Link>
        <Link to="/MarketingPage">Marketing Page</Link>
        <Link to="/AboutPage">AboutPage</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
