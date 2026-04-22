import React from "react";
import { useNavigate } from "react-router-dom";
import kedarnath from "../assets/kedarnath.jpg";
import kashmir from "../assets/kashmir.jpg";
import kathmandu from "../assets/kathmandu.jpg";
import jaypur from "../assets/jaypur.jpg";

function BookingSection() {
  const navigate = useNavigate();
  const experiences = [
    {
      id: 1,
      title: "Kedarnath Temple Trek",
      image: kedarnath,
      price: "₹8000",
      description: "Experience the spiritual journey to the sacred Kedarnath shrine. Trek through the majestic Himalayas and witness breathtaking mountain views. A pilgrimage like no other...",
      location: "Kedarnath, Uttarakhand",
      duration: "3 days",
      groupSize: "Up to 15"
    },
    {
      id: 2,
      title: "Kashmir Valley Tour",
      image: kashmir,
      price: "₹15000",
      description: "Begin your journey in the valley of paradise. Explore stunning lakes, lush gardens, and snow-capped mountains. Experience the magic of Kashmir's natural beauty...",
      location: "Srinagar, Kashmir",
      duration: "4 days",
      groupSize: "Up to 10"
    },
    {
      id: 3,
      title: "Kathmandu City Explorer",
      image: kathmandu,
      price: "₹12000",
      description: "Discover the ancient temples and vibrant culture of Kathmandu. Walk through historic streets, visit sacred sites, and immerse yourself in rich Nepali traditions...",
      location: "Kathmandu, Nepal",
      duration: "2 days",
      groupSize: "Up to 8"
    },
    {
      id: 4,
      title: "Jaipur Heritage Walk",
      image: jaypur,
      price: "₹6000",
      description: "Explore the Pink City's architectural marvels and royal heritage. Visit the City Palace, Jantar Mantar, and wander through the bustling bazaars of Jaipur...",
      location: "Jaipur, Rajasthan",
      duration: "2 days",
      groupSize: "Up to 12"
    }
  ];

  return (
    <section className="experiences-section" id="experiences">
      <div className="experiences-container">
        <div className="experiences-header">
          <h2 className="experiences-title">Popular Experiences</h2>
          <p className="experiences-subtitle">Hand-picked adventures from around the globe</p>
        </div>

        <div className="experiences-grid">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-image-wrapper">
                <img src={exp.image} alt={exp.title} className="experience-image" />
                <div className="price-badge">{exp.price}</div>
              </div>

              <div className="experience-content">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-desc">{exp.description}</p>

                <div className="experience-details">
                  <div className="detail-item">
                    <span className="detail-icon">📍</span>
                    <span className="detail-text">{exp.location}</span>
                  </div>

                  <div className="detail-row">
                    <div className="detail-item">
                      <span className="detail-icon">⏱️</span>
                      <span className="detail-text">{exp.duration}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">👥</span>
                      <span className="detail-text">{exp.groupSize}</span>
                    </div>
                  </div>
                </div>

                <button 
                  className="view-details-btn"
                  onClick={() => navigate(`/holiday-packages/${exp.id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookingSection;