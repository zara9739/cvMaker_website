import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS for toggling (includes Popper.js)
import './Navbar.css'; // Custom CSS for further styling if needed

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        {/* Navbar Brand (Optional) */}
        <Link className="navbar-brand">Cv_Maker</Link>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cv">CV</Link>
            </li>
          </ul>

          {/* Right-aligned SignIn and SignUp buttons */}
          <div className="d-flex">
            <Link className="btn btn-outline-primary me-2" to="/signin">Sign In</Link>
            <Link className="btn btn-primary" to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
