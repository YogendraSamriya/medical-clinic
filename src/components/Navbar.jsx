import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          Medical Clinic
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>

          {/* Appointment Button */}
          <Link to="/appointment" className="appointment-btn">
            Appointment
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;