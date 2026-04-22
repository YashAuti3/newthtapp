import React from "react";
import "../index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container nav-flex">
        
        {/* LEFT LOGO */}
        <div className="logo-box">
          <div className="logo-icon">K</div>
          <div>
            <h2 className="logo-text">KRAVI</h2>
            <p className="logo-sub">TRAVEL MANAGEMENT</p>
          </div>
        </div>

        {/* CENTER LINKS */}
        <ul className="nav-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#booking">BOOKING</a></li>
          <li><a href="#tracking">TRACKING</a></li>
          <li><a href="#helpline">HELPLINE</a></li>
        </ul>

        {/* RIGHT BUTTON */}
        <button className="nav-btn">View My Bookings</button>

      </div>
    </nav>
  );
}

export default Navbar;