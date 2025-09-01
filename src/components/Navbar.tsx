import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#222", color: "#fff" }}>
      <Link to="/" style={{ margin: "0 1rem", color: "#fff" }}>Home</Link>
      <Link to="/media" style={{ margin: "0 1rem", color: "#fff" }}>Media</Link>
      <Link to="/events" style={{ margin: "0 1rem", color: "#fff" }}>Events</Link>
      <Link to="/contact" style={{ margin: "0 1rem", color: "#fff" }}>Contact</Link>
    </nav>
  );
};

export default Navbar;
