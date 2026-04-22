import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom"; // 🔥 added

function ServicesSection() {
  const navigate = useNavigate(); // 🔥 added

  const [selectedService, setSelectedService] = useState("cab");
  const [weight, setWeight] = useState(1);

  const [dates, setDates] = useState({
    cab: null,
    holiday: null
  });

  const [showCalendar, setShowCalendar] = useState({
    cab: false,
    holiday: false
  });

  const [locationValues, setLocationValues] = useState({
    pickup: "",
    drop: ""
  });

  const [showLocationBox, setShowLocationBox] = useState(null);

  const cities = [
    "Mumbai",
    "Pune",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Ahmedabad"
  ];

  const services = [
    {
      id: "cab",
      title: "Cab Service",
      desc: "Quick booking for direct travel.",
      fields: [
        { type: "text", placeholder: "Loc 1" },
        { type: "text", placeholder: "Loc 2" },
        { type: "datetime", placeholder: "DATE / TIME" }
      ],
      buttonColor: "orange",
    },
    {
      id: "transport",
      title: "Transport",
      desc: "Parcel or goods movement in simple steps.",
      fields: [
        { type: "text", placeholder: "Pickup location" },
        { type: "text", placeholder: "Drop location" },
        { type: "weight", placeholder: "WEIGHT / VEHICLE" }
      ],
      buttonColor: "blue",
    },
   
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <p className="section-sub">SERVICE SELECTION</p>
        <h2 className="section-title">
          FIRST CHOOSE SERVICE. THEN SIMPLE FORM.
        </h2>

        <div className="services-cards-container">
          {services.map((service) => (
            <div
              className={`service-selection-card ${
                selectedService === service.id ? "active" : ""
              }`}
              key={service.id}
              onClick={() => setSelectedService(service.id)}
            >
              <h3>{service.title}</h3>
              <p className="service-desc">{service.desc}</p>

              <div className="service-fields">
                {service.fields.map((field, index) => (
                  <div className="form-field" key={index}>

                    {/* WEIGHT */}
                    {field.type === "weight" ? (
                      <div className="weight-input-container">
                        <button
                          className="weight-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setWeight(Math.max(1, weight - 1));
                          }}
                        >-</button>

                        <input
                          type="number"
                          value={weight}
                          className="field-input weight-input"
                          readOnly
                        />

                        <button
                          className="weight-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setWeight(weight + 1);
                          }}
                        >+</button>

                        <span className="weight-unit">kg</span>
                      </div>

                    ) : field.type === "datetime" ? (

                      <div className="date-input-container">
                        <div
                          className="input-with-icon"
                          onClick={() =>
                            setShowCalendar((prev) => ({
                              ...prev,
                              [service.id]: !prev[service.id],
                            }))
                          }
                        >
                          <input
                            type="text"
                            value={
                              dates[service.id]
                                ? dates[service.id].toLocaleDateString("en-GB")
                                : ""
                            }
                            placeholder={field.placeholder}
                            className="field-input"
                            readOnly
                          />
                          <span className="field-icon">📅</span>
                        </div>

                        {showCalendar[service.id] && (
                          <div className="calendar-popup">
                            <Calendar
                              onChange={(date) => {
                                setDates((prev) => ({
                                  ...prev,
                                  [service.id]: date,
                                }));
                                setShowCalendar((prev) => ({
                                  ...prev,
                                  [service.id]: false,
                                }));
                              }}
                              value={dates[service.id]}
                            />
                          </div>
                        )}
                      </div>

                    ) : (

                      service.id === "transport" &&
                      (field.placeholder === "Pickup location" ||
                        field.placeholder === "Drop location") ? (

                        <input
                          type="text"
                          placeholder={field.placeholder}
                          value={
                            field.placeholder === "Pickup location"
                              ? locationValues.pickup
                              : locationValues.drop
                          }
                          className="field-input"
                          readOnly
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowLocationBox(
                              field.placeholder === "Pickup location"
                                ? "pickup"
                                : "drop"
                            );
                          }}
                        />

                      ) : (
                        <input
                          type="text"
                          placeholder={field.placeholder}
                          className="field-input"
                        />
                      )
                    )}
                  </div>
                ))}
              </div>

              {/* 🔥 UPDATED BUTTON (ONLY THIS PART ADDED) */}
              <button
                className={`service-btn ${service.buttonColor}`}
                onClick={(e) => {
                  e.stopPropagation();

                  if (service.id === "transport") {
                    if (!locationValues.pickup || !locationValues.drop) {
                      alert("Please select both pickup and drop location");
                      return;
                    }

                    navigate("/truck", {
                      state: {
                        pickup: locationValues.pickup,
                        drop: locationValues.drop
                      }
                    });
                  }
                }}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 POPUP */}
      {showLocationBox && (
        <div className="location-popup">
          <div className="location-box">
            <h3>
              {showLocationBox === "pickup"
                ? "Enter your pickup location"
                : "Enter your drop location"}
            </h3>

            <input
              type="text"
              className="popup-input"
              placeholder="Type location..."
              value={locationValues[showLocationBox]}
              onChange={(e) => {
                setLocationValues((prev) => ({
                  ...prev,
                  [showLocationBox]: e.target.value,
                }));
              }}
            />

            {locationValues[showLocationBox] && (
              <div className="suggestions-box">
                {cities
                  .filter((city) =>
                    city
                      .toLowerCase()
                      .includes(
                        locationValues[showLocationBox].toLowerCase()
                      )
                  )
                  .map((city, i) => (
                    <div
                      key={i}
                      className="suggestion-item"
                      onClick={() => {
                        setLocationValues((prev) => ({
                          ...prev,
                          [showLocationBox]: city,
                        }));
                        setShowLocationBox(null);
                      }}
                    >
                      {city}
                    </div>
                  ))}
              </div>
            )}

            <button
              className="popup-btn"
              onClick={() => setShowLocationBox(null)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ServicesSection;