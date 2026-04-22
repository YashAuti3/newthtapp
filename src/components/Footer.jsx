import React from "react";
import "../index.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        <div>
          <h2>Kravi Travel</h2>
          <p>Your complete travel ecosystem.</p>
        </div>

        <div>
          <h4>Services</h4>
          <p>Cab Services</p>
          <p>Transport</p>
          <p>Holiday Plans</p>
        </div>

        <div>
          <h4>Company</h4>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div>
          <h4>Support</h4>
          <p>Helpline</p>
          <p>Track Booking</p>
          <p>Contact</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2024 Kravi Travel. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;