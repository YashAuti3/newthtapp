import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function ServicesSection() {
  const navigate = useNavigate();
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
    {
      id: "holiday",
      title: "Holiday Plans",
      desc: "Destination-based package discovery and booking.",
      fields: [
        { type: "text", placeholder: "From city" },
        { type: "text", placeholder: "Destination" },
        { type: "datetime", placeholder: "DATE / TRAVELLERS" }
      ],
      buttonColor: "green",
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
                    
                    {/* WEIGHT INPUT */}
                    {field.type === "weight" ? (
                      <div className="weight-input-container">
                        <button 
                          className="weight-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setWeight(Math.max(1, weight - 1));
                          }}
                        >
                          -
                        </button>

                        <input
                          type="number"
                          value={weight}
                          onChange={(e) =>
                            setWeight(
                              Math.max(1, parseInt(e.target.value, 10) || 1)
                            )
                          }
                          className="field-input weight-input"
                          min="1"
                          readOnly
                        />

                        <button 
                          className="weight-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setWeight(weight + 1);
                          }}
                        >
                          +
                        </button>

                        <span className="weight-unit">kg</span>
                      </div>
                    ) : field.type === "datetime" ? (
                      
                      /* DATE INPUT */
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
                              className="custom-calendar"
                            />
                          </div>
                        )}
                      </div>
                    ) : (
                      
                      /* NORMAL INPUT */
                      <input
                        type="text"
                        placeholder={field.placeholder}
                        className="field-input"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* ✅ FIXED BUTTON */}
              <button 
                className={`service-btn ${service.buttonColor}`}
                onClick={() => {
                  if (service.id === "holiday") {
                    navigate("/holiday-packages");
                  }
                }}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;