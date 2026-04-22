import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import kedarnath from "../assets/kedarnath.jpg";
import kashmir from "../assets/kashmir.jpg";
import kathmandu from "../assets/kathmandu.jpg";
import jaypur from "../assets/jaypur.jpg";

function ExperienceDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);

  const experiences = {
    1: {
      title: "Kedarnath Temple Trek",
      image: kedarnath,
      price: "₹8000",
      description: "Experience the spiritual journey to the sacred Kedarnath shrine. Trek through the majestic Himalayas and witness breathtaking mountain views. This pilgrimage takes you through scenic routes, dense forests, and alpine meadows. Perfect for spiritual seekers and adventure enthusiasts.",
      location: "Kedarnath, Uttarakhand",
      duration: "3 days",
      groupSize: "Up to 15",
      aboutTitle: "About this experience",
      aboutDesc: "The Kedarnath Temple Trek is a sacred pilgrimage route in the Indian Himalayas. The journey offers stunning views of snow-capped peaks, pristine rivers, and ancient forests. Along the way, you'll experience local culture and hospitality. The trek culminates at the holy Kedarnath Temple, one of the most revered shrines in Hinduism.",
      hotels: [
        { name: "Kedarnath Guest House", price: "₹500-800/night", rating: "4.2★" },
        { name: "Shiv Valley Resort", price: "₹600-900/night", rating: "4.0★" },
        { name: "Himalaya Home Stay", price: "₹400-700/night", rating: "4.3★" },
        { name: "Trek Base Camp Lodge", price: "₹550-850/night", rating: "4.1★" }
      ],
      restaurants: [
        { name: "Mountain Kitchen", cuisine: "Local & Indian", price: "₹150-300", rating: "4.1★" },
        { name: "Kedarnath Bhojnalaya", cuisine: "Vegetarian", price: "₹100-250", rating: "4.0★" },
        { name: "Himalayan Cafe", cuisine: "Local Tibetan", price: "₹120-280", rating: "4.2★" },
        { name: "Village Dhaba", cuisine: "North Indian", price: "₹100-200", rating: "3.9★" }
      ]
    },
    2: {
      title: "Kashmir Valley Tour",
      image: kashmir,
      price: "₹15000",
      description: "Begin your journey in the valley of paradise. Explore stunning lakes, lush gardens, and snow-capped mountains. This tour includes visits to Srinagar, Gulmarg, and Pahalgam. Experience shikara rides, mountain hiking, and local Kashmiri culture. Ideal for nature lovers and photographers.",
      location: "Srinagar, Kashmir",
      duration: "4 days",
      groupSize: "Up to 10",
      aboutTitle: "About this experience",
      aboutDesc: "Kashmir Valley is often called the 'Paradise on Earth' for its breathtaking natural beauty. This tour covers the must-see destinations including Dal Lake with its famous houseboats, Gulmarg for skiing and mountain views, and Pahalgam for trekking. Experience authentic Kashmiri hospitality, traditional cuisine, and vibrant local markets.",
      hotels: [
        { name: "Dal Lake Houseboat", price: "₹1500-2500/night", rating: "4.5★" },
        { name: "Srinagar Plaza Hotel", price: "₹1200-2000/night", rating: "4.3★" },
        { name: "Gulmarg Resort", price: "₹1800-3000/night", rating: "4.4★" },
        { name: "Pahalgam Valley Inn", price: "₹1000-1800/night", rating: "4.2★" }
      ],
      restaurants: [
        { name: "Wazwan Kitchen", cuisine: "Kashmiri", price: "₹300-600", rating: "4.6★" },
        { name: "Lal Ded Restaurant", cuisine: "Local Kashmiri", price: "₹250-500", rating: "4.4★" },
        { name: "Mughal Garden Cafe", cuisine: "North Indian & Kashmiri", price: "₹200-400", rating: "4.3★" },
        { name: "Dal Lake Cafe", cuisine: "Fusion", price: "₹200-450", rating: "4.2★" }
      ]
    },
    3: {
      title: "Kathmandu City Explorer",
      image: kathmandu,
      price: "₹12000",
      description: "Discover the ancient temples and vibrant culture of Kathmandu. Walk through historic streets, visit sacred sites, and immerse yourself in rich Nepali traditions. Explore Durbar Square, Pashupatinath Temple, and Boudhanath Stupa. Experience authentic street food and local markets.",
      location: "Kathmandu, Nepal",
      duration: "2 days",
      groupSize: "Up to 8",
      aboutTitle: "About this experience",
      aboutDesc: "Kathmandu is a city of ancient temples, stunning architecture, and vibrant culture. This tour covers the UNESCO World Heritage sites including Kathmandu Durbar Square, Pashupatinath Temple on the banks of the Bagmati River, and Boudhanath Stupa - one of the world's largest stupas. Experience the spiritual and cultural richness of Nepal's capital.",
      hotels: [
        { name: "Kathmandu Plaza Hotel", price: "₹900-1500/night", rating: "4.3★" },
        { name: "Thamel Guest House", price: "₹600-1200/night", rating: "4.1★" },
        { name: "Kathford Heritage Inn", price: "₹1000-1800/night", rating: "4.4★" },
        { name: "Buddha Garden Hotel", price: "₹800-1400/night", rating: "4.2★" }
      ],
      restaurants: [
        { name: "Thamel Momo House", cuisine: "Nepali & Tibetan", price: "₹150-350", rating: "4.3★" },
        { name: "Everest Kitchen", cuisine: "Nepali", price: "₹120-300", rating: "4.2★" },
        { name: "Garden Cafe Kathmandu", cuisine: "Nepali & International", price: "₹200-400", rating: "4.1★" },
        { name: "Local Bhojnalaya", cuisine: "Traditional Nepali", price: "₹100-250", rating: "4.0★" }
      ]
    },
    4: {
      title: "Jaipur Heritage Walk",
      image: jaypur,
      price: "₹6000",
      description: "Explore the Pink City's architectural marvels and royal heritage. Visit the City Palace, Jantar Mantar, and wander through bustling bazaars. Experience Rajasthani culture, traditional crafts, and authentic street food. Perfect for history and culture enthusiasts.",
      location: "Jaipur, Rajasthan",
      duration: "2 days",
      groupSize: "Up to 12",
      aboutTitle: "About this experience",
      aboutDesc: "Jaipur, the Pink City, is famous for its distinctive terracotta-colored buildings and vibrant culture. This heritage walk covers the iconic City Palace, the astronomical observation site Jantar Mantar, and the famous Hawa Mahal (Palace of Winds). Explore local bazaars, visit traditional craft workshops, and experience authentic Rajasthani hospitality and cuisine.",
      hotels: [
        { name: "Pink City Hotel", price: "₹600-1100/night", rating: "4.2★" },
        { name: "Jaipur Heritage Inn", price: "₹500-900/night", rating: "4.0★" },
        { name: "City Palace Resort", price: "₹800-1400/night", rating: "4.3★" },
        { name: "Rajputana Guest House", price: "₹400-800/night", rating: "4.1★" }
      ],
      restaurants: [
        { name: "Rajasthani Thali House", cuisine: "Rajasthani", price: "₹150-300", rating: "4.4★" },
        { name: "Chokhi Dhani", cuisine: "Traditional Rajasthani", price: "₹200-350", rating: "4.3★" },
        { name: "Jaipur Bazaar Cafe", cuisine: "North Indian", price: "₹100-250", rating: "4.1★" },
        { name: "Laxmi Niwas Restaurant", cuisine: "Local Indian", price: "₹120-280", rating: "4.0★" }
      ]
    }
  };

  const exp = experiences[id];

  if (!exp) {
    return <div>Experience not found</div>;
  }

  return (
    <div className="experience-detail-page">
      {/* BACK BUTTON */}
      <button className="back-button" onClick={() => navigate("/holiday-packages")}>
        ← Back to Experiences
      </button>

      <div className="detail-container">
        {/* HERO IMAGE */}
        <div className="detail-hero">
          <img src={exp.image} alt={exp.title} className="detail-image" />
          <div className="detail-price-badge">{exp.price}</div>
        </div>

        <div className="detail-content">
          {/* LEFT SECTION */}
          <div className="detail-left">
            <h1 className="detail-title">{exp.title}</h1>

            {/* INFO BAR */}
            <div className="detail-info-bar">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <span>{exp.location}</span>
              </div>
              <div className="info-item">
                <span className="info-icon">⏱️</span>
                <span>{exp.duration}</span>
              </div>
              <div className="info-item">
                <span className="info-icon">👥</span>
                <span>{exp.groupSize}</span>
              </div>
            </div>

            {/* ABOUT SECTION */}
            <div className="detail-section">
              <h2>{exp.aboutTitle}</h2>
              <p>{exp.aboutDesc}</p>
            </div>

            {/* HOTELS SECTION */}
            <div className="detail-section">
              <h2>🏨 Affordable Hotels</h2>
              <div className="hotels-grid">
                {exp.hotels.map((hotel, idx) => (
                  <div key={idx} className="hotel-card">
                    <h3>{hotel.name}</h3>
                    <p className="hotel-price">{hotel.price}</p>
                    <p className="hotel-rating">{hotel.rating}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RESTAURANTS SECTION */}
            <div className="detail-section">
              <h2>🍽️ Affordable Restaurants</h2>
              <div className="restaurants-grid">
                {exp.restaurants.map((restaurant, idx) => (
                  <div key={idx} className="restaurant-card">
                    <h3>{restaurant.name}</h3>
                    <p className="restaurant-cuisine">{restaurant.cuisine}</p>
                    <p className="restaurant-price">{restaurant.price}</p>
                    <p className="restaurant-rating">{restaurant.rating}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - BOOKING */}
          <div className="detail-right">
            <div className="booking-sidebar">
              <h3>Select a Time</h3>
              <div className="date-options">
                {["Saturday, Apr 18", "Sunday, Apr 19", "Monday, Apr 20"].map((date, idx) => (
                  <div key={idx} className="date-option">
                    <p className="date-label">{date}</p>
                    <p className="time-slot">16:00</p>
                    <p className="spots-left">12 spots left</p>
                  </div>
                ))}
              </div>
              <button className="book-button">Select a Time to Book</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceDetailPage;
