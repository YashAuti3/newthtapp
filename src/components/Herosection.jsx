import React, { useState } from "react";
import "../index.css";

function HeroSection() {

  const [activeTab, setActiveTab] = useState("cab");

  return (
    <section className="hero">

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <div className="hero-circle"></div>

          <div className="hero-text">
            <p className="hero-tag">CLEAN USER-FIRST DESKTOP UI</p>

            <h1>
              BOOK CAB,<br />
              TRANSPORT,<br />
              
            </h1>

            <p className="hero-desc">
              Users can easily choose a service, enter location, select date, and complete booking.
              A simple and clean flow with minimum confusion.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="booking-card">

          <h3>QUICK BOOKING</h3>
          <p className="small-text">
            Select service and enter only the important details.
          </p>

          {/* Tabs */}
          <div className="tabs">
            <button
              className={activeTab === "cab" ? "active" : ""}
              onClick={() => setActiveTab("cab")}
            >
              Cab
            </button>

            <button
              className={activeTab === "transport" ? "active" : ""}
              onClick={() => setActiveTab("transport")}
            >
              Transport
            </button>

            
          </div>

          {/* FORM WITH LABELS */}
          <div className="form-row">

            <div className="input-group">
              <label>FROM</label>
              <input
                type="text"
                placeholder={
                  activeTab === "holiday"
                    ? "Enter Destination"
                    : "Location 1"
                }
              />
            </div>

            <div className="input-group">
              <label>TO</label>
              <input
                type="text"
                placeholder={
                  activeTab === "holiday"
                    ? "Number of People"
                    : "Location 2"
                }
              />
            </div>

          </div>

          <div className="form-row">

            <div className="input-group">
              <label>DATE</label>
              <input type="date" />
            </div>

            <div className="input-group">
              <label>TIME</label>
              <input type="time" />
            </div>

          </div>

          <button className="search-btn">
            Search and Continue
          </button>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;