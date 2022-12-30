import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/"> <strong>Home</strong> </Link> | <Link to="/favoritos"> <strong>Favoritas</strong></Link>
    </nav>
  );
}