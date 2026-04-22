import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function TruckPages() {
  const [step, setStep] = useState(1);

  const [selectedTruck, setSelectedTruck] = useState(null);
  const [showTruck, setShowTruck] = useState(false);

  const [selectedGoods, setSelectedGoods] = useState("");
  const [showGoods, setShowGoods] = useState(false);

  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("KG");

  const location = useLocation();

  const pickup = location.state?.pickup;
  const drop = location.state?.drop;

  const trucks = [
    {
      id: 1,
      name: "Mini Truck",
      capacity: "1.5 Ton",
      img: "https://images.jdmagicbox.com/quickquotes/images_main/tata-ace-mini-truck-on-hire-2220639022-x2kvmo8t.jpg"
    },
  
    {
      id: 3,
      name: "Medium Truck",
      capacity: "3 Ton",
      img: "https://www.tatamotors.com/wp-content/uploads/2025/09/Image-Tata-LPT-812-slide.jpg"
    },
    {
      id: 4,
      name: "Heavy Truck",
      capacity: "7.5 Ton",
      img: "https://www.automotiveworld.com/app/uploads/2013/01/Donfeng-truck.jpg"
    },
    {
      id: 5,
      name: "Container Truck",
      capacity: "12 Ton",
      img: "https://www.shutterstock.com/image-photo/semi-trailer-trucks-driving-on-600nw-2603350809.jpg"
    }
  ];

  const goodsList = [
    "Furniture",
    "Electronics",
    "Construction",
    "Food",
    "Medicines"
  ];

  return (
    <div className="page-wrapper">

      {/* LEFT LOGO */}
      <div className="tracking-logo">
        <div className="logo-box">
          <div className="logo-icon">K</div>
          <div>
            <h2 className="logo-text">KRAVI</h2>
            <p className="logo-sub">TRAVEL MANAGEMENT</p>
          </div>
        </div>
      </div>

      {/* RIGHT CONTACT */}
      <div className="top-contact">
        <p className="contact-title">Get in Touch</p>
        <p className="contact-number">12345 67890</p>
      </div>

      <div className="center-card">

        {/* LOCATION */}
        <div className="location-card">

          <div className="loc-row">
            <div className="loc-left">
              <span className="dot green"></span>
              <div>
                <div className="label">Pickup Location</div>
                <div className="value">{pickup || "Not Selected"}</div>
              </div>
            </div>
            <div className="time">--</div>
          </div>

          <div className="loc-row">
            <div className="loc-left">
              <span className="dot red"></span>
              <div>
                <div className="label">Drop-off Location</div>
                <div className="value">{drop || "Not Selected"}</div>
              </div>
            </div>
            <div className="time">--</div>
          </div>

          <div className="distance">
            Distance: -- km, Est. Time: --
          </div>

        </div>

        {/* STEP 1 */}
        <div className="form-block">
          <p className="label-title">Select Truck</p>

          <div
            className="dropdown-box"
            onClick={() => setShowTruck(!showTruck)}
          >
            {selectedTruck ? selectedTruck.name : "Choose Truck"}
          </div>

          {showTruck && (
            <div className="dropdown-list">
              {trucks.map((t) => (
                <div
                  key={t.id}
                  className="dropdown-item"
                  onClick={() => {
                    setSelectedTruck(t);
                    setShowTruck(false);
                    setStep(2);
                  }}
                >
                  <img src={t.img} alt="" />
                  <div>
                    <p>{t.name}</p>
                    <span>{t.capacity}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* STEP 2 */}
        {step >= 2 && (
          <div className="form-block">
            <p className="label-title">Select Goods</p>

            <div
              className="dropdown-box"
              onClick={() => setShowGoods(!showGoods)}
            >
              {selectedGoods || "Choose Goods"}
            </div>

            {showGoods && (
              <div className="dropdown-list">
                {goodsList.map((g, i) => (
                  <div
                    key={i}
                    className="dropdown-item"
                    onClick={() => {
                      setSelectedGoods(g);
                      setShowGoods(false);
                      setStep(3);
                    }}
                  >
                    {g}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* STEP 3 */}
        {step >= 3 && (
          <div className="form-block">
            <p className="label-title">Enter Weight</p>

            <div className="weight-container">
              <input
                type="number"
                placeholder="Approx Weight (1 Ton = 1000 KG)"
                className="weight-field"
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                  if (e.target.value) setStep(4);
                }}
              />

              <select
                className="unit-dropdown"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              >
                <option>KG</option>
                <option>Tons</option>
              </select>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step >= 4 && (
          <div className="btn-center">
            <button className="next-btn">
              Next →
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default TruckPages;